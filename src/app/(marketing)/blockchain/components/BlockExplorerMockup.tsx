"use client";

import { motion, type Variants } from "framer-motion";

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
  green: "#4ade80",
  cyan: "#22d3ee",
};

/* ─── fake transaction rows ─── */
const transactions = [
  { hash: "0x8f2a…e31b", method: "deposit()", methodColor: t.blue, block: "19,847,231", age: "2s ago" },
  { hash: "0x3c91…7d4f", method: "release()", methodColor: t.green, block: "19,847,228", age: "8s ago" },
  { hash: "0xa7e4…b92c", method: "deposit()", methodColor: t.blue, block: "19,847,215", age: "34s ago" },
  { hash: "0x1f6b…c8a3", method: "release()", methodColor: t.green, block: "19,847,201", age: "1m ago" },
];

/* ─── timing ─── */
const T = { shell: 0.0, row: 0.4, rowInterval: 0.15 };

const shellVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { delay: T.shell, duration: 0.4 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: T.row + i * T.rowInterval, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function BlockExplorerMockup() {
  return (
    <div className="w-full">
      <div
        className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ background: t.surface0, border: `1px solid ${t.rim}` }}
      >
        {/* Table */}
        <motion.div
          variants={shellVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-3 sm:p-4"
        >
          {/* Header row */}
          <div
            className="grid grid-cols-4 gap-2 px-2 py-1.5 text-[8px] sm:text-[9px] font-semibold tracking-wider"
            style={{ color: t.muted, borderBottom: `1px solid ${t.border}` }}
          >
            <span>Tx Hash</span>
            <span>Method</span>
            <span className="text-right">Block</span>
            <span className="text-right">Age</span>
          </div>

          {/* Data rows */}
          {transactions.map((tx, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-2 px-2 py-2 text-[9px] sm:text-[10px]"
              style={{ borderBottom: `1px solid ${t.border}` }}
            >
              <span className="font-mono truncate" style={{ color: t.cyan }}>
                {tx.hash}
              </span>
              <span>
                <span
                  className="inline-block px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-medium"
                  style={{
                    background: `${tx.methodColor}15`,
                    color: tx.methodColor,
                    border: `1px solid ${tx.methodColor}30`,
                  }}
                >
                  {tx.method}
                </span>
              </span>
              <span className="text-right font-mono" style={{ color: t.fgMuted }}>
                {tx.block}
              </span>
              <span className="text-right" style={{ color: t.muted }}>
                {tx.age}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between px-3 sm:px-4 py-2 text-[8px] sm:text-[9px] flex-wrap gap-2"
          style={{ background: t.surface1, borderTop: `1px solid ${t.rim}`, color: t.muted }}
        >
          <span>Total Transactions: <span style={{ color: t.fg }}>12,847</span></span>
          <span>Contract Balance: <span style={{ color: t.green }}>$847,293 USDC</span></span>
        </div>
      </div>
    </div>
  );
}
