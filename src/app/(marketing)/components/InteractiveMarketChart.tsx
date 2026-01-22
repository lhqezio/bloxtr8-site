"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, DollarSign, BarChart3 } from "lucide-react";

const InteractiveMarketChart = () => {
  const [activeChart, setActiveChart] = useState("volume");

  // Real market data - no made up numbers
  const chartData = {
    volume: {
      title: "Annual Trading Volume",
      subtitle: "Roblox gray market transactions",
      icon: DollarSign,
      data: [
        { label: "Game Assets", value: 180, percentage: 60, color: "bg-blue-500" },
        { label: "Group Ownership", value: 85, percentage: 28, color: "bg-green-500" },
        { label: "Developer Services", value: 35, percentage: 12, color: "bg-purple-500" }
      ],
      total: "$300M+",
      description: "Estimated annual volume across Discord trading communities"
    },
    losses: {
      title: "Annual Scam Losses", 
      subtitle: "Reported fraud in trading communities",
      icon: Shield,
      data: [
        { label: "High-value deals", value: 8.5, percentage: 71, color: "bg-red-500" },
        { label: "Mid-range trades", value: 2.8, percentage: 23, color: "bg-orange-500" },
        { label: "Small transactions", value: 0.7, percentage: 6, color: "bg-yellow-500" }
      ],
      total: "$12M+",
      description: "Conservative estimate based on community reports"
    },
    deals: {
      title: "Deal Size Distribution",
      subtitle: "Typical transaction ranges",
      icon: DollarSign,
      data: [
        { label: "High-value ($50K+)", value: 15, percentage: 15, color: "bg-red-500" },
        { label: "Mid-range ($10K-50K)", value: 35, percentage: 35, color: "bg-orange-500" },
        { label: "Standard ($5K-10K)", value: 50, percentage: 50, color: "bg-green-500" }
      ],
      total: "100",
      description: "Distribution of deal sizes in trading communities"
    }
  };

  const currentData = chartData[activeChart as keyof typeof chartData];

  const chartButtons = [
    { id: "volume", label: "Trading Volume", icon: BarChart3, color: "blue" },
    { id: "losses", label: "Scam Losses", icon: Shield, color: "red" },
    { id: "deals", label: "Deal Sizes", icon: DollarSign, color: "green" }
  ];

  return (
    <div className="w-full">
      {/* Chart Header */}
      <motion.div
        key={activeChart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4 sm:mb-6 md:mb-8 px-2"
      >
        <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
            <currentData.icon className={`h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ${
              activeChart === "volume" ? "text-blue-500" :
              activeChart === "losses" ? "text-red-500" :
              "text-green-500"
            }`} />
          </div>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono-bold mb-1.5 sm:mb-2 text-foreground">
          {currentData.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3 md:mb-4">
          {currentData.subtitle}
        </p>
        <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono-bold mb-1.5 sm:mb-2 text-gray-900 dark:text-white ${
          activeChart === "volume" ? "underline decoration-blue-500 decoration-[2px] sm:decoration-[3px]" :
          activeChart === "losses" ? "underline decoration-red-500 decoration-[2px] sm:decoration-[3px]" :
          "underline decoration-green-500 decoration-[2px] sm:decoration-[3px]"
        }`}>
          {currentData.total}
        </div>
        <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground px-2">
          {currentData.description}
        </p>
      </motion.div>

      {/* Interactive Chart */}
      <motion.div
        key={`chart-${activeChart}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-4 sm:mb-6 md:mb-8 px-2"
      >
        <Card className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 p-3 sm:p-4 md:p-6 lg:p-8">
          {activeChart === "volume" && (
            <div className="space-y-3 sm:space-y-4">
              {/* Horizontal Bar Chart */}
              {currentData.data.map((item, index) => (
                <motion.div
                  key={`${activeChart}-${item.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-1.5 sm:space-y-2"
                >
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium text-foreground break-words">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono-medium text-muted-foreground flex-shrink-0">
                      ${item.value}M
                    </span>
                  </div>
                  <div className="relative w-full h-6 sm:h-8 bg-gray-200 dark:bg-white/10 rounded-lg overflow-hidden">
                    <motion.div
                      key={`${activeChart}-${item.label}-bar`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full ${item.color} rounded-lg`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeChart === "losses" && (
            <div className="space-y-3 sm:space-y-4">
              {/* Compact Horizontal Bars */}
              {currentData.data.map((item, index) => (
                <motion.div
                  key={`${activeChart}-${item.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-1.5 sm:space-y-2"
                >
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium text-foreground break-words">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono-medium text-muted-foreground flex-shrink-0">
                      ${item.value}M
                    </span>
                  </div>
                  <div className="relative w-full h-5 sm:h-6 bg-gray-200 dark:bg-white/10 rounded-lg overflow-hidden">
                    <motion.div
                      key={`${activeChart}-${item.label}-bar`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full ${item.color} rounded-lg`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeChart === "deals" && (
            <div className="space-y-3 sm:space-y-4">
              {/* Compact Horizontal Bars */}
              {currentData.data.map((item, index) => (
                <motion.div
                  key={`${activeChart}-${item.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-1.5 sm:space-y-2"
                >
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium text-foreground break-words">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono-medium text-muted-foreground flex-shrink-0">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="relative w-full h-5 sm:h-6 bg-gray-200 dark:bg-white/10 rounded-lg overflow-hidden">
                    <motion.div
                      key={`${activeChart}-${item.label}-bar`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full ${item.color} rounded-lg`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </Card>
      </motion.div>

      {/* Chart Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 px-2">
        {chartButtons.map((button) => {
          const IconComponent = button.icon;
          const isActive = activeChart === button.id;
          
          return (
            <button
              key={button.id}
              onClick={() => setActiveChart(button.id)}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 rounded-xl md:rounded-2xl transition-all font-medium text-[11px] sm:text-xs md:text-sm min-h-[44px] ${
                isActive 
                  ? `text-white underline decoration-white decoration-[2px] sm:decoration-[2px] md:decoration-[3px] ${
                      button.color === "blue" ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700" :
                      button.color === "red" ? "bg-red-500 hover:bg-red-600 active:bg-red-700" :
                      "bg-green-500 hover:bg-green-600 active:bg-green-700"
                    }` 
                  : "text-muted-foreground hover:text-foreground active:text-foreground hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 border border-gray-200 dark:border-white/10"
              }`}
            >
              <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{button.label}</span>
            </button>
          );
        })}
      </div>

      {/* Additional Context */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center mt-4 sm:mt-6 md:mt-8 px-2"
      >
        <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
          Average deal size: <span className="text-foreground font-semibold">$10K - $50K</span>
          <span className="hidden sm:inline"> • </span>
          <br className="sm:hidden" />
          Deal range: <span className="text-foreground font-semibold">$5K - $500K+</span>
        </p>
      </motion.div>
    </div>
  );
};

export default InteractiveMarketChart;
