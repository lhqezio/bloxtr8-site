"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, MessageSquare, Palette, Sword, Castle, Gamepad2 } from "lucide-react";
import EscrowMockup from "./EscrowMockup";
import TrendSpotMockup from "./TrendSpotMockup";
import DiscordMockup from "./DiscordMockup";

/* ─── panel config ─── */
const panels = [
  {
    title: "Secure Escrow",
    icon: Shield,
    accent: "#22c55e",
    description:
      "Stripe-secured payments with automatic identity verification. Funds are held safely until both parties confirm.",
    comingSoon: false,
  },
  {
    title: "TrendSpot",
    icon: BarChart3,
    accent: "#3b82f6",
    description:
      "Real-time market analytics. Track 8,000+ games, monitor trends, and make data-driven trading decisions.",
    comingSoon: false,
  },
  {
    title: "Discord Integration",
    icon: MessageSquare,
    accent: "#6366f1",
    description:
      "Trade directly from your Discord server. No need to leave your community.",
    comingSoon: false,
  },
  {
    title: "CreatorX",
    icon: Palette,
    accent: "#a855f7",
    description:
      "Portfolio tools for creators. Showcase your work and connect with buyers.",
    comingSoon: true,
  },
];

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
      className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
      style={{ background: cx.surface0, border: `1px solid ${cx.rim}` }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-1.5 px-3 py-2 shrink-0"
        style={{ background: cx.surface1, borderBottom: `1px solid ${cx.rim}` }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-[9px] opacity-60" style={{ color: cx.fgMuted }}>
          CreatorX — Portfolio
        </span>
      </div>

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
          <span
            className="text-[8px] px-2 py-0.5 rounded-full font-semibold shrink-0"
            style={{
              background: "oklch(0.6 0.15 300 / 15%)",
              color: cx.purple,
              border: "1px solid oklch(0.6 0.15 300 / 25%)",
            }}
          >
            ALPHA
          </span>
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

/* ─── Card wrapper with liquid glass styling ─── */
function FeatureCard({
  panel,
  index,
  children,
  className = "",
}: {
  panel: (typeof panels)[number];
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  const accent = panel.accent;
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

/* ─── Bento grid ─── */
export default function FeatureCarousel() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 border-t border-border">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono-bold">
          How we make you more efficient
        </h2>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {/* Card 1 — Escrow: compact 1-col */}
        <FeatureCard panel={panels[0]} index={0} className="md:col-span-1">
          <div className="rounded-xl overflow-hidden border border-border mb-4 flex-1 min-h-0 flex flex-col [&>*]:flex-1">
            <EscrowMockup />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: `${panels[0].accent}18`,
                border: `1px solid ${panels[0].accent}33`,
              }}
            >
              <Shield className="w-4.5 h-4.5" style={{ color: panels[0].accent }} />
            </div>
            <h3 className="text-lg sm:text-xl font-mono-bold">{panels[0].title}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {panels[0].description}
          </p>
        </FeatureCard>

        {/* Card 2 — TrendSpot: hero 2-col */}
        <FeatureCard panel={panels[1]} index={1} className="md:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: `${panels[1].accent}18`,
                border: `1px solid ${panels[1].accent}33`,
              }}
            >
              <BarChart3 className="w-4.5 h-4.5" style={{ color: panels[1].accent }} />
            </div>
            <h3 className="text-lg sm:text-xl font-mono-bold">{panels[1].title}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {panels[1].description}
          </p>
          <div className="rounded-xl overflow-hidden border border-border mt-auto flex-1 min-h-0">
            <TrendSpotMockup />
          </div>
        </FeatureCard>

        {/* Card 3 — Discord: wide 2-col */}
        <FeatureCard panel={panels[2]} index={2} className="md:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: `${panels[2].accent}18`,
                border: `1px solid ${panels[2].accent}33`,
              }}
            >
              <MessageSquare className="w-4.5 h-4.5" style={{ color: panels[2].accent }} />
            </div>
            <h3 className="text-lg sm:text-xl font-mono-bold">{panels[2].title}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {panels[2].description}
          </p>
          <div className="rounded-xl overflow-hidden border border-border mt-auto flex-1 min-h-0">
            <DiscordMockup />
          </div>
        </FeatureCard>

        {/* Card 4 — CreatorX: compact 1-col */}
        <FeatureCard panel={panels[3]} index={3} className="md:col-span-1">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: `${panels[3].accent}18`,
                border: `1px solid ${panels[3].accent}33`,
              }}
            >
              <Palette className="w-4.5 h-4.5" style={{ color: panels[3].accent }} />
            </div>
            <h3 className="text-lg sm:text-xl font-mono-bold">{panels[3].title}</h3>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
              style={{
                background: `${panels[3].accent}18`,
                color: panels[3].accent,
                border: `1px solid ${panels[3].accent}33`,
              }}
            >
              ALPHA
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {panels[3].description}
          </p>
          <div className="rounded-xl overflow-hidden border border-border mt-auto flex-1 min-h-0">
            <CreatorXMockup />
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}
