"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const cards = [
  {
    title: "Build Real Projects",
    desc: "Gain hands-on experience working on practical projects that challenge your creativity, strengthen problem-solving skills, and build a portfolio that reflects your abilities.",
    image: "https://framerusercontent.com/images/lUUFLDfJnLZMLMNgFtLqZJydE.jpg",
    span: "lg:col-span-2",
    height: "h-56 sm:h-64",
  },
  {
    title: "Team Challenges",
    desc: "Collaborate with passionate participants in team-based challenges designed to improve communication, leadership, and innovative thinking.",
    image: "https://framerusercontent.com/images/kd64i89ypFMzs8eOB5MBGjvgxE.jpg",
    span: "lg:col-span-1",
    height: "h-56 sm:h-64",
  },
  {
    title: "Creative Environment",
    desc: "An innovation-driven space where creativity, collaboration, and new ideas come together to help you grow beyond traditional learning.",
    image: "https://framerusercontent.com/images/Cm0aAIJTazpQntu6tvkkIjCqopY.jpg",
    span: "lg:col-span-3",
    height: "h-56 sm:h-72",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-DEFAULT/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>The Experience</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-anton text-5xl sm:text-6xl lg:text-7xl text-white"
          >
            Where Ideas{" "}
            <span className="text-gradient">Come to Life</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 mt-4 max-w-lg mx-auto"
          >
            A creative space built for builders, thinkers, and doers — not passive learners.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl overflow-hidden border border-purple-DEFAULT/20 ${card.span} cursor-pointer transition-all duration-300 hover:border-purple-DEFAULT/50 hover:shadow-card-hover`}
            >
              {/* Image */}
              <div className={`relative ${card.height} overflow-hidden`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-semibold text-white text-lg mb-1.5">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {card.desc}
                </p>
              </div>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-purple-DEFAULT/0 group-hover:bg-purple-DEFAULT/5 transition-all duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
