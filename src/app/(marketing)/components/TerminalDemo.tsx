"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const TerminalDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const demoSteps = useMemo(() => [
    {
      step: "Verify",
      command: "/escrow @buyer @seller $50000",
      description: "Check trader identity and credentials",
      color: "bg-blue-500",
      delay: 2000
    },
    {
      step: "Deal",
      command: "✅ Identity verified",
      description: "Agree on trade terms and conditions",
      color: "bg-green-500",
      delay: 1500
    },
    {
      step: "Contract",
      command: "📄 Contract generated",
      description: "Sign digital agreement",
      color: "bg-purple-500",
      delay: 1500
    },
    {
      step: "Escrow",
      command: "💰 $50,000 held in escrow",
      description: "Secure funds until trade completion",
      color: "bg-yellow-500",
      delay: 2000
    },
    {
      step: "Trade",
      command: "🎮 Game transferred",
      description: "Complete asset transfer",
      color: "bg-orange-500",
      delay: 1500
    },
    {
      step: "Release",
      command: "✅ Funds released to seller",
      description: "Release funds after confirmation",
      color: "bg-red-500",
      delay: 1500
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
        setIsTyping(false);
      }, 1000);
    }, demoSteps[currentStep]?.delay || 2000);

    return () => clearInterval(interval);
  }, [currentStep, demoSteps]);

  return (
    <div className="bg-gray-900 dark:bg-black/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 font-mono text-[11px] sm:text-xs md:text-sm border border-gray-300 dark:border-gray-800 w-full max-w-2xl mx-auto overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 md:mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
        <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-500 dark:text-gray-400 ml-2 sm:ml-3 md:ml-4 text-[10px] sm:text-xs md:text-sm truncate">bloxtr8-escrow</span>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
        {/* Step Header */}
        <motion.div
          key={`step-${currentStep}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 md:gap-3"
        >
          <div className={`${demoSteps[currentStep]?.color} text-white px-2 sm:px-2.5 md:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] md:text-xs font-bold whitespace-nowrap`}>
            {demoSteps[currentStep]?.step}
          </div>
          <span className="text-gray-700 dark:text-gray-300 font-medium text-[10px] sm:text-xs md:text-sm break-words">
            {demoSteps[currentStep]?.description}
          </span>
        </motion.div>

        {/* Current Command */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-1.5 sm:gap-2 md:gap-3 bg-gray-100 dark:bg-gray-900/50 p-2 sm:p-2.5 md:p-3 rounded-lg overflow-x-auto"
        >
          <span className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5">$</span>
          <span className="text-gray-900 dark:text-white break-words text-[11px] sm:text-xs md:text-sm leading-relaxed">
            {demoSteps[currentStep]?.command}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex gap-0.5 sm:gap-1 mt-2.5 sm:mt-3 md:mt-4">
          {demoSteps.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded ${
                index === currentStep
                  ? "bg-green-500 dark:bg-green-400"
                  : index < currentStep
                  ? "bg-green-600 dark:bg-green-600"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

        {/* Step Counter */}
        <div className="text-gray-600 dark:text-gray-500 text-[9px] sm:text-[10px] md:text-xs mt-1 sm:mt-1.5 md:mt-2">
          Step {currentStep + 1} of {demoSteps.length}
        </div>
      </div>
    </div>
  );
};

export default TerminalDemo;
