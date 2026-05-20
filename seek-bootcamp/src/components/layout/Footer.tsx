import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-DEFAULT to-pink-DEFAULT flex items-center justify-center">
              <span className="text-white font-anton text-xs">S</span>
            </div>
            <span className="font-anton text-base tracking-wider text-white">
              SEEK <span className="text-gradient">BOOTCAMP</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-white/40">
            <Link href="#about" className="hover:text-white/70 transition-colors">About</Link>
            <Link href="#experience" className="hover:text-white/70 transition-colors">Experience</Link>
            <Link href="#workshops" className="hover:text-white/70 transition-colors">Workshops</Link>
            <Link href="#faq" className="hover:text-white/70 transition-colors">FAQ</Link>
          </nav>

          {/* Rights */}
          <p className="text-white/30 text-xs">
            © 2025 SEEK Bootcamp. All rights reserved.
          </p>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            Learn Skills That Matter · Created by{" "}
            <Link
              href="https://x.com/AdheebHameed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-light/40 hover:text-purple-light transition-colors"
            >
              SEEK Digital Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
