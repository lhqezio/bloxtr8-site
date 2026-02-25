"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, BarChart3, Gamepad2 } from "lucide-react";

const stats = [
  { label: "Total Games", value: "8K", icon: Gamepad2, color: "text-blue-400" },
  { label: "Items Tracked", value: "3K", icon: BarChart3, color: "text-cyan-400" },
  { label: "Market Cap", value: "397.5M", icon: DollarSign, color: "text-yellow-400" },
  { label: "Avg Premium", value: "+246.6%", icon: TrendingUp, color: "text-green-400" },
];

const topGainers = [
  { game: "[SALARYMAN] Jujutsu Shenanigans", change: "+54,252", volume: "452K" },
  { game: "Catch And Tame!", change: "+23,537", volume: "317K" },
  { game: "Garden Horizons", change: "+8,853", volume: "392K" },
  { game: "Volleyball Legends", change: "+8,128", volume: "310K" },
];

const topDecliners = [
  { game: "Escape Tsunami For Brainrots!", change: "-45,447", volume: "392K" },
  { game: "Brookhaven RP", change: "-41,143", volume: "452K" },
  { game: "Steal a Brainrot", change: "-35,524", volume: "280K" },
  { game: "Survive LAVA for Brainrots!", change: "-33,119", volume: "310K" },
];

const tableData = [
  { game: "Brookhaven RP", genre: "Town and City", volume: "452K", visits: "79.3B", sentiment: 85.9 },
  { game: "[UPD] Fish It!", genre: "All", volume: "437K", visits: "4.0B", sentiment: 82.8 },
  { game: "Escape Tsunami For Brainrots!", genre: "All", volume: "392K", visits: "4.0B", sentiment: 85.5 },
  { game: "99 Nights in the Forest", genre: "All", volume: "310K", visits: "24.5B", sentiment: 90.0 },
  { game: "Steal a Brainrot", genre: "All", volume: "317K", visits: "60.3B", sentiment: 92.6 },
  { game: "Blox Fruits", genre: "Adventure", volume: "305K", visits: "59.3B", sentiment: 92.0 },
];

function SentimentDot({ value }: { value: number }) {
  const color =
    value >= 90 ? "bg-green-400" : value >= 80 ? "bg-yellow-400" : "bg-red-400";
  return (
    <div className="flex items-center gap-2">
      <div className={`h-2 w-2 rounded-full ${color}`} />
      <span>{value.toFixed(1)}%</span>
    </div>
  );
}

export default function TrendSpotDemo() {
  const [activeTab, setActiveTab] = useState<"gainers" | "decliners">("gainers");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "gainers" ? "decliners" : "gainers"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-border w-full max-w-4xl mx-auto shadow-light">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6 pb-2 sm:pb-3 md:pb-4 border-b border-border">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
          <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-foreground font-semibold text-xs sm:text-sm md:text-base truncate">
            TrendSpot
          </h3>
          <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm truncate">
            Real-time market analytics
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="p-3 sm:p-4 bg-card/50">
              <div className="flex items-center gap-1.5 mb-1">
                <stat.icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${stat.color}`} />
                <span className="text-muted-foreground text-[10px] sm:text-xs">
                  {stat.label}
                </span>
              </div>
              <p className="font-mono-bold text-base sm:text-lg md:text-xl text-foreground">
                {stat.value}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Gainers / Decliners */}
      <div className="mb-4 sm:mb-6">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setActiveTab("gainers")}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              activeTab === "gainers"
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Top Gainers
          </button>
          <button
            onClick={() => setActiveTab("decliners")}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              activeTab === "decliners"
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Top Decliners
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-1.5 sm:space-y-2"
          >
            {(activeTab === "gainers" ? topGainers : topDecliners).map(
              (item, index) => (
                <div
                  key={item.game}
                  className="flex items-center justify-between py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg bg-card/30"
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-muted-foreground text-[10px] sm:text-xs w-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-foreground text-xs sm:text-sm truncate">
                      {item.game}
                    </span>
                  </div>
                  <span
                    className={`font-mono-medium text-xs sm:text-sm flex-shrink-0 ml-2 ${
                      activeTab === "gainers" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="text-muted-foreground text-[10px] sm:text-xs font-medium pb-2 pr-4">
                #
              </th>
              <th className="text-muted-foreground text-[10px] sm:text-xs font-medium pb-2 pr-4">
                Game
              </th>
              <th className="text-muted-foreground text-[10px] sm:text-xs font-medium pb-2 pr-4 hidden sm:table-cell">
                Genre
              </th>
              <th className="text-muted-foreground text-[10px] sm:text-xs font-medium pb-2 pr-4">
                Volume
              </th>
              <th className="text-muted-foreground text-[10px] sm:text-xs font-medium pb-2 pr-4 hidden md:table-cell">
                Visits
              </th>
              <th className="text-muted-foreground text-[10px] sm:text-xs font-medium pb-2">
                Sentiment
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <motion.tr
                key={row.game}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="border-b border-border/50 last:border-0"
              >
                <td className="text-muted-foreground text-[10px] sm:text-xs py-2 pr-4">
                  {index + 1}
                </td>
                <td className="text-foreground text-xs sm:text-sm py-2 pr-4 max-w-[120px] sm:max-w-none truncate">
                  {row.game}
                </td>
                <td className="text-muted-foreground text-[10px] sm:text-xs py-2 pr-4 hidden sm:table-cell">
                  {row.genre}
                </td>
                <td className="text-foreground text-xs sm:text-sm py-2 pr-4 font-mono-medium">
                  {row.volume}
                </td>
                <td className="text-muted-foreground text-[10px] sm:text-xs py-2 pr-4 hidden md:table-cell">
                  {row.visits}
                </td>
                <td className="text-xs sm:text-sm py-2">
                  <SentimentDot value={row.sentiment} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
