"use client";

import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-purple-DEFAULT/25 rounded-full blur-[120px] animate-pulse-glow" />
      </div>
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-DEFAULT/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Border gradient top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-DEFAULT/30 bg-gold-DEFAULT/10 text-gold-DEFAULT text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT animate-pulse" />
            Limited Seats Available
          </div>

          <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-white mb-6">
            Ready to Build Skills
            <br />
            <span className="shimmer-text">That Actually Matter?</span>
          </h2>

          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join hundreds of future builders who have already taken the leap. Your next chapter starts with a single click.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton
              href="https://wa.me/918129967333?text=Hello%20SEEK%20Bootcamp%20I'm%20interested%20in%20joining%20your%20workshop%20and%20would%20love%20to%20reserve%20my%20slot.%20Please%20share%20the%20details"
              variant="primary"
              external
              className="px-12 py-4 text-base"
            >
              Register Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </GlowButton>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/30 text-sm">
            {["✓ No prior experience needed", "✓ Certificate included", "✓ Portfolio project"].map((t) => (
              <span key={t} className="tracking-wide">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Border gradient bottom */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
