"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  children: ReactNode;
}

export const Button = ({ variant = "primary", children, className = "", ...props }: ButtonProps) => {
  const variants = {
    primary: "bg-bg-brand-primary text-text-primary-text hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
    secondary: "bg-text-primary-text text-bg-primary-bg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
    glass: "glass text-text-primary-text hover:bg-white/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
    outline: "border border-white/10 text-text-muted-text hover:text-text-primary-text hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`px-6 py-3 rounded-md h6 tracking-widest transition-all ${variants[variant]} ${className}`}
      {...props as any}
    >
      {children}
    </motion.button>
  );
};
