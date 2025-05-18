import { parseStringPromise } from "xml2js";

interface ReleaseInfo {
  version: string;
  downloadUrl: string;
}

async function getReleaseInfo(): Promise<ReleaseInfo> {
  try {
    const response = await fetch("https://updates.chessmate.dev/appcast.xml", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const xmlText = await response.text();

    // Try multiple approaches to parse the XML and extract the download URL
    try {
      // First approach - parse with explicit attributes
      const result = await parseStringPromise(xmlText, {
        explicitArray: false,
        mergeAttrs: false,
      });

      if (result.rss?.channel?.item) {
        const item = result.rss.channel.item;
        return {
          version: item["sparkle:shortVersionString"] || item.title || "latest",
          downloadUrl: item.enclosure?.$?.url || "",
        };
      }
    } catch (err) {
      console.warn("First parsing approach failed:", err);
    }

    // Second approach - parse with merged attributes
    try {
      const result = await parseStringPromise(xmlText, {
        explicitArray: false,
        mergeAttrs: true,
      });

      if (result.rss?.channel?.item) {
        const item = result.rss.channel.item;
        return {
          version: item["sparkle:shortVersionString"] || item.title || "latest",
          downloadUrl: item.enclosure?.url || "",
        };
      }
    } catch (err) {
      console.warn("Second parsing approach failed:", err);
    }

    // Third approach - parse XML manually
    try {
      const enclosureMatch = xmlText.match(
        /<enclosure[^>]*url="([^"]+)"[^>]*>/
      );

      if (enclosureMatch && enclosureMatch[1]) {
        const downloadUrl = enclosureMatch[1];

        // Try to find sparkle:shortVersionString first
        const shortVersionMatch = xmlText.match(
          /<sparkle:shortVersionString>([^<]+)<\/sparkle:shortVersionString>/
        );
        if (shortVersionMatch && shortVersionMatch[1]) {
          return { version: shortVersionMatch[1], downloadUrl };
        }

        // Fall back to title
        const titleMatch = xmlText.match(/<item>\s*<title>([^<]+)<\/title>/);
        const version = titleMatch ? titleMatch[1] : "latest";

        return { version, downloadUrl };
      }
    } catch (err) {
      console.warn("Third parsing approach failed:", err);
    }
  } catch (error) {
    console.error("Error fetching release info:", error);
  }

  // Fallback
  return {
    version: "latest",
    downloadUrl: "https://github.com/rxtech-lab/chessmate/releases",
  };
}

// Server component that fetches data and renders the client component
export default async function DownloadButton() {
  const releaseInfo = await getReleaseInfo();

  return (
    <DownloadButtonClient
      version={releaseInfo.version}
      downloadUrl={releaseInfo.downloadUrl}
    />
  );
}

interface DownloadButtonClientProps {
  version: string;
  downloadUrl: string;
}

export function DownloadButtonClient({
  version,
  downloadUrl,
}: DownloadButtonClientProps) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={downloadUrl}
        className="bg-[#333333] text-white px-8 py-3 rounded-full flex items-center justify-center mb-2"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        {`Download ChessMate ${version}`}
      </a>
      <span className="text-sm text-[#666666]">
        {`Latest version: ${version}`}
      </span>
    </div>
  );
}
