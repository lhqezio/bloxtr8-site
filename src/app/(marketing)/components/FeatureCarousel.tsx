"use client";

import { motion } from "framer-motion";
import { Sword, Castle, Gamepad2 } from "lucide-react";
import EscrowMockup from "./EscrowMockup";
import TrendSpotMockup from "./TrendSpotMockup";
import DiscordMockup from "./DiscordMockup";

/* ─── design tokens for CreatorX ─── */
const cx = {
  surface0: "oklch(0.145 0 0)",
  surface1: "oklch(0.18 0.005 265 / 65%)",
  surface2: "oklch(0.21 0.005 265 / 55%)",
  surface3: "oklch(0.24 0.008 265 / 50%)",
  purple: "#a855f7",
  rim: "oklch(1 0 0 / 8%)",
  border: "oklch(1 0 0 / 10%)",
  muted: "oklch(0.55 0 0)",
  fg: "oklch(0.985 0 0)",
  fgMuted: "oklch(0.65 0 0)",
};

/* ─── CreatorX profile mockup ─── */
function CreatorXMockup() {
  return (
    <div
      className="w-full h-full rounded-tr-xl sm:rounded-tr-2xl overflow-hidden shadow-2xl flex flex-col"
      style={{ background: cx.surface0, borderTop: `1px solid ${cx.rim}`, borderLeft: `1px solid ${cx.rim}`, borderRight: `1px solid ${cx.rim}` }}
    >
      {/* Body */}
      <div
        className="flex flex-col gap-3 p-4 flex-1"
        style={{
          background: "linear-gradient(180deg, oklch(0.16 0.01 300 / 60%), oklch(0.145 0 0))",
        }}
      >
        {/* Profile header */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
            style={{
              background: "linear-gradient(135deg, #a855f7, #6366f1)",
              color: "#fff",
            }}
          >
            NX
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold" style={{ color: cx.fg }}>NexGenStudios</div>
            <div className="text-[9px]" style={{ color: cx.muted }}>UGC Creator · Joined 2024</div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-2 rounded-lg p-2.5"
          style={{ background: cx.surface2, border: `1px solid ${cx.border}` }}
        >
          {[
            { label: "Items", value: "47" },
            { label: "Sales", value: "2.1k" },
            { label: "Revenue", value: "$18k" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[11px] font-bold" style={{ color: cx.fg }}>{s.value}</div>
              <div className="text-[8px]" style={{ color: cx.muted }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mini portfolio thumbnails */}
        <div className="grid grid-cols-3 gap-1.5 flex-1">
          {[
            { bg: "linear-gradient(135deg, #7c3aed, #2563eb)", Icon: Sword },
            { bg: "linear-gradient(135deg, #ec4899, #f97316)", Icon: Castle },
            { bg: "linear-gradient(135deg, #06b6d4, #22c55e)", Icon: Gamepad2 },
          ].map((item, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg flex items-center justify-center"
              style={{ background: item.bg }}
            >
              <item.Icon className="w-5 h-5 text-white/80" />
            </div>
          ))}
        </div>

        {/* Rating bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[10px]" style={{ color: "#facc15" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="text-[9px]" style={{ color: cx.muted }}>4.9 (312)</span>
          </div>
          <span className="text-[8px] font-medium" style={{ color: cx.purple }}>View Portfolio →</span>
        </div>
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
        <FeatureCard index={0} accent="#22c55e" noDefaultBg className="md:col-span-1 relative bg-emerald-300/80 border-emerald-400/60">
          <div className="p-6 shrink-0">
            <h3 className="text-xl sm:text-2xl font-mono-bold mb-2 text-emerald-900">
              Escrow
            </h3>
            <p className="text-sm text-emerald-800/70 leading-relaxed">
              Stripe-secured payments with automatic identity verification. Funds are held safely until both parties confirm.
            </p>
          </div>
          <div className="flex-1 min-h-0 ml-8 rounded-tl-xl overflow-hidden shadow-lg">
            <EscrowMockup />
          </div>
        </FeatureCard>

        {/* Card 2 — TrendSpot: wide 2-col, corner clip */}
        <FeatureCard index={1} accent="#3b82f6" className="md:col-span-2 relative">
          <div className="p-6 sm:p-8 shrink-0">
            <h3 className="text-xl sm:text-2xl font-mono-bold mb-2">
              <span className="text-blue-400">Trend</span>Spot
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Real-time market analytics. Track 8,000+ games, monitor trends, and make data-driven trading decisions.
            </p>
          </div>
          <div className="flex-1 min-h-0 mr-8 rounded-tr-xl overflow-hidden shadow-lg">
            <TrendSpotMockup />
          </div>
        </FeatureCard>

        {/* Card 3 — Discord: wide 2-col */}
        <FeatureCard index={2} accent="#6366f1" className="md:col-span-2 relative">
          <div className="p-6 sm:p-8 shrink-0">
            <h3 className="text-xl sm:text-2xl font-mono-bold mb-2">
              <span className="text-indigo-400">Discord</span> Integration
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Trade directly from your Discord server. No need to leave your community.
            </p>
          </div>
          <div className="flex-1 min-h-0 ml-8 rounded-tl-xl overflow-hidden shadow-lg">
            <DiscordMockup />
          </div>
        </FeatureCard>

        {/* Card 4 — CreatorX: narrow 1-col */}
        <FeatureCard index={3} accent="#a855f7" className="md:col-span-1 relative">
          <div className="p-6 shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl font-mono-bold">
                <span className="text-purple-400">Creator</span>X
              </h3>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Coming Soon
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Portfolio tools for creators. Showcase your work and connect with buyers.
            </p>
          </div>
          <div className="flex-1 min-h-0 mr-8 rounded-tr-xl overflow-hidden shadow-lg blur-[6px]">
            <CreatorXMockup />
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}
