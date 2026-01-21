import HeroSection from "@/components/HeroSection";
import IntroducingSection from "@/components/IntroducingSection";
import ContentSection from "@/components/ContentSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroducingSection />
      <ContentSection />
    </main>
  );
};

export default Index;
