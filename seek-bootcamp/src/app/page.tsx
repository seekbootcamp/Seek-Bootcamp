import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhySeekSection from "@/components/sections/WhySeekSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import ImmersiveSection from "@/components/sections/ImmersiveSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import MarqueeSection from "@/components/sections/MarqueeSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <WhySeekSection />
      <ExperienceSection />
      <WorkshopsSection />
      <ImmersiveSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
