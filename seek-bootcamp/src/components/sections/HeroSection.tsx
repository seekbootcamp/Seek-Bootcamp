"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlowButton from "@/components/ui/GlowButton";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Particle canvas */}
      <FloatingParticles />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-DEFAULT/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-pink-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-light/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/tfNtqsRwAfctVDeT3doARvKh410.png"
          alt="Futuristic portal background"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-DEFAULT/30 bg-purple-DEFAULT/10 text-purple-light text-xs font-semibold tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Now Enrolling · Limited Seats
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-[108px] leading-none tracking-tight mb-6"
        >
          <span className="block text-white">SEEK</span>
          <span className="block text-gradient">BOOTCAMP</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed mb-10 font-light"
        >
          Creative workshops, real-world projects, mentorship, and
          innovation-driven experiences for{" "}
          <span className="text-white font-medium">future builders</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowButton
            href="https://wa.me/918129967333?text=Hello%20SEEK%20Bootcamp%20I'm%20interested%20in%20joining"
            variant="primary"
            external
            className="px-10 py-4 text-sm"
          >
            Join Workshop
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </GlowButton>
          <GlowButton
            href="#about"
            variant="outline"
            className="px-10 py-4 text-sm"
          >
            Learn More
          </GlowButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "500+", label: "Students" },
            { value: "10+", label: "Workshops" },
            { value: "95%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-anton text-2xl sm:text-3xl text-gradient mb-1">{stat.value}</div>
              <div className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-purple-DEFAULT/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
