"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function AnimatedArticle({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}