import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase",
        "border border-purple-DEFAULT/30 bg-purple-DEFAULT/10 text-purple-light",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-purple-light animate-pulse" />
      {children}
    </span>
  );
}
