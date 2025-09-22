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
    <div className="bg-black/90 rounded-2xl p-6 font-mono text-sm border border-gray-800 max-w-2xl mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 ml-4">bloxtr8-escrow</span>
      </div>

      {/* Terminal Content */}
      <div className="space-y-4">
        {/* Step Header */}
        <motion.div
          key={`step-${currentStep}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className={`${demoSteps[currentStep]?.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
            {demoSteps[currentStep]?.step}
          </div>
          <span className="text-gray-300 font-medium">
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
          className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg"
        >
          <span className="text-green-400">$</span>
          <span className="text-white">
            {demoSteps[currentStep]?.command}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex gap-1 mt-4">
          {demoSteps.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded ${
                index === currentStep
                  ? "bg-green-400"
                  : index < currentStep
                  ? "bg-green-600"
                  : "bg-gray-700"
              }`}
            />
          ))}
        </div>

        {/* Step Counter */}
        <div className="text-gray-500 text-xs mt-2">
          Step {currentStep + 1} of {demoSteps.length}
        </div>
      </div>
    </div>
  );
};

export default TerminalDemo;
