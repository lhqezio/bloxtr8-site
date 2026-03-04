"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Zap } from "lucide-react";
import { BaseLogo } from "@/components/logos/BaseLogo";
import { USDCLogo } from "@/components/logos/USDCLogo";
import { blockchain } from "@/content/copy";
import SmartContractMockup from "./SmartContractMockup";
import BlockExplorerMockup from "./BlockExplorerMockup";
import TransactionDemoMockup from "./TransactionDemoMockup";

/* ─── Glass card wrapper ─── */
function BentoCard({
  accent,
  index,
  children,
  className = "",
}: {
  accent: string;
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-2xl backdrop-blur-xl p-5 sm:p-6 flex flex-col bg-card ${className}`}
      style={{
        background: `linear-gradient(135deg, ${accent}15, ${accent}08, transparent 60%), var(--color-card)`,
        border: `1px solid ${accent}25`,
        boxShadow: `0 0 40px ${accent}08, 0 4px 30px oklch(0 0 0 / 10%), inset 0 1px 0 0 oklch(1 0 0 / 8%)`,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function TechSpecsBento() {
  return (
    <section id="transaction-demo" className="py-12 sm:py-16 md:py-20 lg:py-28 border-t border-border">
      <div className="container-narrow px-4 sm:px-6 text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {blockchain.tech.title}
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {blockchain.tech.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {/* Row 1: Live Demo (2) + Base Network (1) */}
        <BentoCard accent="#a855f7" index={0} className="md:col-span-2">
          <div className="rounded-xl overflow-hidden border border-border">
            <TransactionDemoMockup />
          </div>
        </BentoCard>

        <BentoCard accent="#3b82f6" index={1} className="md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "#3b82f618", border: "1px solid #3b82f633" }}
            >
              <BaseLogo size={18} color="#3B82F6" />
            </div>
            <h3 className="text-lg sm:text-xl font-mono-bold">Base Network</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Ethereum L2 with low fees and high speed. Built by Coinbase for the next generation of on-chain apps.
          </p>
          <div className="mt-auto grid grid-cols-2 gap-3">
            <div className="rounded-lg p-3 text-center" className="bg-muted/30 border border-border">
              <div className="text-lg font-mono-bold">~2s</div>
              <div className="text-[10px] text-muted-foreground">Block time</div>
            </div>
            <div className="rounded-lg p-3 text-center" className="bg-muted/30 border border-border">
              <div className="text-lg font-mono-bold">EVM</div>
              <div className="text-[10px] text-muted-foreground">Compatible</div>
            </div>
          </div>
        </BentoCard>

        {/* Row 2: Smart Contract (1) + Block Explorer (2) */}
        <BentoCard accent="#a855f7" index={2} className="md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "#a855f718", border: "1px solid #a855f733" }}
            >
              <Shield className="w-4.5 h-4.5" style={{ color: "#a855f7" }} />
            </div>
            <h3 className="text-lg sm:text-xl font-mono-bold">Smart Contracts</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Audited Solidity with automated escrow logic, verified on-chain.
          </p>
          <div className="rounded-xl overflow-hidden border border-border mt-auto">
            <SmartContractMockup />
          </div>
        </BentoCard>

        <BentoCard accent="#22d3ee" index={3} className="md:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "#22d3ee18", border: "1px solid #22d3ee33" }}
            >
              <Clock className="w-4.5 h-4.5" style={{ color: "#22d3ee" }} />
            </div>
            <h3 className="text-lg sm:text-xl font-mono-bold">On-Chain Transparency</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Every transaction is publicly verifiable. Full audit trail on BaseScan.
          </p>
          <div className="rounded-xl overflow-hidden border border-border mt-auto">
            <BlockExplorerMockup />
          </div>
        </BentoCard>

        {/* Row 3: USDC (1) + Stats strip (2) */}
        <BentoCard accent="#06b6d4" index={4} className="md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "#06b6d418", border: "1px solid #06b6d433" }}
            >
              <USDCLogo size={18} color="#06B6D4" />
            </div>
            <h3 className="text-lg sm:text-xl font-mono-bold">USDC Stablecoin</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Dollar-pegged stablecoin for predictable value. No crypto volatility risk.
          </p>
          <div className="mt-auto grid grid-cols-2 gap-3">
            <div className="rounded-lg p-3 text-center" className="bg-muted/30 border border-border">
              <div className="text-lg font-mono-bold">$1.00</div>
              <div className="text-[10px] text-muted-foreground">Always</div>
            </div>
            <div className="rounded-lg p-3 text-center" className="bg-muted/30 border border-border">
              <div className="text-lg font-mono-bold">Circle</div>
              <div className="text-[10px] text-muted-foreground">Backed by</div>
            </div>
          </div>
        </BentoCard>

        <BentoCard accent="#22c55e" index={5} className="md:col-span-2 justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-mono-bold mb-1">~2s</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Settlement</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono-bold mb-1">$0.001</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Avg gas fee</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono-bold mb-1">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">On-chain</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono-bold mb-1">Immutable</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Audit trail</div>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
