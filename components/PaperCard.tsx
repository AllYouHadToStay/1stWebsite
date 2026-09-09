"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PaperCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      whileHover={{ scale: 1.035, rotate: 0, y: -5 }}
      className={`paper-card ${className}`}
    >
      {children}
    </motion.article>
  );
}
