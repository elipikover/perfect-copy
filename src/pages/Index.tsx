import HeroSection from "@/components/HeroSection";
import IntroducingSection from "@/components/IntroducingSection";
import AlbumSection from "@/components/AlbumSection";
import MusicSection from "@/components/MusicSection";
import BiographySection from "@/components/BiographySection";
import ContentSection from "@/components/ContentSection";
import FactsSection from "@/components/FactsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroducingSection />
      <AlbumSection />
      <MusicSection />
      <BiographySection />
      <ContentSection />
      <FactsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
