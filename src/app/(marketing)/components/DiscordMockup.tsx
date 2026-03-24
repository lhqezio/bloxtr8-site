"use client";

import { motion, type Variants } from "framer-motion";
import { Hash, Bot, Gamepad2 } from "lucide-react";

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
  discord: "#5865F2",
};

/* ─── message data ─── */
const messages = [
  {
    user: "robloxdev123",
    isBot: false,
    message: "/escrow create",
    isCommand: true,
    timestamp: "2:34 PM",
  },
  {
    user: "Bloxtr8 Bot",
    isBot: true,
    message: "Creating secure escrow... Please provide trade details:",
    isCommand: false,
    timestamp: "2:34 PM",
  },
  {
    user: "robloxdev123",
    isBot: false,
    message: "Selling: Adopt Me Mega Neon Dragon\nBuyer: @megadealer\nAmount: $45,000",
    isCommand: false,
    timestamp: "2:35 PM",
  },
  {
    user: "Bloxtr8 Bot",
    isBot: true,
    message: "✓ Escrow created! Contract sent to both parties.\n🔒 Funds secured in escrow wallet.\nℹ Verification in progress...",
    isCommand: false,
    timestamp: "2:35 PM",
  },
];

/* ─── sidebar channels ─── */
const channels = [
  { name: "general", active: false },
  { name: "trade-channel", active: true },
  { name: "announcements", active: false },
  { name: "support", active: false },
];

/* ─── timing ─── */
const T = { shell: 0.0, message: 0.5, messageInterval: 0.4 };

/* ─── variants ─── */
const shellVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { delay: T.shell, duration: 0.4 } },
};

const msgVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: T.message + i * T.messageInterval, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function DiscordMockup() {
  return (
    <div className="w-full">
      <div
        className="rounded-tl-xl sm:rounded-tl-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ background: t.surface0, borderTop: `1px solid ${t.rim}`, borderLeft: `1px solid ${t.rim}`, borderRight: `1px solid ${t.rim}` }}
      >
        {/* Body */}
        <motion.div
          variants={shellVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-1 min-h-0"
        >
          {/* Discord-style sidebar */}
          <div
            className="hidden sm:flex flex-col w-[130px] shrink-0 py-2 px-1.5"
            style={{ background: "oklch(0.155 0.005 265 / 60%)", borderRight: `1px solid ${t.rim}` }}
          >
            {/* Server icon */}
            <div
              className="w-8 h-8 rounded-2xl flex items-center justify-center mx-auto mb-3"
              style={{ background: t.discord }}
            >
              <span className="text-[10px] font-bold text-white">B8</span>
            </div>
            <div className="h-px mx-2 mb-2" style={{ background: t.border }} />

            {/* Channel list */}
            <div className="text-[8px] font-semibold tracking-wider px-2 mb-1" style={{ color: t.muted }}>
              TEXT CHANNELS
            </div>
            {channels.map((ch) => (
              <div
                key={ch.name}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[9px]"
                style={{
                  background: ch.active ? "oklch(1 0 0 / 6%)" : "transparent",
                  color: ch.active ? t.fg : t.muted,
                }}
              >
                <Hash className="w-2.5 h-2.5 shrink-0" />
                <span className="truncate">{ch.name}</span>
              </div>
            ))}
          </div>

          {/* Chat area */}
          <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2.5 overflow-hidden">
            {/* Channel header */}
            <div className="flex items-center gap-1.5 pb-2" style={{ borderBottom: `1px solid ${t.border}` }}>
              <Hash className="w-3.5 h-3.5" style={{ color: t.muted }} />
              <span className="text-[10px] font-semibold" style={{ color: t.fg }}>
                trade-channel
              </span>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-2 flex-1">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={msgVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-2"
                >
                  {/* Avatar */}
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: msg.isBot ? t.discord : t.surface3 }}
                  >
                    {msg.isBot ? (
                      <Bot className="w-3 h-3 text-white" />
                    ) : (
                      <Gamepad2 className="w-3 h-3" style={{ color: t.fgMuted }} />
                    )}
                  </div>

                  {/* Message content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className="text-[10px] font-semibold"
                        style={{ color: msg.isBot ? "#7289da" : t.fg }}
                      >
                        {msg.user}
                      </span>
                      {msg.isBot && (
                        <span
                          className="text-[7px] px-1 py-px rounded font-semibold"
                          style={{ background: t.discord, color: "#fff" }}
                        >
                          BOT
                        </span>
                      )}
                      <span className="text-[8px]" style={{ color: t.muted }}>
                        {msg.timestamp}
                      </span>
                      {msg.isCommand && (
                        <span
                          className="text-[7px] px-1 py-px rounded font-medium"
                          style={{ background: `${t.discord}33`, color: t.discord }}
                        >
                          SLASH CMD
                        </span>
                      )}
                    </div>
                    <div
                      className="text-[9px] leading-relaxed whitespace-pre-wrap rounded-md px-2 py-1.5"
                      style={{
                        color: msg.isCommand ? t.fg : t.fgMuted,
                        background: msg.isCommand ? `${t.discord}11` : t.surface2,
                        borderLeft: msg.isCommand ? `2px solid ${t.discord}` : "none",
                        fontFamily: msg.isCommand ? "var(--font-mono, monospace)" : "inherit",
                      }}
                    >
                      {msg.message}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input bar */}
            <div
              className="rounded-lg px-3 py-2 flex items-center gap-2"
              style={{ background: t.surface2, border: `1px solid ${t.border}` }}
            >
              <span className="text-[9px]" style={{ color: t.muted }}>
                Message #trade-channel
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
