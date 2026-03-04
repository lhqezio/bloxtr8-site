"use client";

import { motion, type Variants } from "framer-motion";
import { Shield } from "lucide-react";
import { BaseLogo } from "@/components/logos/BaseLogo";

/* ─── design tokens (matching EscrowMockup) ─── */
const t = {
  surface0: "oklch(0.145 0 0)",
  surface1: "oklch(0.18 0.005 265 / 65%)",
  surface2: "oklch(0.21 0.005 265 / 55%)",
  rim: "oklch(1 0 0 / 8%)",
  border: "oklch(1 0 0 / 10%)",
  muted: "oklch(0.55 0 0)",
  fg: "oklch(0.985 0 0)",
  fgMuted: "oklch(0.65 0 0)",
  purple: "#a78bfa",
  cyan: "#22d3ee",
  green: "#4ade80",
};

/* ─── fake Solidity lines ─── */
const codeLines = [
  { tokens: [{ text: "// SPDX-License-Identifier: MIT", color: t.muted }] },
  { tokens: [{ text: "pragma ", color: t.purple }, { text: "solidity ^0.8.20;", color: t.fg }] },
  { tokens: [] },
  {
    tokens: [
      { text: "contract ", color: t.purple },
      { text: "BloxEscrow ", color: t.cyan },
      { text: "{", color: t.fg },
    ],
  },
  {
    tokens: [
      { text: "  mapping", color: t.purple },
      { text: "(", color: t.fg },
      { text: "uint256", color: t.cyan },
      { text: " => ", color: t.fg },
      { text: "Deal", color: t.cyan },
      { text: ") ", color: t.fg },
      { text: "public ", color: t.purple },
      { text: "deals;", color: t.fg },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { text: "  function ", color: t.purple },
      { text: "deposit", color: t.fg },
      { text: "(", color: t.fg },
      { text: "uint256 ", color: t.cyan },
      { text: "dealId) ", color: t.fg },
      { text: "external ", color: t.purple },
      { text: "{", color: t.fg },
    ],
  },
  {
    tokens: [
      { text: "    require", color: t.fg },
      { text: "(msg.sender == deals[dealId].buyer,", color: t.fg },
    ],
  },
  {
    tokens: [
      { text: '      ', color: t.fg },
      { text: '"Only buyer"', color: t.green },
      { text: ");", color: t.fg },
    ],
  },
  {
    tokens: [
      { text: "    usdc.transferFrom", color: t.fg },
      { text: "(msg.sender, ", color: t.fg },
      { text: "address", color: t.purple },
      { text: "(", color: t.fg },
      { text: "this", color: t.purple },
      { text: "), amount);", color: t.fg },
    ],
  },
  { tokens: [{ text: "  }", color: t.fg }] },
  { tokens: [{ text: "}", color: t.fg }] },
];

/* ─── timing ─── */
const T = { shell: 0.0, line: 0.3, lineInterval: 0.08 };

const shellVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { delay: T.shell, duration: 0.4 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: T.line + i * T.lineInterval, duration: 0.3 },
  }),
};

export default function SmartContractMockup() {
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
            BloxEscrow.sol — Verified
          </span>
        </div>

        {/* Code body */}
        <motion.div
          variants={shellVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-3 sm:p-4 overflow-x-auto"
        >
          <pre className="text-[9px] sm:text-[10px] leading-[1.7] font-mono">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-0"
              >
                <span
                  className="w-5 sm:w-6 text-right mr-3 select-none shrink-0"
                  style={{ color: t.muted }}
                >
                  {i + 1}
                </span>
                <span className="whitespace-pre">
                  {line.tokens.map((tok, j) => (
                    <span key={j} style={{ color: tok.color }}>
                      {tok.text}
                    </span>
                  ))}
                </span>
              </motion.div>
            ))}
          </pre>
        </motion.div>

        {/* Status bar */}
        <div
          className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 text-[8px] sm:text-[9px] flex-wrap"
          style={{ background: t.surface1, borderTop: `1px solid ${t.rim}`, color: t.muted }}
        >
          <span className="flex items-center gap-1.5">
            <BaseLogo size={12} color="#3B82F6" />
            <span>Deployed on Base</span>
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3" style={{ color: t.green }} />
            <span style={{ color: t.green }}>Audited</span>
          </span>
          <span className="ml-auto" style={{ color: t.fgMuted }}>
            Gas: ~$0.001
          </span>
        </div>
      </div>
    </div>
  );
}
