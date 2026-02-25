"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Eye } from "lucide-react";
import TrendSpotDemo from "./TrendSpotDemo";

export default function TrendSpotSection() {
  return (
    <section id="trendspot" className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container-narrow px-4 sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4 md:mb-6">
            <span className="underline decoration-blue-500 decoration-[2px] sm:decoration-[3px]">
              TrendSpot
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Real-time market analytics for the Roblox economy. Track game
            values, discover trends, and make data-driven decisions.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4 text-blue-500 flex-shrink-0" />
              <span>8,000+ games tracked</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Top gainers &amp; decliners</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="h-4 w-4 text-blue-500 flex-shrink-0" />
              <span>Sentiment analysis</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TrendSpotDemo />
        </motion.div>
      </div>
    </section>
  );
}
