"use client";

import { motion, type Variants } from "framer-motion";
import {
  Swords,
  Shield,
  TrendingUp,
  Search,
  Eye,
  Menu,
  ChevronRight,
  Settings,
  User,
  X,
} from "lucide-react";

/* ─── design tokens (from real product) ─── */
const t = {
  surface0: "oklch(0.145 0 0)",
  surface1: "oklch(0.18 0.005 265 / 65%)",
  surface2: "oklch(0.21 0.005 265 / 55%)",
  surface3: "oklch(0.24 0.008 265 / 50%)",
  sidebar: "oklch(0.16 0.005 265 / 60%)",
  primary: "oklch(0.6 0.22 265)",
  green: "oklch(0.72 0.19 155)",
  rim: "oklch(1 0 0 / 8%)",
  rimStrong: "oklch(1 0 0 / 14%)",
  border: "oklch(1 0 0 / 10%)",
  muted: "oklch(0.55 0 0)",
  fg: "oklch(0.985 0 0)",
  fgMuted: "oklch(0.65 0 0)",
};

/* ─── narrative timing map ─── */
const T = {
  shell: 0.0,
  search: 0.4,
  filterChip: 0.55,
  resultsText: 0.7,
  card: 0.9,
  cardGlow: 2.0,
  toast: 2.8,
  dot: 3.1,
  line: 3.2,
  settle: 4.3,
} as const;

/* ─── sidebar nav items matching real product ─── */
const navGroups = [
  {
    label: "OVERVIEW",
    items: [
      { name: "Marketplace", color: "#a78bfa", active: true },
      { name: "TrendSpot", color: "#6ee7b7" },
      { name: "CreatorX", color: "#fbbf24", tag: "Alpha" },
      { name: "Lookup", color: "#7dd3fc" },
    ],
  },
  {
    label: "TRADING",
    items: [
      { name: "Deals", color: "#6ee7b7" },
      { name: "Disputes", color: "#fda4af" },
      { name: "Payments", color: "#c084fc" },
    ],
  },
  {
    label: "PORTFOLIO",
    items: [
      { name: "Listings", color: "#67e8f9" },
      { name: "Watchlist", color: "#f9a8d4" },
    ],
  },
];

/* ─── mock listing data ─── */
const listings = [
  {
    title: "Beach Vibez 🏖️ (VOICE CHAT!)",
    seller: "Breeze",
    price: "$10,000",
    visits: "29.4K",
    category: "Fighting" as const,
    date: "2/20/2026",
    game: "Beach Vibez 🏖️ (VOICE CHAT!)",
    thumbnail:
      "https://tr.rbxcdn.com/180DAY-40fe0f5c013d768b2025dd90653fdae9/768/432/Image/Webp/noFilter",
  },
  {
    title: "Tower Defense Sim ⚔️",
    seller: "StudioRBX",
    price: "$4,500",
    visits: "182K",
    category: "Strategy" as const,
    date: "2/18/2026",
    game: "Tower Defense Sim ⚔️",
    thumbnail:
      "https://tr.rbxcdn.com/180DAY-ccfb21f903e7d863cd837f8ed53c67f4/768/432/Image/Webp/noFilter",
  },
  {
    title: "Anime Tycoon 🎌",
    seller: "NexGen",
    price: "$2,500",
    visits: "67.1K",
    category: "Tycoon" as const,
    date: "2/15/2026",
    game: "Anime Tycoon 🎌",
    thumbnail:
      "https://tr.rbxcdn.com/180DAY-e1ba152a5048a492558aacfcab1b9806/768/432/Image/Webp/noFilter",
  },
];

const categoryConfig = {
  Fighting: {
    gradient: "from-red-500 to-rose-600",
    Icon: Swords,
  },
  Strategy: {
    gradient: "from-blue-600 to-indigo-700",
    Icon: Shield,
  },
  Tycoon: {
    gradient: "from-amber-500 to-orange-500",
    Icon: TrendingUp,
  },
};

/* ─── deal stepper steps ─── */
const steps = ["Offer", "Contract", "Escrow", "Delivery", "Complete"];

/* ─── animation variants ─── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: T.card + i * 0.2,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const glowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0.6, 1, 0.7],
    transition: { delay: T.cardGlow, duration: 0.8, ease: "easeOut" },
  },
};

const toastVariants: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: T.toast, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: T.dot + i * 0.25,
      type: "spring",
      stiffness: 500,
      damping: 25,
    },
  }),
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: {
      delay: T.line + i * 0.25,
      duration: 0.2,
      ease: "easeOut",
    },
  }),
};

/* ─── sub-components ─── */

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col w-[170px] lg:w-[190px] shrink-0 p-1.5">
      {/* Floating inner panel */}
      <div
        className="flex flex-col flex-1 rounded-xl py-3 px-2.5 gap-4"
        style={{
          background: t.sidebar,
          border: `1px solid ${t.rim}`,
          boxShadow: `0 0 0 1px oklch(1 0 0 / 6%)`,
        }}
      >
        {/* Logo */}
        <div className="px-2 pb-1">
          <span
            className="font-mono text-[11px] font-bold tracking-[0.15em]"
            style={{ color: t.fg }}
          >
            BLOXTR8
          </span>
          <div
            className="text-[8px] mt-0.5 opacity-50"
            style={{ color: t.fgMuted }}
          >
            Powered by <span className="text-violet-400">stripe</span>
          </div>
        </div>

        {navGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-0.5">
            <span
              className="text-[8px] font-semibold tracking-wider px-2 mb-0.5"
              style={{ color: t.muted }}
            >
              {group.label}
            </span>
            {group.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 px-2.5 py-1 rounded-full h-7 text-[10px]"
                style={{
                  background: item.active
                    ? `linear-gradient(135deg, ${item.color}22, ${item.color}08)`
                    : "transparent",
                  border: item.active
                    ? `1px solid ${item.color}33`
                    : "1px solid transparent",
                  color: item.active ? item.color : t.fgMuted,
                }}
              >
                {/* Icon dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: item.color,
                    opacity: item.active ? 1 : 0.5,
                  }}
                />
                <span className="truncate">{item.name}</span>
                {item.tag && (
                  <span
                    className="text-[7px] px-1 py-px rounded-full ml-auto"
                    style={{
                      background: `${item.color}22`,
                      color: item.color,
                    }}
                  >
                    {item.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Bottom nav */}
        <div className="mt-auto flex flex-col gap-0.5">
          <div
            className="flex items-center gap-2 px-2.5 py-1 rounded-full h-7 text-[10px]"
            style={{ color: t.fgMuted }}
          >
            <Settings className="w-3 h-3 opacity-50" />
            Settings
          </div>
          <div
            className="flex items-center gap-2 px-2.5 py-1 rounded-full h-7 text-[10px]"
            style={{ color: t.fgMuted }}
          >
            <User className="w-3 h-3 opacity-50" />
            Profile
          </div>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div
      className="flex items-center h-8 rounded-full px-3 gap-2 mb-4"
      style={{
        background: t.surface1,
        border: `1px solid ${t.rim}`,
        boxShadow: `0 0 0 1px oklch(1 0 0 / 6%)`,
      }}
    >
      <Menu className="w-3.5 h-3.5" style={{ color: t.fgMuted }} />
      <span
        className="w-px h-3.5"
        style={{ background: t.rim }}
      />
      <span className="text-[10px] font-medium" style={{ color: t.fgMuted }}>
        Marketplace
      </span>
    </div>
  );
}

function ListingCard({
  listing,
  index,
  selected,
  className = "",
}: {
  listing: (typeof listings)[0];
  index: number;
  selected?: boolean;
  className?: string;
}) {
  const cat = categoryConfig[listing.category];
  const CatIcon = cat.Icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`relative rounded-xl overflow-hidden flex flex-col ${className}`}
      style={{
        background: t.surface2,
        border: `1px solid ${t.rim}`,
      }}
    >
      {/* Selection glow overlay */}
      {selected && (
        <motion.div
          variants={glowVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-10 rounded-xl pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1.5px ${t.green}, 0 0 12px oklch(0.72 0.19 155 / 44%)`,
          }}
        />
      )}

      {/* Thumbnail with category gradient fallback */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={listing.thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Centered category icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <CatIcon className="w-12 h-12 text-white/[0.15]" />
        </div>
        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />

        {/* ACTIVE badge */}
        <span
          className="absolute top-2 right-2 text-[7px] font-semibold px-1.5 py-0.5 rounded-full tracking-wide"
          style={{
            background: "oklch(0.215 0.025 155 / 70%)",
            color: t.green,
          }}
        >
          ACTIVE
        </span>
        {/* Price badge */}
        <span
          className="absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md"
          style={{
            background: "oklch(0 0 0 / 50%)",
            color: t.green,
            boxShadow: `inset 0 0 0 1px oklch(1 0 0 / 10%)`,
          }}
        >
          {listing.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        {/* Seller row */}
        <div className="flex items-center gap-1.5">
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0"
            style={{ background: t.surface3, color: t.fgMuted }}
          >
            {listing.seller[0]}
          </span>
          <span className="text-[10px]" style={{ color: t.fgMuted }}>
            {listing.seller}
          </span>
        </div>
        {/* Title */}
        <span
          className="text-[11px] font-semibold leading-tight line-clamp-1"
          style={{ color: t.fg }}
        >
          {listing.title}
        </span>
        {/* Category */}
        <div
          className="flex items-center gap-1 text-[9px]"
          style={{ color: t.muted }}
        >
          <CatIcon className="w-2.5 h-2.5" />
          <span>{listing.category}</span>
        </div>
        {/* Game info row */}
        <div
          className="flex items-center gap-1 text-[9px] flex-wrap"
          style={{ color: t.muted }}
        >
          <span>{listing.visits} visits</span>
          <span>·</span>
          <span className="text-emerald-400">Verified</span>
        </div>
        {/* Divider */}
        <div className="h-px" style={{ background: "oklch(1 0 0 / 6%)" }} />
        {/* Footer */}
        <div className="flex items-center justify-between text-[9px]">
          <span style={{ color: t.muted }}>{listing.date}</span>
          <span
            className="flex items-center gap-1"
            style={{ color: t.fgMuted }}
          >
            <Eye className="w-3 h-3" />
            Details
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function EscrowToast() {
  return (
    <motion.div
      variants={toastVariants}
      initial="hidden"
      animate="visible"
      className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 max-w-[220px]"
    >
      <div
        className="rounded-xl p-3 backdrop-blur-xl"
        style={{
          background: `linear-gradient(135deg, oklch(0.18 0.02 155 / 80%), ${t.surface2})`,
          border: `1px solid oklch(0.72 0.19 155 / 20%)`,
          boxShadow: `0 0 30px oklch(0.72 0.19 155 / 10%), 0 4px 20px oklch(0 0 0 / 40%)`,
        }}
      >
        {/* Stepper dots + animated lines */}
        <div className="flex items-center gap-1 mb-2">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <motion.span
                custom={i}
                variants={dotVariants}
                initial="hidden"
                animate="visible"
                className="w-2 h-2 rounded-full"
                style={{
                  background:
                    i <= 2
                      ? t.green
                      : i === 3
                        ? t.primary
                        : `${t.muted}66`,
                  boxShadow: i === 3 ? `0 0 6px ${t.primary}` : "none",
                }}
              />
              {i < steps.length - 1 && (
                <motion.span
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-3 h-px mx-0.5"
                  style={{
                    background:
                      i < 2
                        ? t.green
                        : i === 2
                          ? `${t.primary}66`
                          : `${t.muted}33`,
                    originX: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
        {/* Step labels */}
        <div
          className="flex justify-between text-[6px] mb-2.5"
          style={{ color: t.muted }}
        >
          {steps.map((step, i) => (
            <span
              key={step}
              style={{
                color: i <= 2 ? t.green : i === 3 ? "#a78bfa" : t.muted,
              }}
            >
              {step}
            </span>
          ))}
        </div>
        {/* Message */}
        <div className="text-[10px] font-medium" style={{ color: t.fg }}>
          Deal secured
        </div>
        <div className="text-[9px] mt-0.5" style={{ color: t.fgMuted }}>
          <span style={{ color: t.green }} className="font-semibold">
            $2,500
          </span>{" "}
          held in escrow
        </div>
      </div>
    </motion.div>
  );
}

/* ─── main component ─── */

export default function ProductMockup() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: T.settle,
      }}
      className="relative w-full overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute -inset-8 sm:-inset-12 -z-10 rounded-3xl blur-3xl opacity-30"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, oklch(0.5 0.15 265 / 40%), oklch(0.4 0.1 155 / 20%), transparent 70%)`,
        }}
      />

      {/* App window */}
      <div
        className="aspect-[4/5] sm:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{
          background: t.surface0,
          border: `1px solid ${t.rim}`,
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-1.5 px-3 py-2 shrink-0"
          style={{
            background: t.surface1,
            borderBottom: `1px solid ${t.rim}`,
          }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span
            className="ml-4 text-[9px] flex items-center gap-1.5 opacity-60"
            style={{ color: t.fgMuted }}
          >
            <span className="w-3 h-3 rounded border border-current flex items-center justify-center text-[7px]">
              ⬡
            </span>
            Marketplace
          </span>
        </div>

        {/* App body — shell fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: T.shell,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="flex flex-1 relative min-h-0"
        >
          <Sidebar />

          {/* Content area */}
          <div className="flex-1 p-4 sm:p-5 overflow-hidden flex flex-col">
            {/* Top bar pill */}
            <TopBar />

            {/* Page header */}
            <div className="mb-3">
              <h3
                className="text-sm sm:text-base font-semibold"
                style={{ color: t.fg }}
              >
                Marketplace
              </h3>
              <p
                className="text-[9px] mt-0.5"
                style={{ color: t.fgMuted }}
              >
                Browse verified Roblox game listings
              </p>
            </div>

            {/* Search / filter bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.search, duration: 0.3, ease: "easeOut" }}
              className="flex items-center gap-2 rounded-full px-3 py-1.5 mb-3"
              style={{
                background: t.surface1,
                border: `1px solid ${t.border}`,
              }}
            >
              <Search
                className="w-3 h-3 shrink-0"
                style={{ color: t.muted }}
              />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: T.filterChip,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="rounded bg-[oklch(0.6_0.22_265_/_15%)] text-[#a78bfa] px-1.5 py-0.5 text-[9px] flex items-center gap-1"
              >
                status: Active
                <X className="w-2.5 h-2.5 opacity-60" />
              </motion.span>
              <span
                className="text-[8px] opacity-30"
                style={{ color: t.fgMuted }}
              >
                Add filter…
              </span>
              <X
                className="w-3 h-3 ml-auto shrink-0 opacity-40"
                style={{ color: t.fgMuted }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.resultsText, duration: 0.2, ease: "easeOut" }}
              className="text-[8px] mb-2"
              style={{ color: t.muted }}
            >
              Showing {listings.length} listings
            </motion.div>

            {/* Listings grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 min-h-0 overflow-hidden">
              {listings.map((listing, i) => (
                <ListingCard
                  key={listing.title}
                  listing={listing}
                  index={i}
                  selected={i === 2}
                  className={i > 0 ? "hidden sm:flex" : ""}
                />
              ))}
            </div>
          </div>

          {/* Escrow toast overlay */}
          <EscrowToast />
        </motion.div>
      </div>
    </motion.div>
  );
}
