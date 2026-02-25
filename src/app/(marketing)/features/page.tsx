"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureGrid from "../components/FeatureGrid";
import EscrowSection from "../components/EscrowSection";
import DiscordSection from "../components/DiscordSection";
import TrendSpotSection from "../components/TrendSpotSection";
import CreatorXSection from "../components/CreatorXSection";
import CTA from "../components/CTA";

const pilotUrl = "https://pilot.bloxtr8.com";

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container-narrow px-4 sm:px-6">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full font-mono-medium text-blue-400 mb-5 text-xs sm:text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Platform Features</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono-bold mb-3 sm:mb-4 md:mb-6 leading-[1.1]">
              The{" "}
              <span className="underline decoration-green-500 decoration-[2px] sm:decoration-[3px]">
                complete
              </span>{" "}
              Roblox trading toolkit.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              Escrow protection, Discord-first workflows, market analytics, and
              creator tools — everything you need to trade safely and grow on
              Roblox.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-2xl px-6 sm:px-8 h-12 min-h-[48px] w-full sm:w-auto"
              >
                <a href={pilotUrl} target="_blank" rel="noopener noreferrer">
                  Start Trading
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl px-6 sm:px-8 h-12 min-h-[48px] w-full sm:w-auto"
              >
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FeatureGrid />
      <EscrowSection />
      <DiscordSection />
      <TrendSpotSection />
      <CreatorXSection />
      <CTA />
    </>
  );
}
