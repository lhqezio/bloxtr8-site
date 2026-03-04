"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, MessageSquare, Palette } from "lucide-react";
import TerminalDemo from "./TerminalDemo";
import TrendSpotDemo from "./TrendSpotDemo";
import { Badge } from "@/components/ui/badge";

const fadeUp = (delay: number) => ({
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay },
});

export default function BentoFeatures() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 border-t border-border">
      <div className="container-narrow px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4">
            How we make you more money
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Escrow — Large Card */}
          <motion.div
            {...fadeUp(0)}
            className="rounded-xl border border-border bg-card/50 p-5 sm:p-6 border-l-4 border-l-green-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-5 w-5 text-green-500" />
              <h3 className="text-lg sm:text-xl font-mono-bold">
                Secure Escrow
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Stripe-secured payments with automatic identity verification.
              Funds are held safely until both parties confirm.
            </p>
            <div className="rounded-lg overflow-hidden border border-border">
              <TerminalDemo />
            </div>
          </motion.div>

          {/* TrendSpot — Large Card */}
          <motion.div
            {...fadeUp(0.15)}
            className="rounded-xl border border-border bg-card/50 p-5 sm:p-6 border-l-4 border-l-blue-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg sm:text-xl font-mono-bold">TrendSpot</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Real-time market analytics. Track 8,000+ games, monitor trends,
              and make data-driven trading decisions.
            </p>
            <div className="rounded-lg overflow-hidden border border-border">
              <TrendSpotDemo />
            </div>
          </motion.div>

          {/* Discord — Small Card */}
          <motion.div
            {...fadeUp(0.3)}
            className="rounded-xl border border-border bg-card/50 p-5 sm:p-6 border-l-4 border-l-indigo-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="h-5 w-5 text-indigo-500" />
              <h3 className="text-lg sm:text-xl font-mono-bold">
                Discord Integration
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Trade directly from your Discord server. No need to leave your
              community.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Slash commands for instant trade setup
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Real-time notifications and status updates
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Server-level analytics and moderation
              </li>
            </ul>
          </motion.div>

          {/* CreatorX — Small Card */}
          <motion.div
            {...fadeUp(0.45)}
            className="rounded-xl border border-border bg-card/50 p-5 sm:p-6 border-l-4 border-l-purple-500 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-2">
              <Palette className="h-5 w-5 text-purple-500" />
              <h3 className="text-lg sm:text-xl font-mono-bold">CreatorX</h3>
              <Badge variant="secondary" className="text-xs">
                ALPHA
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Portfolio tools for creators. Showcase your work and connect with
              buyers.
            </p>
            <div className="rounded-lg bg-muted/30 border border-border p-6 flex items-center justify-center">
              <span className="text-sm text-muted-foreground font-mono-medium">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
