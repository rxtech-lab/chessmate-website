"use client";

import React from "react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection = ({ features }: FeatureSectionProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="mb-4 text-[#333333]"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {feature.icon}
          </motion.div>
          <motion.h3
            className="text-xl font-medium mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {feature.title}
          </motion.h3>
          <motion.p
            className="text-[#666666] text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {feature.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureSection;
