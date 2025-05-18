"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScreenshotGalleryProps {
  images: { src: string; alt: string }[];
}

const ScreenshotGallery = ({ images }: ScreenshotGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-md bg-white mb-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain p-2"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative w-24 h-16 rounded-md overflow-hidden ${
              index === selectedIndex
                ? "ring-2 ring-[#333333]"
                : "opacity-70 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ScreenshotGallery;
