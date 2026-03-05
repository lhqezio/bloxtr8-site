"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { howItWorks } from "@/content/copy";
import {
  Shield,
  Send,
  Check,
  Circle,
  Bot,
  PanelRight,
  ArrowLeft,
  Package,
  PartyPopper,
  CheckCircle,
} from "lucide-react";

/* ─── design tokens (from real product) ─── */
const t = {
  surface0: "oklch(0.145 0 0)",
  surface1: "oklch(0.18 0.005 265 / 65%)",
  surface2: "oklch(0.21 0.005 265 / 55%)",
  surface3: "oklch(0.24 0.008 265 / 50%)",
  primary: "oklch(0.6 0.22 265)",
  green: "oklch(0.72 0.19 155)",
  rim: "oklch(1 0 0 / 8%)",
  border: "oklch(1 0 0 / 10%)",
  muted: "oklch(0.55 0 0)",
  fg: "oklch(0.985 0 0)",
  fgMuted: "oklch(0.65 0 0)",
};

/* ─── deal stepper steps ─── */
const dealSteps = ["Offer", "Sign", "Payment", "Delivery", "Release"];

/* ─── system embed component (matching real SystemEmbed) ─── */
function SystemEmbed({
  title,
  description,
  colour,
  time,
}: {
  title?: string;
  description?: string;
  colour?: string;
  time: string;
}) {
  return (
    <div className="flex px-0.5">
      <div
        className="max-w-full rounded-lg overflow-hidden"
        style={{
          background: t.surface2,
          border: `1px solid ${t.border}`,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5"
          style={{ borderBottom: `1px solid ${t.border}` }}
        >
          <div
            className="flex w-4 h-4 items-center justify-center rounded-full shrink-0"
            style={{ backgroundColor: colour ?? t.primary }}
          >
            <Bot className="w-2.5 h-2.5 text-white" />
          </div>
          <span className="text-[9px] font-semibold" style={{ color: t.fg }}>
            Bloxtr8
          </span>
          <span
            className="rounded-sm px-1 py-px text-[7px] font-semibold uppercase tracking-wider"
            style={{
              background: "oklch(0.6 0.22 265 / 15%)",
              color: "#a78bfa",
            }}
          >
            bot
          </span>
          <div className="flex-1" />
          <span className="text-[8px]" style={{ color: t.muted }}>
            {time}
          </span>
        </div>
        {/* Body */}
        <div className="px-2.5 py-2 space-y-0.5">
          {title && (
            <p className="text-[10px] font-semibold" style={{ color: t.fg }}>
              {title}
            </p>
          )}
          {description && (
            <p
              className="text-[9px] leading-relaxed"
              style={{ color: t.fgMuted }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── user message component (matching real ChatMessageList) ─── */
function UserMessage({
  name,
  text,
  time,
  color,
  initial,
  imageUrl,
}: {
  name: string;
  text: string;
  time: string;
  color: string;
  initial: string;
  imageUrl?: string;
}) {
  return (
    <div className="flex items-start gap-2">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={name}
          className="w-6 h-6 rounded-full shrink-0 object-cover"
        />
      ) : (
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
          style={{ background: `${color}25`, color }}
        >
          {initial}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[10px] font-semibold" style={{ color }}>
            {name}
          </span>
          <span className="text-[8px]" style={{ color: t.muted }}>
            {time}
          </span>
        </div>
        <p className="text-[10px] leading-relaxed" style={{ color: t.fg }}>
          {text}
        </p>
      </div>
    </div>
  );
}

/* ─── mock chat data for each step ─── */
type ChatItem =
  | { type: "user"; name: string; text: string; time: string; side: "buyer" | "seller" }
  | { type: "system"; title?: string; description: string; time: string; colour?: string };

const stepData: {
  messages: ChatItem[];
  phase: string;
  phaseIdx: number;
  action?: { icon: React.ReactNode; title: string; description: string; button: string; yourTurn: boolean };
  amount: string;
}[] = [
  {
    messages: [
      { type: "user", name: "breeze", text: "Just listed Beach Vibez — $10,000", time: "2:30 PM", side: "seller" },
      { type: "system", title: "Listing Published", description: "Beach Vibez 🏖️ is now live on the marketplace.", time: "2:30 PM", colour: "#22c55e" },
      { type: "user", name: "alex_dev", text: "Interested — submitting an offer now", time: "2:34 PM", side: "buyer" },
      { type: "system", title: "Offer Received", description: "alex_dev offered **$10,000** for Beach Vibez 🏖️.\nAwaiting seller response.", time: "2:34 PM" },
    ],
    phase: "Negotiating",
    phaseIdx: 0,
    action: { icon: <CheckCircle className="w-4 h-4" />, title: "New Offer", description: "alex_dev wants to buy your game", button: "Accept", yourTurn: true },
    amount: "$10,000",
  },
  {
    messages: [
      { type: "system", title: "Offer Accepted", description: "Both parties signed the contract.\nEscrow is now active.", time: "2:41 PM", colour: "#22c55e" },
      { type: "user", name: "alex_dev", text: "Payment sent — $10,000 in escrow", time: "2:42 PM", side: "buyer" },
      { type: "system", title: "Funds Secured", description: "**$10,000** held in escrow.\nWaiting for seller to deliver the asset.", time: "2:42 PM", colour: "#22c55e" },
      { type: "user", name: "breeze", text: "Transferring the game to you now", time: "2:45 PM", side: "seller" },
    ],
    phase: "Delivery",
    phaseIdx: 3,
    action: { icon: <Package className="w-4 h-4" />, title: "Deliver Asset", description: "Transfer the game to the buyer", button: "Mark Delivered", yourTurn: true },
    amount: "$10,000",
  },
  {
    messages: [
      { type: "system", title: "Asset Delivered", description: "Seller marked the asset as delivered.\nBuyer, please confirm receipt.", time: "2:48 PM" },
      { type: "user", name: "alex_dev", text: "Got everything — confirming now ✓", time: "2:50 PM", side: "buyer" },
      { type: "system", title: "Funds Released", description: "**$10,000** released to breeze.\nTransaction fee: 6% split evenly.", time: "2:50 PM", colour: "#22c55e" },
      { type: "system", title: "Deal Complete 🎉", description: "Trade finished successfully. Both parties verified.", time: "2:50 PM", colour: "#22c55e" },
    ],
    phase: "Complete",
    phaseIdx: 4,
    amount: "$10,000",
  },
];

const AUTOPLAY_INTERVAL = 5000;

/* ─── animation ─── */
const fadeUp = (delay: number) => ({
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay },
});

/* ─── deal screen mockup ─── */
function DealScreenMockup({ activeStep }: { activeStep: number }) {
  const data = stepData[activeStep];

  /* Always-present action bar content — for step 2 (Complete) we show
     a "deal complete" summary so the bar keeps its height */
  const actionBar = data.action ?? {
    icon: <PartyPopper className="w-4 h-4" />,
    title: "Deal Complete",
    description: "Both parties verified — trade successful",
    button: "View Receipt",
    yourTurn: false,
  };

  return (
    <div
      className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col w-full h-full"
      style={{ background: t.surface0, border: `1px solid ${t.rim}` }}
    >
      {/* ── Title bar ── */}
      <div
        className="flex items-center gap-1.5 px-3 py-2 shrink-0"
        style={{ background: t.surface1, borderBottom: `1px solid ${t.rim}` }}
      >
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span
          className="ml-3 text-[8px] flex items-center gap-1 opacity-50"
          style={{ color: t.fgMuted }}
        >
          <span className="w-2.5 h-2.5 rounded border border-current flex items-center justify-center text-[6px]">
            ⬡
          </span>
          bloxtr8.com/deals
        </span>
      </div>

      {/* ── Channel header (matches real ChannelHeader) ── */}
      <div
        className="flex items-center gap-2 h-10 px-3 shrink-0"
        style={{ borderBottom: `1px solid ${t.border}` }}
      >
        <ArrowLeft className="w-3.5 h-3.5 shrink-0" style={{ color: t.fgMuted }} />
        <Shield className="w-3.5 h-3.5 shrink-0" style={{ color: t.muted }} />
        <span
          className="text-[11px] font-semibold truncate"
          style={{ color: t.fg }}
        >
          Beach Vibez 🏖️
        </span>
        <span
          className="text-[10px] font-bold shrink-0"
          style={{ color: t.fg }}
        >
          {data.amount}
        </span>
        {/* Phase badge */}
        <span
          className="text-[8px] font-medium px-1.5 py-0.5 rounded-full shrink-0"
          style={{
            background:
              data.phase === "Complete"
                ? "oklch(0.72 0.19 155 / 12%)"
                : "transparent",
            color:
              data.phase === "Complete" ? t.green : t.fgMuted,
            border: `1px solid ${data.phase === "Complete" ? "oklch(0.72 0.19 155 / 30%)" : t.border}`,
          }}
        >
          {data.phase}
        </span>
        {/* Your turn badge — always takes space, invisible when not active */}
        <span
          className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 transition-opacity duration-300"
          style={{
            background: "oklch(0.6 0.22 265 / 12%)",
            color: "#a78bfa",
            opacity: data.action?.yourTurn ? 1 : 0,
          }}
        >
          Your turn
        </span>
        <span
          className="text-[9px] truncate hidden sm:inline"
          style={{ color: t.muted }}
        >
          with @{activeStep === 0 || activeStep === 2 ? "alex_dev" : "breeze"}
        </span>
        <div className="flex-1" />
        <PanelRight
          className="w-3.5 h-3.5 shrink-0"
          style={{ color: "#a78bfa" }}
        />
      </div>

      {/* ── Body: Chat + Context Panel ── */}
      <div className="flex flex-1 min-h-0">
        {/* Chat column */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Messages area */}
          <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-3"
              >
                {data.messages.map((msg, i) => (
                  <motion.div
                    key={`${activeStep}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.35 }}
                  >
                    {msg.type === "system" ? (
                      <SystemEmbed
                        title={msg.title}
                        description={msg.description}
                        colour={msg.colour}
                        time={msg.time}
                      />
                    ) : (
                      <UserMessage
                        name={msg.name}
                        text={msg.text}
                        time={msg.time}
                        color={msg.side === "buyer" ? "#a78bfa" : t.green}
                        initial={msg.side === "buyer" ? "A" : "B"}
                        imageUrl={
                          msg.side === "seller"
                            ? "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-B3CD534E420B33E586DF4256CAABDE4A-Png/150/150/AvatarHeadshot/Webp/noFilter"
                            : undefined
                        }
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick action bar — always rendered to prevent layout shift */}
          <div className="px-3 py-2 shrink-0" style={{ borderTop: `1px solid ${t.border}` }}>
            <div
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
              style={{
                background: data.phase === "Complete"
                  ? "oklch(0.72 0.19 155 / 6%)"
                  : "oklch(0.6 0.22 265 / 8%)",
              }}
            >
              <div style={{ color: data.phase === "Complete" ? t.green : "#a78bfa" }}>
                {actionBar.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-[10px] font-semibold" style={{ color: t.fg }}>
                    {actionBar.title}
                  </p>
                  {actionBar.yourTurn && (
                    <span
                      className="text-[7px] font-semibold uppercase tracking-wider px-1 py-px rounded-full"
                      style={{ background: "oklch(0.6 0.22 265 / 15%)", color: "#a78bfa" }}
                    >
                      Your turn
                    </span>
                  )}
                </div>
                <p className="text-[8px]" style={{ color: t.fgMuted }}>
                  {actionBar.description}
                </p>
              </div>
              <span
                className="text-[9px] font-medium px-2.5 py-1.5 rounded-md shrink-0"
                style={{ background: "oklch(0.922 0 0)", color: "oklch(0.205 0 0)" }}
              >
                {actionBar.button}
              </span>
            </div>
          </div>

          {/* Chat input (matching real ChatInput) */}
          <div className="px-3 py-2.5 shrink-0" style={{ borderTop: `1px solid ${t.border}` }}>
            {data.phase === "Complete" ? (
              <div
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[9px]"
                style={{ background: t.surface1, color: t.muted }}
              >
                This chat is archived — the deal has ended.
              </div>
            ) : (
              <div
                className="flex items-center gap-2 rounded-lg px-3 py-2"
                style={{
                  background: t.surface1,
                  border: `1px solid oklch(1 0 0 / 5%)`,
                }}
              >
                <span className="text-[10px] flex-1" style={{ color: t.muted }}>
                  Message...
                </span>
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                  style={{ color: t.muted }}
                >
                  <Send className="w-3 h-3" />
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── Context Panel (right sidebar, matching real DealContextPanel) ── */}
        <div
          className="hidden lg:flex flex-col w-[200px] xl:w-[220px] shrink-0 overflow-hidden"
          style={{ borderLeft: `1px solid ${t.border}` }}
        >
          <div className="p-3 space-y-3 overflow-hidden">
            {/* Deal Stepper (matching real DealStepper) */}
            <div
              className="rounded-lg p-2.5"
              style={{ background: t.surface1, border: `1px solid ${t.rim}` }}
            >
              {/* Step dots + connectors */}
              <div className="flex items-center justify-between mb-1.5">
                {dealSteps.map((step, i) => (
                  <div key={step} className="flex items-center">
                    <span
                      className="w-[7px] h-[7px] rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        background:
                          i < data.phaseIdx
                            ? t.green
                            : i === data.phaseIdx
                              ? t.primary
                              : `${t.muted}33`,
                        boxShadow:
                          i === data.phaseIdx
                            ? `0 0 6px ${t.primary}`
                            : "none",
                      }}
                    >
                      {i < data.phaseIdx && (
                        <Check className="w-[5px] h-[5px] text-white" />
                      )}
                    </span>
                    {i < dealSteps.length - 1 && (
                      <span
                        className="w-3 h-px mx-0.5 transition-colors duration-500"
                        style={{
                          background:
                            i < data.phaseIdx
                              ? t.green
                              : `${t.muted}22`,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
              {/* Step labels */}
              <div className="flex justify-between">
                {dealSteps.map((step, i) => (
                  <span
                    key={step}
                    className="text-[6px] leading-none transition-colors duration-500"
                    style={{
                      color:
                        i < data.phaseIdx
                          ? t.green
                          : i === data.phaseIdx
                            ? "#a78bfa"
                            : `${t.muted}88`,
                    }}
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>

            {/* Action card — always rendered, content changes */}
            <div
              className="rounded-lg p-2.5 space-y-1.5"
              style={{ background: t.surface1, border: `1px solid ${t.rim}` }}
            >
              <div className="flex items-center gap-1.5">
                <div style={{ color: data.phase === "Complete" ? t.green : "#a78bfa" }}>
                  {actionBar.icon}
                </div>
                <div>
                  <p className="text-[9px] font-semibold" style={{ color: t.fg }}>
                    {actionBar.title}
                  </p>
                  {actionBar.yourTurn && (
                    <span
                      className="text-[7px] font-semibold uppercase tracking-wider"
                      style={{ color: "#a78bfa" }}
                    >
                      Your turn
                    </span>
                  )}
                </div>
              </div>
              <p className="text-[8px]" style={{ color: t.fgMuted }}>
                {actionBar.description}
              </p>
            </div>

            {/* Protection banner (matching real ProtectionBanner) */}
            <div
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[8px]"
              style={{
                background: "oklch(0.72 0.19 155 / 6%)",
                border: "1px solid oklch(0.72 0.19 155 / 15%)",
                color: t.green,
              }}
            >
              <Shield className="w-3 h-3 shrink-0" />
              <span>Payment protected by Bloxtr8</span>
            </div>

            {/* Deal details */}
            <div className="space-y-1.5">
              {[
                { label: "Amount", value: data.amount, valueColor: t.green, bold: true },
                { label: "Buyer", value: "alex_dev", valueColor: t.fgMuted },
                { label: "Seller", value: "breeze", valueColor: t.fgMuted },
                { label: "Fee", value: "3% + 3%", valueColor: t.fgMuted },
                { label: "Method", value: "Stripe", valueColor: t.fgMuted },
              ].map(({ label, value, valueColor, bold }) => (
                <div key={label} className="flex items-center justify-between text-[8px]">
                  <span style={{ color: t.muted }}>{label}</span>
                  <span
                    className={bold ? "font-bold" : ""}
                    style={{ color: valueColor }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: t.border }} />

            {/* Timeline (matching real connected timeline) */}
            <div>
              <p className="text-[8px] font-semibold mb-2" style={{ color: t.fgMuted }}>
                Timeline
              </p>
              <div className="space-y-0">
                {[
                  { label: "Offer created", done: true },
                  { label: "Contract signed", done: data.phaseIdx >= 2 },
                  { label: "Payment secured", done: data.phaseIdx >= 3 },
                  { label: "Asset delivered", done: data.phaseIdx >= 4 },
                  { label: "Funds released", done: data.phaseIdx >= 4 },
                ].map((item, i, arr) => (
                  <div key={i} className="flex gap-2">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500"
                        style={{
                          background: item.done
                            ? "oklch(0.6 0.22 265 / 15%)"
                            : `${t.muted}15`,
                        }}
                      >
                        {item.done ? (
                          <Check className="w-2 h-2" style={{ color: "#a78bfa" }} />
                        ) : (
                          <Circle className="w-1.5 h-1.5" style={{ color: `${t.muted}44` }} />
                        )}
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          className="w-px flex-1 my-0.5"
                          style={{ background: t.border }}
                        />
                      )}
                    </div>
                    <div className={i < arr.length - 1 ? "pb-1.5" : ""}>
                      <p
                        className="text-[8px] transition-colors duration-500"
                        style={{ color: item.done ? t.fgMuted : `${t.muted}66` }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── progress bar for autoplay ─── */
function StepProgress({ active, duration }: { active: boolean; duration: number }) {
  return (
    <div
      className="h-0.5 rounded-full overflow-hidden"
      style={{ background: active ? "oklch(1 0 0 / 10%)" : "oklch(1 0 0 / 5%)" }}
    >
      {active && (
        <motion.div
          className="h-full rounded-full"
          style={{ background: "oklch(0.72 0.19 155)" }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
        />
      )}
    </div>
  );
}

/* ─── main component ─── */
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0); // reset progress bar animation

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % 3);
    setKey((k) => k + 1);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, advance]);

  const handleStepClick = (i: number) => {
    setActiveStep(i);
    setKey((k) => k + 1);
    setPaused(true);
    // Resume autoplay after a delay
    setTimeout(() => setPaused(false), AUTOPLAY_INTERVAL * 2);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container-narrow px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            {...fadeUp(0)}
            className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4"
          >
            {howItWorks.title}
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-sm sm:text-base md:text-lg text-muted-foreground"
          >
            {howItWorks.subtitle}
          </motion.p>
        </div>

        {/* Split layout: steps left + mockup right */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-8 lg:gap-10 items-stretch"
        >
          {/* Left: Steps */}
          <div className="flex flex-col justify-center gap-1">
            {howItWorks.steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <button
                  key={step.number}
                  onClick={() => handleStepClick(i)}
                  className="text-left px-4 py-4 transition-all duration-300 cursor-pointer rounded-lg group"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-2xl sm:text-3xl font-mono-bold leading-none transition-all duration-500 ${
                        isActive ? "text-green-500" : "text-foreground/[0.06] group-hover:text-foreground/[0.12]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-base sm:text-lg font-mono-bold mb-1 transition-all duration-500 ${
                          isActive ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/60"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-all duration-500 ${
                          isActive ? "text-muted-foreground" : "text-muted-foreground/30 group-hover:text-muted-foreground/50"
                        }`}
                      >
                        {step.description}
                      </p>
                      {/* Progress bar */}
                      <div className="mt-3">
                        <StepProgress
                          key={`${i}-${key}`}
                          active={isActive}
                          duration={AUTOPLAY_INTERVAL}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Deal screen mockup — fixed height prevents layout shift */}
          <div className="relative h-[400px] sm:h-[440px] lg:h-[480px]">
            {/* Background glow */}
            <div
              className="absolute -inset-8 -z-10 rounded-3xl blur-3xl opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, oklch(0.5 0.15 265 / 50%), oklch(0.4 0.1 155 / 25%), transparent 70%)",
              }}
            />
            <DealScreenMockup activeStep={activeStep} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
