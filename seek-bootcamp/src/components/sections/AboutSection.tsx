"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-DEFAULT/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-purple-DEFAULT/20 shadow-card">
              <Image
                src="https://framerusercontent.com/images/v5jCUO9x38vrQ3wlrsdzdkgG1A.png"
                alt="People at SEEK Bootcamp event"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-purple-DEFAULT/20" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass glow-border rounded-xl p-4 hidden sm:block"
            >
              <div className="text-2xl font-anton text-gradient">500+</div>
              <div className="text-white/50 text-xs mt-0.5">Students Trained</div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>About the SEEK Bootcamp</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-anton text-5xl sm:text-6xl lg:text-7xl leading-none text-white"
            >
              Not a Classroom.{" "}
              <span className="block text-gradient">A Launch Pad.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed">
              SEEK Bootcamp was created to bridge the gap between theory and
              real-world skills through creativity, collaboration, and practical
              learning experiences.
            </motion.p>

            <motion.p variants={fadeUp} className="text-white/50 leading-relaxed">
              We inspire today&apos;s students to build a brighter tomorrow — with
              hands-on workshops, live challenges, and mentorship from industry
              professionals who&apos;ve walked the path.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {["Hands-On", "Real Projects", "Mentorship", "Innovation"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border border-purple-DEFAULT/30 bg-purple-DEFAULT/10 text-purple-light"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
