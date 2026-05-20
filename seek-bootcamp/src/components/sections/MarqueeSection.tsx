"use client";

const items = [
  "AI & Creativity",
  "Web Development",
  "Design Thinking",
  "Social Media",
  "Innovation",
  "Teamwork",
  "Real Projects",
  "Mentorship",
  "Certification",
  "Portfolio",
  "Demo Day",
  "Networking",
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-purple-DEFAULT/15 bg-purple-DEFAULT/5 py-3">
      <div className="marquee-track gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-0 whitespace-nowrap">
            <span className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase px-6">
              {item}
            </span>
            <span className="text-purple-DEFAULT/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
