import HeroRedesign from "./components/HeroRedesign";
import SocialProofStrip from "./components/SocialProofStrip";
import FeatureCarousel from "./components/FeatureCarousel";
import HowItWorks from "./components/HowItWorks";
import ComparisonSection from "./components/ComparisonSection";
import MidCTA from "./components/MidCTA";
import StatsSection from "./components/StatsSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Page() {
  return (
    <>
      <HeroRedesign />
      <SocialProofStrip />
      <ComparisonSection />
      <MidCTA />
      <FeatureCarousel />
      <HowItWorks />
      <StatsSection />
      <FAQ />
      <CTA />
    </>
  );
}
