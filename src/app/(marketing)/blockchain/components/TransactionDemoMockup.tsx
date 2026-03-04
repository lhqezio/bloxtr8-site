"use client";

import { motion } from "framer-motion";
import { Check, User, Package, Zap, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";

/* ─── design tokens (matching EscrowMockup) ─── */
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
  blue: "#60a5fa",
  purple: "#a78bfa",
  green: "#4ade80",
};

/* ─── 3 pipeline nodes ─── */
const nodes = [
  { label: "Buyer", Icon: User, color: t.blue },
  { label: "Contract", Icon: Zap, color: t.purple },
  { label: "Seller", Icon: Package, color: t.green },
];

/* ─── step log entries ─── */
const logEntries = [
  { text: "Buyer deposits 45,000 USDC", color: t.blue, status: "pending" },
  { text: "Smart contract holds escrow", color: t.purple, status: "pending" },
  { text: "Roblox item transferred & verified", color: t.green, status: "pending" },
  { text: "Funds released to seller", color: t.purple, status: "pending" },
  { text: "Trade complete — settled in 1.8s", color: t.green, status: "pending" },
];

/* active node index per step */
const activeNodePerStep = [0, 1, 2, 1, 2];

export default function TransactionDemoMockup() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, [isPlaying]);

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
            Bloxtr8 — Live Escrow
          </span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-auto flex items-center gap-1 text-[8px] font-semibold px-1.5 py-0.5 rounded"
            style={{ color: t.muted, background: t.surface2 }}
          >
            {isPlaying ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
            {isPlaying ? "LIVE" : "PAUSED"}
          </button>
        </div>

        <div className="p-3 sm:p-4 flex flex-col gap-3">
          {/* Horizontal pipeline */}
          <div className="flex items-center px-1">
            {nodes.map((node, i) => {
              const isActive = activeNodePerStep[activeStep] === i;
              const isDone = activeStep === 4;
              const isLast = i === nodes.length - 1;
              return (
                <div key={node.label} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center gap-1">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        boxShadow: isActive ? `0 0 12px ${node.color}44` : "0 0 0px transparent",
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center"
                      style={{
                        background: isActive || isDone ? `${node.color}25` : t.surface2,
                        border: `2px solid ${isActive || isDone ? node.color : t.border}`,
                      }}
                    >
                      {isDone ? (
                        <Check className="w-3.5 h-3.5" style={{ color: node.color }} />
                      ) : (
                        <node.Icon className="w-3.5 h-3.5" style={{ color: isActive ? node.color : t.muted }} />
                      )}
                    </motion.div>
                    <span
                      className="text-[8px] font-semibold"
                      style={{ color: isActive || isDone ? node.color : t.muted }}
                    >
                      {node.label}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="flex-1 flex items-center px-1 -mt-3.5">
                      <div className="h-[2px] w-full rounded-full relative overflow-hidden" style={{ background: `${t.muted}33` }}>
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full"
                          animate={{
                            width: (isDone || activeStep > i) ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.4 }}
                          style={{ background: nodes[i + 1].color }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Live log */}
          <div
            className="rounded-lg p-2.5 flex flex-col gap-1"
            style={{ background: t.surface2, border: `1px solid ${t.border}` }}
          >
            {logEntries.map((entry, i) => {
              const isDone = i < activeStep;
              const isCurrent = i === activeStep;
              const isFuture = i > activeStep;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 py-0.5"
                  style={{ opacity: isFuture ? 0.3 : 1 }}
                >
                  <span className="w-3 h-3 shrink-0 flex items-center justify-center">
                    {isDone ? (
                      <Check className="w-3 h-3" style={{ color: entry.color }} />
                    ) : isCurrent ? (
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full block"
                        style={{ background: entry.color }}
                      />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full block" style={{ background: t.muted }} />
                    )}
                  </span>
                  <span
                    className="text-[9px] sm:text-[10px] font-medium"
                    style={{ color: isDone || isCurrent ? t.fg : t.muted }}
                  >
                    {entry.text}
                  </span>
                  {isDone && (
                    <span className="text-[7px] ml-auto shrink-0" style={{ color: t.muted }}>
                      ✓
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: `${t.muted}22` }}>
              <motion.div
                className="h-full rounded-full"
                animate={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                transition={{ duration: 0.4 }}
                style={{ background: `linear-gradient(90deg, ${t.blue}, ${t.purple}, ${t.green})` }}
              />
            </div>
            <span className="text-[8px] font-semibold shrink-0" style={{ color: t.muted }}>
              {activeStep + 1}/5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
