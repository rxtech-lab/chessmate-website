import DownloadButton from "@/components/DownloadButton";
import FeatureSection from "@/components/FeatureSection";
import Header from "@/components/Header";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import Image from "next/image";
import { Suspense } from "react";

// Define icons for features
const ChessBoardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
    <path d="M3 15H21" stroke="currentColor" strokeWidth="2" />
    <path d="M9 3V21" stroke="currentColor" strokeWidth="2" />
    <path d="M15 3V21" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const AIIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="currentColor"
    />
    <path d="M9 8L15 12L9 16V8Z" fill="currentColor" />
  </svg>
);

const FileIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 13H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 17H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9H11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features = [
  {
    title: "Interactive Chess Analysis",
    description:
      "Load PGN files and get detailed insights into every move and position on the board.",
    icon: <ChessBoardIcon />,
  },
  {
    title: "AI-Powered Explanations",
    description:
      "Understand the motivation behind each move with detailed AI explanations tailored to your level.",
    icon: <AIIcon />,
  },
  {
    title: "PGN Import & Export",
    description:
      "Easily import your own games from PGN files and export them with added annotations.",
    icon: <FileIcon />,
  },
];

export default function Home() {
  const screenshotImages = [
    { src: "/images/screenshot1.png", alt: "ChessMate App Screenshot 1" },
    { src: "/images/screenshot2.png", alt: "ChessMate App Screenshot 2" },
  ];

  return (
    <>
      <Header />

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-6">
            Learn Chess with AI
          </h1>
          <p className="text-lg text-[#666666] text-center max-w-2xl mb-10">
            ChessMate is an intelligent chess tutor that analyzes your games,
            explains moves, and helps you improve your skills with AI-powered
            insights.
          </p>

          <DownloadButton />
        </section>

        {/* Screenshot Section */}
        <section className="w-full bg-white py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-medium text-center mb-12">
              See ChessMate in Action
            </h2>
            <ScreenshotGallery images={screenshotImages} />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-medium text-center mb-6">
              Key Features
            </h2>
            <p className="text-[#666666] text-center max-w-2xl mx-auto mb-12">
              ChessMate combines powerful chess analysis with intuitive AI
              explanations to help players of all levels improve their game.
            </p>

            <FeatureSection features={features} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#333333] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6">
              Ready to Improve Your Chess?
            </h2>
            <p className="text-[#cccccc] max-w-2xl mx-auto mb-10">
              Download ChessMate today and start learning from your games with
              AI-powered analysis and detailed explanations.
            </p>
            <Suspense fallback>
              <DownloadButton />
            </Suspense>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 bg-white border-t border-[#eeeeee]">
        <div className="container mx-auto px-4 text-center text-[#666666] text-sm">
          <p>© {new Date().getFullYear()} ChessMate. All rights reserved.</p>
          <div className="mt-4">
            <a
              href="https://github.com/rxtech-lab/chessmate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#333333]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
