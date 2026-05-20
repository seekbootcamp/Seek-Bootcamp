"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { Cpu, Code2, Lightbulb, Share2, Plus } from "lucide-react";

const workshops = [
  {
    icon: Cpu,
    title: "AI & Creativity Workshop",
    duration: "5 Days",
    desc: "Explore how AI tools amplify creative work. Build AI-assisted projects using prompting, image generation, and automation.",
    tags: ["Prompt Engineering", "Generative AI", "Automation"],
    color: "from-purple-DEFAULT to-pink-DEFAULT",
    glow: "purple",
  },
  {
    icon: Code2,
    title: "Web Development Sprint",
    duration: "5 Days",
    desc: "Go from zero to deployed website in 5 days. HTML, CSS, JavaScript, and a real project to show the world.",
    tags: ["HTML/CSS", "JavaScript", "Deployment"],
    color: "from-blue-600 to-purple-DEFAULT",
    glow: "blue",
  },
  {
    icon: Lightbulb,
    title: "Design Thinking Workshop",
    duration: "4 Days",
    desc: "Master the 5-stage design thinking process through rapid prototyping, user interviews, and team challenges.",
    tags: ["Prototyping", "User Research", "Ideation"],
    color: "from-pink-DEFAULT to-orange-500",
    glow: "pink",
  },
  {
    icon: Share2,
    title: "Social Media Handling",
    duration: "4 Days",
    desc: "Build a complete content strategy and create real assets — reels, carousels, copy, and a brand kit — in 4 days.",
    tags: ["Content Strategy", "Brand Kit", "Reels"],
    color: "from-gold-DEFAULT to-orange-500",
    glow: "gold",
  },
  {
    icon: Plus,
    title: "More Coming Soon",
    duration: "—",
    desc: "New workshops in UX/UI, Video Editing, and Public Speaking launching very soon.",
    tags: ["UX/UI", "Video Editing", "Public Speaking"],
    color: "from-white/20 to-white/5",
    glow: "white",
    soon: true,
  },
];

export default function WorkshopsSection() {
  return (
    <section id="workshops" className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-DEFAULT/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Our Programs</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-anton text-5xl sm:text-6xl lg:text-7xl text-white"
          >
            Workshops That{" "}
            <span className="text-gradient">Actually Ship</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 mt-4 max-w-lg mx-auto"
          >
            Pick a sprint. Build something real. Leave with a portfolio piece and a new skill set.
          </motion.p>
        </div>

        {/* Workshop cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workshops.map((w, i) => (
            <GlassCard
              key={w.title}
              delay={i * 0.1}
              className={`group flex flex-col gap-4 p-7 ${w.soon ? "opacity-60" : ""}`}
            >
              {/* Icon + duration */}
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${w.color} flex items-center justify-center shadow-lg`}>
                  <w.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/30 font-medium border border-white/10 px-2.5 py-1 rounded-full">
                  {w.duration}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white text-base mb-2 leading-snug">{w.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{w.desc}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {w.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2 py-1 rounded-full border border-white/10 text-white/40 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
