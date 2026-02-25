"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DollarSign,
  Users,
  Gamepad2,
  Star,
  Rocket,
} from "lucide-react";

const mockMetrics = [
  { label: "Total Revenue", value: "$12,450", icon: DollarSign, color: "text-green-400" },
  { label: "Active Players", value: "24.3K", icon: Users, color: "text-blue-400" },
  { label: "Game Visits", value: "1.2M", icon: Gamepad2, color: "text-cyan-400" },
  { label: "Creator Score", value: "94.2", icon: Star, color: "text-yellow-400" },
];

export default function CreatorXSection() {
  return (
    <section id="creatorx" className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container-narrow px-4 sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-6 sm:mb-8 md:mb-12"
        >
          <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold">
              <span className="underline decoration-purple-500 decoration-[2px] sm:decoration-[3px]">
                CreatorX
              </span>
            </h2>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
              ALPHA
            </Badge>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Creator analytics and monetization tools for Roblox developers.
            Track your game&apos;s performance, revenue, and player engagement
            all in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Blurred mock dashboard */}
          <div className="bg-background/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-border w-full max-w-4xl mx-auto shadow-light select-none">
            <div className="blur-[3px] opacity-40 pointer-events-none">
              {/* Mock header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6 pb-2 sm:pb-3 md:pb-4 border-b border-border">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-xs sm:text-sm md:text-base">
                    CreatorX Dashboard
                  </h3>
                  <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">
                    Your game analytics
                  </p>
                </div>
              </div>

              {/* Mock metric cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {mockMetrics.map((metric) => (
                  <Card key={metric.label} className="p-3 sm:p-4 bg-card/50">
                    <div className="flex items-center gap-1.5 mb-1">
                      <metric.icon
                        className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${metric.color}`}
                      />
                      <span className="text-muted-foreground text-[10px] sm:text-xs">
                        {metric.label}
                      </span>
                    </div>
                    <p className="font-mono-bold text-base sm:text-lg md:text-xl text-foreground">
                      {metric.value}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Mock chart placeholder */}
              <div className="h-32 sm:h-40 md:h-48 rounded-lg bg-card/30 border border-border/50 flex items-end justify-around px-4 pb-4 gap-2">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="bg-purple-500/30 rounded-t-sm flex-1 max-w-6"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Rocket className="h-6 w-6 sm:h-7 sm:w-7 text-purple-400" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-mono-bold mb-2">
                Coming Soon
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-sm mx-auto px-4">
                CreatorX is currently in alpha. Be among the first to access
                powerful creator analytics.
              </p>
              <Button asChild size="lg" className="px-6 sm:px-8">
                <Link href="/contact">Join the Alpha</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
