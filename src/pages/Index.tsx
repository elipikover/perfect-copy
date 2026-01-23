import HeroSection from "@/components/HeroSection";
import IntroducingSection from "@/components/IntroducingSection";
import AlbumSection from "@/components/AlbumSection";
import ContentSection from "@/components/ContentSection";
import FactsSection from "@/components/FactsSection";
import MusicSection from "@/components/MusicSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroducingSection />
      <ContentSection />
      <FactsSection />
      <MusicSection />
      <FooterSection />
    </main>
  );
};

export default Index;
