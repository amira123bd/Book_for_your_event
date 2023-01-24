import { motion } from "framer-motion";
import React from "react";

interface SideBannerProps {
  label: string;
}

const SideBanner: React.FC<SideBannerProps> = ({ label }) => {
  return (
    <div className="h-full min-h-[100vh] w-40   bg-brand  items-center justify-center  m-0  py-12 hidden md:flex  overflow-hidden">
      <motion.h1
        className="text-white text-8xl mx-auto my-auto w-fit  font-display -rotate-90"
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -90 }}
        transition={{
          duration: 0.7,
        }}
      >
        {label}
      </motion.h1>
    </div>
  );
};
export default SideBanner;
