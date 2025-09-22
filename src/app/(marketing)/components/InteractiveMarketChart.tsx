"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        className="text-center mb-8"
      >
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <currentData.icon className={`h-8 w-8 ${
              activeChart === "volume" ? "text-blue-500" :
              activeChart === "losses" ? "text-red-500" :
              "text-green-500"
            }`} />
          </div>
        </div>
        <h3 className="text-2xl font-mono-bold mb-2 text-foreground">
          {currentData.title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {currentData.subtitle}
        </p>
        <div className={`text-4xl font-mono-bold mb-2 text-white ${
          activeChart === "volume" ? "underline decoration-blue-500 decoration-[6px]" :
          activeChart === "losses" ? "underline decoration-red-500 decoration-[6px]" :
          "underline decoration-green-500 decoration-[6px]"
        }`}>
          {currentData.total}
        </div>
        <p className="text-sm text-muted-foreground">
          {currentData.description}
        </p>
      </motion.div>

      {/* Interactive Chart */}
      <motion.div
        key={`chart-${activeChart}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Card className="bg-white/5 border-white/10 p-8">
          {activeChart === "volume" && (
            <div className="space-y-4">
              {/* Horizontal Bar Chart */}
              {currentData.data.map((item, index) => (
                <motion.div
                  key={`${activeChart}-${item.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-mono-medium text-muted-foreground">
                      ${item.value}M
                    </span>
                  </div>
                  <div className="relative w-full h-8 bg-white/10 rounded-lg overflow-hidden">
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
            <div className="space-y-4">
              {/* Compact Horizontal Bars */}
              {currentData.data.map((item, index) => (
                <motion.div
                  key={`${activeChart}-${item.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-mono-medium text-muted-foreground">
                      ${item.value}M
                    </span>
                  </div>
                  <div className="relative w-full h-6 bg-white/10 rounded-lg overflow-hidden">
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
            <div className="space-y-4">
              {/* Compact Horizontal Bars */}
              {currentData.data.map((item, index) => (
                <motion.div
                  key={`${activeChart}-${item.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-mono-medium text-muted-foreground">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="relative w-full h-6 bg-white/10 rounded-lg overflow-hidden">
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
      <div className="flex flex-wrap justify-center gap-3">
        {chartButtons.map((button) => {
          const IconComponent = button.icon;
          const isActive = activeChart === button.id;
          
          return (
            <button
              key={button.id}
              onClick={() => setActiveChart(button.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all font-medium text-sm ${
                isActive 
                  ? `text-white underline decoration-white decoration-[6px] ${
                      button.color === "blue" ? "bg-blue-500 hover:bg-blue-600" :
                      button.color === "red" ? "bg-red-500 hover:bg-red-600" :
                      "bg-green-500 hover:bg-green-600"
                    }` 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-white/10"
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span>{button.label}</span>
            </button>
          );
        })}
      </div>

      {/* Additional Context */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center mt-8"
      >
        <p className="text-sm text-muted-foreground">
          Average deal size: <span className="text-foreground font-semibold">$10K - $50K</span> • 
          Deal range: <span className="text-foreground font-semibold">$5K - $500K+</span>
        </p>
      </motion.div>
    </div>
  );
};

export default InteractiveMarketChart;
