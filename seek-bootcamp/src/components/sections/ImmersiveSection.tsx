"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const experiences = [
  {
    title: "Live Challenges",
    short: "Timed, real-world challenges with leaderboards and prizes.",
    long: "Push your creativity and problem-solving skills through exciting real-time challenges designed to simulate practical industry experiences with teamwork, innovation, and competitive learning.",
    image: "https://framerusercontent.com/images/yTfvsCuQSGaNxJZR8mhahHDgJUg.jpg",
    badge: "🏆",
    badgeLabel: "Prizes",
  },
  {
    title: "Networking",
    short: "Connect with like-minded builders across industries.",
    long: "Build meaningful connections with students, creators, innovators, and professionals while collaborating, sharing ideas, and growing within a creative learning community.",
    image: "https://framerusercontent.com/images/HUYe3GFilvh5sqojXXdQ8LRHU.jpg",
    badge: "🌐",
    badgeLabel: "Community",
  },
  {
    title: "1:1 Mentorship",
    short: "Direct feedback from industry professionals on your work.",
    long: "Receive personalized guidance, valuable feedback, and practical insights from experienced mentors and industry professionals to help improve your ideas, projects, and career growth.",
    image: "https://framerusercontent.com/images/7QTsftdAMmsZZeb2TXkEKDSSxg.jpg",
    badge: "👤",
    badgeLabel: "Personal",
  },
  {
    title: "Demo Day",
    short: "Present your project to a panel of mentors and peers.",
    long: "Showcase your projects, present your innovative ideas, and gain recognition from mentors, peers, and industry experts in an inspiring presentation experience.",
    image: "https://framerusercontent.com/images/VYSyWiwJOMEowJUqS2xcmsDJEm4.jpg",
    badge: "🎯",
    badgeLabel: "Showcase",
  },
  {
    title: "Certification & Portfolio",
    short: "Walk away with a SEEK certificate and a verified portfolio project.",
    long: "Earn an industry-recognized certificate while building real-world projects and creative challenges that strengthen your portfolio, showcase your practical skills, and highlight your innovation.",
    image: "https://framerusercontent.com/images/pAJd3PhRJcpcC6PRf9u08CNYUNg.jpg",
    badge: "🎓",
    badgeLabel: "Certified",
  },
];

export default function ImmersiveSection() {
  return (
    <section id="immersive" className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-purple-DEFAULT/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Immersive Learning Experience</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-anton text-5xl sm:text-6xl lg:text-7xl text-white"
          >
            More Than a{" "}
            <span className="text-gradient">Workshop</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 mt-4 max-w-2xl mx-auto"
          >
            Connect with global leaders, showcase your innovation, and earn recognition that opens doors worldwide.
          </motion.p>
        </div>

        {/* Card list */}
        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-purple-DEFAULT/20 glass transition-all duration-300 hover:border-purple-DEFAULT/50 hover:shadow-card-hover"
            >
              {/* Image */}
              <div className={`relative h-52 md:h-64 overflow-hidden ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:from-transparent md:to-background/60" />
              </div>

              {/* Text */}
              <div className={`flex flex-col justify-center p-8 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{exp.badge}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-purple-light border border-purple-DEFAULT/30 px-2.5 py-1 rounded-full">
                    {exp.badgeLabel}
                  </span>
                </div>
                <h3 className="font-anton text-3xl text-white mb-3">{exp.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{exp.long}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
