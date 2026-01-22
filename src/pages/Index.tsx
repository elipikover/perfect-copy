import HeroSection from "@/components/HeroSection";
import IntroducingSection from "@/components/IntroducingSection";
import ContentSection from "@/components/ContentSection";
import MusicSection from "@/components/MusicSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroducingSection />
      <ContentSection />
      <MusicSection />
      <FooterSection />
    </main>
  );
};

export default Index;
