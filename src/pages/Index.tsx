import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ResearchSection } from "@/components/ResearchSection";
import { TeachingSection } from "@/components/TeachingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ResearchSection />
        <TeachingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
