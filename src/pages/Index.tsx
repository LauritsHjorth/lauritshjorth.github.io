import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ResearchSection } from "@/components/ResearchSection";
import { CVSection } from "@/components/CVSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
