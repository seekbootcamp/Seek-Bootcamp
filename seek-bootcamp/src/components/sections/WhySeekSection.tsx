"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { Lightbulb, Users, Globe, Rocket } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Hands-on Workshops",
    desc: "Every session is activity-led. You make, experiment, and present real work — not slides.",
    color: "text-purple-light",
    glow: "from-purple-DEFAULT/20 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Creativity & Innovation",
    desc: "We teach you to think differently and solve problems creatively through innovation methodologies.",
    color: "text-pink-DEFAULT",
    glow: "from-pink-DEFAULT/20 to-transparent",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Work with peers on real briefs. Build your network while you build skills that matter.",
    color: "text-gold-DEFAULT",
    glow: "from-gold-DEFAULT/20 to-transparent",
  },
  {
    icon: Globe,
    title: "Real-World Skills",
    desc: "Industry-relevant curriculum designed with professionals and entrepreneurs — not textbooks.",
    color: "text-purple-light",
    glow: "from-purple-light/20 to-transparent",
  },
];

export default function WhySeekSection() {
  return (
    <section id="why-seek" className="relative py-28 overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://framerusercontent.com/images/6lmSb8H78mt1qWXl46zggtzzxg.webp"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-DEFAULT/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <SectionLabel>Why SEEK Bootcamp</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-anton text-5xl sm:text-6xl lg:text-7xl text-white mb-4"
          >
            Different{" "}
            <span className="text-gradient">by Design</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto"
          >
            Reasons why SEEK Bootcamp is unlike anything you&apos;ve tried before.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <GlassCard key={f.title} delay={i * 0.1} className="group flex flex-col gap-4 p-6">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.glow} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-semibold text-white text-base leading-snug">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
