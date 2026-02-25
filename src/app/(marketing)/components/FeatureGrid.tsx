"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, BarChart3, Palette } from "lucide-react";
import { DiscordLogo } from "@/components/logos/DiscordLogo";
import { motion } from "framer-motion";

const features = [
  {
    title: "Secure Escrow",
    description:
      "Stripe-powered payments held until trades complete. Verified listings, dispute resolution, and full protection.",
    color: "green",
    href: "#escrow",
    icon: (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
          <Shield className="h-5 w-5 text-green-500" />
        </div>
        <span className="font-mono-medium text-sm text-green-500">
          $45,000 Protected
        </span>
      </div>
    ),
  },
  {
    title: "Discord Integration",
    description:
      "Trade directly from your Discord server with slash commands, bot notifications, and Discord sign-in.",
    color: "indigo",
    href: "#discord",
    icon: (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
          <DiscordLogo className="h-5 w-5" />
        </div>
        <span className="font-mono-medium text-sm text-indigo-400">
          /bloxtr8 trade
        </span>
      </div>
    ),
  },
  {
    title: "TrendSpot",
    description:
      "Real-time market analytics. Track game values, sentiment, top gainers, and 397M+ market cap data.",
    color: "blue",
    href: "#trendspot",
    icon: (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
          <BarChart3 className="h-5 w-5 text-blue-500" />
        </div>
        <span className="font-mono-medium text-sm text-blue-400">
          8K+ Games Tracked
        </span>
      </div>
    ),
  },
  {
    title: "CreatorX",
    description:
      "Creator analytics and monetization tools for Roblox developers. Track performance and revenue.",
    color: "purple",
    href: "#creatorx",
    alpha: true,
    icon: (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
          <Palette className="h-5 w-5 text-purple-500" />
        </div>
        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-[10px]">
          ALPHA
        </Badge>
      </div>
    ),
  },
];

export default function FeatureGrid() {
  return (
    <section className="@container py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container-narrow px-4 sm:px-6">
        <div className="text-left mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4">
            Platform Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Everything you need to trade, analyze, and grow on Roblox.
          </p>
        </div>
        <div className="@xl:grid-cols-2 grid gap-3">
          {features.map((feature, index) => (
            <motion.a
              key={feature.title}
              href={feature.href}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block"
            >
              <Card className="p-6 h-full hover:bg-card/70 transition-colors cursor-pointer">
                <div className="space-y-3">
                  {feature.icon}
                  <div>
                    <h3 className="text-foreground font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
