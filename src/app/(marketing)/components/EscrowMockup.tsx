"use client";

import { motion, type Variants } from "framer-motion";
import { Check, Shield, Clock } from "lucide-react";

/* ─── design tokens ─── */
const t = {
  surface0: "oklch(0.145 0 0)",
  surface1: "oklch(0.18 0.005 265 / 65%)",
  surface2: "oklch(0.21 0.005 265 / 55%)",
  surface3: "oklch(0.24 0.008 265 / 50%)",
  green: "oklch(0.72 0.19 155)",
  primary: "oklch(0.6 0.22 265)",
  rim: "oklch(1 0 0 / 8%)",
  border: "oklch(1 0 0 / 10%)",
  muted: "oklch(0.55 0 0)",
  fg: "oklch(0.985 0 0)",
  fgMuted: "oklch(0.65 0 0)",
};

/* ─── 4 milestone steps ─── */
const milestones = [
  { label: "Verify", done: true },
  { label: "Escrow", done: true },
  { label: "Transfer", done: false, active: true },
  { label: "Complete", done: false },
];

/* ─── timing ─── */
const T = {
  shell: 0.0,
  card: 0.4,
  stepper: 0.8,
  stepInterval: 0.25,
};

/* ─── variants ─── */
const shellVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { delay: T.shell, duration: 0.4, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { delay: T.card, duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: T.stepper + i * T.stepInterval, type: "spring", stiffness: 500, damping: 25 },
  }),
};

export default function EscrowMockup() {
  return (
    <div className="w-full h-full">
      <div
        className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full"
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
            Bloxtr8 — Deal #4827
          </span>
        </div>

        {/* Body — vertical stack */}
        <motion.div
          variants={shellVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 p-4 flex-1"
        >
          {/* Deal card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="rounded-xl p-3.5 flex-1 flex flex-col"
            style={{ background: t.surface2, border: `1px solid ${t.border}` }}
          >
            {/* Status + game name */}
            <div className="flex items-center gap-2 mb-2.5">
              <span
                className="text-[8px] font-semibold px-2 py-0.5 rounded-full tracking-wide"
                style={{ background: "oklch(0.215 0.025 155 / 70%)", color: t.green }}
              >
                IN ESCROW
              </span>
              <Clock className="w-3 h-3" style={{ color: t.muted }} />
              <span className="text-[10px] font-semibold ml-auto" style={{ color: t.fg }}>
                Anime Tycoon
              </span>
            </div>

            {/* Buyer → Seller compact row */}
            <div className="flex items-center gap-2 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold"
                  style={{ background: "oklch(0.6 0.22 265 / 20%)", color: "#a78bfa" }}
                >
                  B
                </span>
                <div>
                  <div className="text-[8px]" style={{ color: t.muted }}>Buyer</div>
                  <div className="text-[10px] font-medium" style={{ color: t.fg }}>MegaDealer</div>
                </div>
              </div>
              <div className="text-[10px] mx-1" style={{ color: t.muted }}>→</div>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold"
                  style={{ background: "oklch(0.72 0.19 155 / 20%)", color: t.green }}
                >
                  S
                </span>
                <div>
                  <div className="text-[8px]" style={{ color: t.muted }}>Seller</div>
                  <div className="text-[10px] font-medium" style={{ color: t.fg }}>NexGen</div>
                </div>
              </div>
            </div>

            {/* Amount bar */}
            <div
              className="rounded-lg p-2.5 flex items-center justify-between mt-auto"
              style={{ background: t.surface3, border: `1px solid ${t.border}` }}
            >
              <span className="text-[9px]" style={{ color: t.muted }}>Amount</span>
              <span className="text-sm font-bold" style={{ color: t.green }}>$50,000</span>
            </div>

            {/* Stripe badge */}
            <div className="flex items-center gap-1.5 mt-2.5">
              <Shield className="w-3 h-3" style={{ color: t.green }} />
              <span className="text-[8px]" style={{ color: t.green }}>Protected by Stripe</span>
            </div>
          </motion.div>

          {/* Horizontal progress stepper */}
          <div className="flex items-start px-1">
            {milestones.map((step, i) => {
              const isLast = i === milestones.length - 1;
              return (
                <div key={step.label} className="flex items-start flex-1 min-w-0">
                  {/* Dot + label column */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      custom={i}
                      variants={dotVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {step.done ? (
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: t.green }}
                        >
                          <Check className="w-3 h-3 text-black" strokeWidth={3} />
                        </div>
                      ) : (
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: step.active ? `${t.primary}33` : `${t.muted}22`,
                            border: step.active ? `2px solid ${t.primary}` : `1px solid ${t.muted}44`,
                            boxShadow: step.active ? `0 0 8px ${t.primary}44` : "none",
                          }}
                        >
                          {step.active && (
                            <motion.div
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: t.primary }}
                            />
                          )}
                        </div>
                      )}
                    </motion.div>
                    <span
                      className="text-[8px] mt-1.5 font-medium"
                      style={{
                        color: step.done ? t.green : step.active ? "#a78bfa" : t.muted,
                      }}
                    >
                      {step.label}
                    </span>
                  </div>
                  {/* Connecting line */}
                  {!isLast && (
                    <div className="flex-1 flex items-center pt-2.5 px-0.5">
                      <div
                        className="h-[2px] w-full rounded-full"
                        style={{
                          background: milestones[i + 1].done || milestones[i + 1].active
                            ? t.green
                            : `${t.muted}33`,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
