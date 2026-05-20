"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-inter font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-DEFAULT to-pink-DEFAULT text-white shadow-glow-purple hover:shadow-glow-pink hover:scale-105",
    secondary:
      "bg-transparent border border-purple-DEFAULT text-white hover:bg-purple-DEFAULT/10 hover:shadow-glow-purple hover:scale-105",
    outline:
      "bg-transparent border border-white/20 text-white hover:border-purple-light hover:shadow-glow-purple hover:scale-105",
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        {...linkProps}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-gradient-to-r from-purple-glow to-pink-DEFAULT opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </Link>
    </motion.div>
  );
}
