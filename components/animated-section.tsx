"use client";

import { motion } from "framer-motion";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"section">;

export function AnimatedSection({ children, className = "", ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
