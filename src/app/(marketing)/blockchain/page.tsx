import BlockchainHero from "./components/BlockchainHero";
import BlockchainComparison from "./components/BlockchainComparison";
import TechSpecsBento from "./components/TechSpecsBento";
import BlockchainCTA from "./components/BlockchainCTA";

export default function BlockchainPage() {
  return (
    <div className="overflow-hidden">
      <BlockchainHero />
      <TechSpecsBento />
      <BlockchainComparison />
      <BlockchainCTA />
    </div>
  );
}
