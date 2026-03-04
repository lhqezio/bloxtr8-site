"use client";

import { motion, type Variants } from "framer-motion";
import { Gamepad2, Tag, Database } from "lucide-react";

/* ─── design tokens ─── */
const t = {
  surface0: "oklch(0.145 0 0)",
  surface1: "oklch(0.18 0.005 265 / 65%)",
  surface2: "oklch(0.21 0.005 265 / 55%)",
  surface3: "oklch(0.24 0.008 265 / 50%)",
  rim: "oklch(1 0 0 / 8%)",
  border: "oklch(1 0 0 / 10%)",
  muted: "oklch(0.55 0 0)",
  fg: "oklch(0.985 0 0)",
  fgMuted: "oklch(0.65 0 0)",
  green: "oklch(0.72 0.19 155)",
};

/* ─── data matching real product ─── */
const gameStats = [
  { label: "Total Games", value: "8K" },
  { label: "Live Players", value: "7.6M" },
  { label: "Top Mover", value: "Brainrot" },
  { label: "Genres", value: "15" },
];

const itemStats = [
  { label: "Total Items", value: "3K" },
  { label: "Avg Demand", value: "1.2" },
  { label: "Market Cap", value: "398.6M" },
  { label: "Avg Premium", value: "+257.4%" },
];

const topGainers = [
  { game: "Steal a Brainrot", change: "+23,860" },
  { game: "Catch And Tame!", change: "+22,177" },
  { game: "Pixel Blade", change: "+4,918" },
  { game: "Anime Tactical Sim", change: "+3,727" },
  { game: "Volleyball Legends", change: "+2,729" },
];

const topDecliners = [
  { game: "Escape Tsunami!", change: "-19,115" },
  { game: "Garden Horizons", change: "-17,876" },
  { game: "99 Nights in Forest", change: "-17,182" },
  { game: "Dandy's World", change: "-15,086" },
  { game: "Adopt Me!", change: "-10,961" },
];

const tableData = [
  { rank: 1, game: "Brookhaven 🏠RP", genre: "Town and City", volume: "383K", visits: "79.6B", sentiment: 85.9 },
  { rank: 2, game: "Fish It! 🐟", genre: "All", volume: "374K", visits: "4.1B", sentiment: 82.8 },
  { rank: 3, game: "Adopt Me!", genre: "RPG", volume: "323K", visits: "42.4B", sentiment: 85.4 },
  { rank: 4, game: "Steal a Brainrot", genre: "All", volume: "323K", visits: "61.4B", sentiment: 86.1 },
  { rank: 5, game: "Escape Tsunami!", genre: "All", volume: "280K", visits: "4.4B", sentiment: 85.1 },
  { rank: 6, game: "Blox Fruits", genre: "Adventure", volume: "280K", visits: "59.5B", sentiment: 92.0 },
];

const tabs = [
  { label: "Games", icon: Gamepad2, active: true },
  { label: "Items", icon: Tag, active: false },
  { label: "Big Data", icon: Database, active: false },
];

/* ─── timing ─── */
const T = { shell: 0.0, stats: 0.3, movers: 0.6, table: 0.9 };

/* ─── variants ─── */
const shellVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { delay: T.shell, duration: 0.4 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: T.stats + i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: T.table + i * 0.05, duration: 0.25, ease: "easeOut" },
  }),
};

function SentimentBadge({ value }: { value: number }) {
  const color = value >= 90 ? "#4ade80" : value >= 85 ? "#facc15" : "#f87171";
  return (
    <span style={{ color }} className="text-[8px] font-mono font-medium">
      {value.toFixed(1)}%
    </span>
  );
}

export default function TrendSpotMockup() {
  return (
    <div className="w-full">
      <div
        className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ background: t.surface0, border: `1px solid ${t.rim}` }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-1.5 px-3 py-2 shrink-0"
          style={{ background: t.surface1, borderBottom: `1px solid ${t.rim}` }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-4 text-[9px] opacity-60" style={{ color: t.fgMuted }}>
            TrendSpot — Market Analytics
          </span>
          <div className="ml-auto flex items-center gap-1.5 text-[8px]" style={{ color: t.muted }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            8K games &nbsp;|&nbsp; 3K items
          </div>
        </div>

        {/* Body */}
        <motion.div
          variants={shellVariants}
          initial="hidden"
          animate="visible"
          className="p-3 sm:p-4 flex flex-col gap-3"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="text-[13px] font-bold" style={{ color: t.fg }}>TrendSpot</div>
            {/* Tabs */}
            <div className="flex items-center gap-1">
              {tabs.map((tab) => (
                <div
                  key={tab.label}
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-[9px] font-medium"
                  style={{
                    background: tab.active ? t.surface2 : "transparent",
                    color: tab.active ? t.fg : t.muted,
                    border: tab.active ? `1px solid ${t.border}` : "1px solid transparent",
                  }}
                >
                  <tab.icon className="w-2.5 h-2.5" />
                  {tab.label}
                </div>
              ))}
            </div>
          </div>

          {/* Stat cards — GAMES and ITEMS side by side */}
          <div className="grid grid-cols-2 gap-2">
            {/* GAMES card */}
            <motion.div
              custom={0}
              variants={staggerChild}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-2.5"
              style={{ background: t.surface2, border: `1px solid ${t.border}` }}
            >
              <div className="text-[7px] font-bold tracking-wider mb-1.5" style={{ color: "#a78bfa" }}>
                GAMES
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {gameStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[11px] font-bold" style={{ color: t.fg }}>{s.value}</div>
                    <div className="text-[7px]" style={{ color: t.muted }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ITEMS card */}
            <motion.div
              custom={1}
              variants={staggerChild}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-2.5"
              style={{ background: t.surface2, border: `1px solid ${t.border}` }}
            >
              <div className="text-[7px] font-bold tracking-wider mb-1.5" style={{ color: "#f472b6" }}>
                ITEMS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {itemStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[11px] font-bold" style={{ color: t.fg }}>{s.value}</div>
                    <div className="text-[7px]" style={{ color: t.muted }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* TOP GAINERS & TOP DECLINERS — side by side */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div
              custom={2}
              variants={staggerChild}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-2.5"
              style={{ background: t.surface2, border: `1px solid ${t.border}` }}
            >
              <div className="text-[7px] font-bold tracking-wider mb-2" style={{ color: t.muted }}>
                TOP GAINERS
              </div>
              <div className="flex flex-col gap-1">
                {topGainers.map((item) => (
                  <div key={item.game} className="flex items-center justify-between">
                    <span className="text-[8px] truncate flex-1 min-w-0" style={{ color: t.fg }}>
                      {item.game}
                    </span>
                    <span className="text-[8px] font-mono font-medium" style={{ color: "#4ade80" }}>
                      ↑ {item.change}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={3}
              variants={staggerChild}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-2.5"
              style={{ background: t.surface2, border: `1px solid ${t.border}` }}
            >
              <div className="text-[7px] font-bold tracking-wider mb-2" style={{ color: t.muted }}>
                TOP DECLINERS
              </div>
              <div className="flex flex-col gap-1">
                {topDecliners.map((item) => (
                  <div key={item.game} className="flex items-center justify-between">
                    <span className="text-[8px] truncate flex-1 min-w-0" style={{ color: t.fg }}>
                      {item.game}
                    </span>
                    <span className="text-[8px] font-mono font-medium" style={{ color: "#f87171" }}>
                      ↓ {item.change}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Data table */}
          <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${t.border}` }}>
            <div
              className="grid gap-1 px-2.5 py-1.5 text-[7px] font-semibold tracking-wide"
              style={{
                gridTemplateColumns: "14px 1fr 50px 35px 35px 40px",
                color: t.muted,
                background: t.surface1,
                borderBottom: `1px solid ${t.border}`,
              }}
            >
              <span>#</span>
              <span>GAME</span>
              <span>GENRE</span>
              <span className="text-right">VOLUME</span>
              <span className="text-right">VISITS</span>
              <span className="text-right">SENTIMENT</span>
            </div>
            {tableData.map((row, i) => (
              <motion.div
                key={row.game}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-1 px-2.5 py-1.5 text-[8px]"
                style={{
                  gridTemplateColumns: "14px 1fr 50px 35px 35px 40px",
                  borderBottom: i < tableData.length - 1 ? `1px solid ${t.border}` : "none",
                }}
              >
                <span style={{ color: t.muted }}>{row.rank}</span>
                <span className="truncate" style={{ color: t.fg }}>{row.game}</span>
                <span className="truncate" style={{ color: t.muted }}>{row.genre}</span>
                <span className="text-right font-mono" style={{ color: t.fgMuted }}>{row.volume}</span>
                <span className="text-right font-mono" style={{ color: t.muted }}>{row.visits}</span>
                <span className="text-right"><SentimentBadge value={row.sentiment} /></span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
