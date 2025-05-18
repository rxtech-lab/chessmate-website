"use client";

import { motion } from "framer-motion";

interface DownloadButtonClientProps {
  version: string;
  downloadUrl: string;
}

export function DownloadButtonClient({
  version,
  downloadUrl,
}: DownloadButtonClientProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href={downloadUrl}
        className="bg-[#333333] text-white px-8 py-3 rounded-full flex items-center justify-center mb-2"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, backgroundColor: "#000000" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        download
      >
        {`Download ChessMate ${version}`}
      </motion.a>
      <motion.span
        className="text-sm text-[#666666]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {`Latest version: ${version}`}
      </motion.span>
    </motion.div>
  );
}
