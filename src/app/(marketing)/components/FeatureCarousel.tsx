"use client";

import { motion } from "framer-motion";
import EscrowMockup from "./EscrowMockup";
import TrendSpotMockup from "./TrendSpotMockup";
import DiscordMockup from "./DiscordMockup";

/* ─── CreatorX placeholder (blurred, just suggests a layout) ─── */
function CreatorXMockup() {
  return (
    <div className="w-full h-full rounded-tr-xl sm:rounded-tr-2xl overflow-hidden bg-neutral-900 flex flex-col gap-3 p-4">
      {/* Profile row */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-neutral-700 shrink-0" />
        <div className="flex-1 space-y-1.5">
          <div className="h-3 w-24 rounded bg-neutral-700" />
          <div className="h-2 w-16 rounded bg-neutral-800" />
        </div>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 rounded-lg p-2.5 bg-neutral-800/60">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="h-3 w-8 rounded bg-neutral-700" />
            <div className="h-2 w-6 rounded bg-neutral-800" />
          </div>
        ))}
      </div>
      {/* Grid thumbnails */}
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square rounded-lg bg-neutral-800" />
        ))}
      </div>
    </div>
  );
}

/* ─── Card wrapper ─── */
function FeatureCard({
  index,
  accent,
  children,
  className = "",
  noDefaultBg = false,
}: {
  index: number;
  accent: string;
  children: React.ReactNode;
  className?: string;
  noDefaultBg?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-2xl border border-border overflow-hidden flex flex-col ${className}`}
      style={noDefaultBg ? {} : {
        background: `linear-gradient(145deg, ${accent}0a 0%, var(--card) 50%)`,
        borderTop: `1px solid ${accent}30`,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Bento grid ─── */
export default function FeatureCarousel() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 border-t border-border">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono-bold">
          How we make you more $$
        </h2>
      </div>

      {/* Asymmetric bento grid — 3 cols, varied spans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 md:grid-rows-[480px_480px]">
        {/* Card 1 — Escrow: narrow 1-col */}
        <FeatureCard index={0} accent="#22c55e" className="md:col-span-1 relative">
          <div className="p-5 sm:p-6 shrink-0">
            <h3 className="text-xl sm:text-2xl font-mono-bold mb-2">
              Escrow
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Stripe-secured payments with automatic identity verification. Funds are held safely until both parties confirm.
            </p>
          </div>
          <div className="flex-1 min-h-0 max-h-[240px] md:max-h-none ml-4 sm:ml-8 rounded-tl-xl overflow-hidden shadow-lg">
            <EscrowMockup />
          </div>
        </FeatureCard>

        {/* Card 2 — TrendSpot: wide 2-col, corner clip */}
        <FeatureCard index={1} accent="#3b82f6" className="md:col-span-2 relative">
          <div className="p-5 sm:p-8 shrink-0">
            <h3 className="text-xl sm:text-2xl font-mono-bold mb-2">
              TrendSpot
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Real-time market analytics. Track 8,000+ games, monitor trends, and make data-driven trading decisions.
            </p>
          </div>
          <div className="flex-1 min-h-0 max-h-[200px] md:max-h-none mr-4 sm:mr-8 rounded-tr-xl overflow-hidden shadow-lg">
            <TrendSpotMockup />
          </div>
        </FeatureCard>

        {/* Card 3 — Discord: wide 2-col */}
        <FeatureCard index={2} accent="#6366f1" className="md:col-span-2 relative">
          <div className="p-5 sm:p-8 shrink-0">
            <h3 className="text-xl sm:text-2xl font-mono-bold mb-2">
              Discord Integration
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Trade directly from your Discord server. No need to leave your community.
            </p>
          </div>
          <div className="flex-1 min-h-0 max-h-[200px] md:max-h-none ml-4 sm:ml-8 rounded-tl-xl overflow-hidden shadow-lg">
            <DiscordMockup />
          </div>
        </FeatureCard>

        {/* Card 4 — CreatorX: narrow 1-col */}
        <FeatureCard index={3} accent="#a855f7" className="md:col-span-1 relative">
          <div className="p-5 sm:p-6 shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl font-mono-bold">
                CreatorX
              </h3>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Coming Soon
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Portfolio tools for creators. Showcase your work and connect with buyers.
            </p>
          </div>
          <div className="flex-1 min-h-0 max-h-[240px] md:max-h-none mr-4 sm:mr-8 rounded-tr-xl overflow-hidden shadow-lg blur-[6px]">
            <CreatorXMockup />
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}
