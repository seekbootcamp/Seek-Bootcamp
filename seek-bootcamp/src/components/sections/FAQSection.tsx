"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who can join SEEK Bootcamp?",
    a: "SEEK Bootcamp is open to students, fresh graduates, and young professionals who are eager to learn real-world skills. No prior experience is required — just curiosity and the drive to build.",
  },
  {
    q: "What makes SEEK Bootcamp different?",
    a: "Unlike traditional classrooms, SEEK Bootcamp is 100% activity-led. Every session involves creating, experimenting, and presenting real work. You leave with a tangible portfolio piece, not just a certificate.",
  },
  {
    q: "What kind of workshops do you conduct?",
    a: "We run intensive 4–5 day workshops in AI & Creativity, Web Development, Design Thinking, and Social Media. New tracks in UX/UI, Video Editing, and Public Speaking are coming soon.",
  },
  {
    q: "Do participants receive certificates?",
    a: "Yes! Every participant who completes a workshop receives an industry-recognized SEEK Bootcamp certificate, along with a verified portfolio project they can showcase to employers.",
  },
  {
    q: "Are the workshops online or offline?",
    a: "Our workshops are designed to be immersive, hands-on experiences conducted in-person. We believe in-person collaboration creates deeper learning and stronger connections. Contact us for the latest schedule.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-purple-DEFAULT/50 bg-purple-DEFAULT/10"
          : "border-white/10 bg-white/[0.02] hover:border-purple-DEFAULT/30"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-base">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 ${open ? "text-purple-light" : "text-white/40"}`}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-DEFAULT/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>FAQ&apos;s</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-anton text-5xl sm:text-6xl lg:text-7xl text-white"
          >
            Got{" "}
            <span className="text-gradient">Questions?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 mt-4"
          >
            We&apos;ve got all the answers ready for you.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
