"use client";

import DownloadButton from "./DownloadButton";

export default function HeroSection() {
  return (
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
  );
}
