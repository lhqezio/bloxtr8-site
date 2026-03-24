"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { howItWorks } from "@/content/copy";
import { Check, Shield, DollarSign, Lock, Tag } from "lucide-react";

const AUTOPLAY_INTERVAL = 5000;

/* ─── step visual data ─── */
const stepVisuals = [
  {
    label: "Listed",
    amount: "$10,000",
    detail: "Beach Vibez is live on the marketplace",
    icon: <Tag className="w-5 h-5" />,
    color: "#a78bfa",
  },
  {
    label: "In Escrow",
    amount: "$10,000",
    detail: "Funds held securely until delivery is confirmed",
    icon: <Lock className="w-5 h-5" />,
    color: "#facc15",
  },
  {
    label: "Paid",
    amount: "$9,400",
    detail: "Funds released to your account",
    icon: <DollarSign className="w-5 h-5" />,
    color: "#22c55e",
  },
];

const phases = ["List", "Escrow", "Release"];

/* ─── animation ─── */
const fadeUp = (delay: number) => ({
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay },
});

/* ─── progress bar for autoplay ─── */
function StepProgress({ active, duration }: { active: boolean; duration: number }) {
  return (
    <div
      className={`h-0.5 rounded-full overflow-hidden ${active ? "bg-foreground/10" : "bg-foreground/5"}`}
    >
      {active && (
        <motion.div
          className="h-full rounded-full bg-green-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
        />
      )}
    </div>
  );
}

/* ─── simple stepper visual ─── */
function StepperVisual({ activeStep }: { activeStep: number }) {
  const data = stepVisuals[activeStep];

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 px-6 sm:px-10">
      {/* Horizontal stepper */}
      <div className="w-full max-w-sm space-y-2">
        {/* Circles + lines row */}
        <div className="flex items-center">
          {phases.map((_, i) => (
            <div key={i} className="contents">
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500"
                style={{
                  background:
                    i < activeStep
                      ? "#22c55e"
                      : i === activeStep
                        ? `${data.color}20`
                        : "var(--foreground, #000) / 5%",
                  border: `2px solid ${
                    i < activeStep
                      ? "#22c55e"
                      : i === activeStep
                        ? data.color
                        : "var(--border)"
                  }`,
                }}
                animate={{ scale: i === activeStep ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {i < activeStep ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <span
                    className={`text-xs font-mono-bold transition-colors duration-500 ${
                      i === activeStep ? "" : "text-foreground/20"
                    }`}
                    style={i === activeStep ? { color: data.color } : undefined}
                  >
                    {i + 1}
                  </span>
                )}
              </motion.div>
              {i < phases.length - 1 && (
                <div className="flex-1 h-0.5 mx-3 rounded-full relative overflow-hidden bg-foreground/[0.08]">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: "#22c55e" }}
                    animate={{ width: i < activeStep ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Labels row */}
        <div className="flex">
          {phases.map((phase, i) => (
            <span
              key={phase}
              className={`w-10 text-center text-xs font-medium shrink-0 transition-colors duration-500 ${
                i < activeStep
                  ? "text-green-500"
                  : i === activeStep
                    ? ""
                    : "text-foreground/20"
              }`}
              style={{
                color:
                  i === activeStep && i >= activeStep
                    ? data.color
                    : undefined,
                marginRight: i < phases.length - 1 ? "auto" : undefined,
              }}
            >
              {phase}
            </span>
          ))}
        </div>
      </div>

      {/* Status card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-sm rounded-xl p-6 text-center bg-card border border-border"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{
              background: `${data.color}15`,
              color: data.color,
            }}
          >
            {data.icon}
          </div>
          <p className="text-sm text-muted-foreground mb-1">{data.label}</p>
          <p className="text-3xl sm:text-4xl font-mono-bold mb-2" style={{ color: data.color }}>
            {data.amount}
          </p>
          <p className="text-sm text-muted-foreground">{data.detail}</p>

          {/* Protection badge */}
          <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-green-500">
            <Shield className="w-3.5 h-3.5" />
            <span>Protected by Bloxtr8</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── main component ─── */
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0);

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % 3);
    setKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, advance]);

  const handleStepClick = (i: number) => {
    setActiveStep(i);
    setKey((k) => k + 1);
    setPaused(true);
    setTimeout(() => setPaused(false), AUTOPLAY_INTERVAL * 2);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container-narrow px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            {...fadeUp(0)}
            className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4"
          >
            {howItWorks.title}
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-sm sm:text-base md:text-lg text-muted-foreground"
          >
            {howItWorks.subtitle}
          </motion.p>
        </div>

        {/* Split layout: steps left + visual right */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-8 lg:gap-10 items-stretch"
        >
          {/* Left: Steps */}
          <div className="flex flex-col justify-center gap-1">
            {howItWorks.steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <button
                  key={step.number}
                  onClick={() => handleStepClick(i)}
                  className="text-left px-4 py-4 transition-all duration-300 cursor-pointer rounded-lg group"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-2xl sm:text-3xl font-mono-bold leading-none transition-all duration-500 ${
                        isActive ? "text-green-500" : "text-foreground/[0.06] group-hover:text-foreground/[0.12]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-base sm:text-lg font-mono-bold mb-1 transition-all duration-500 ${
                          isActive ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/60"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-all duration-500 ${
                          isActive ? "text-muted-foreground" : "text-muted-foreground/30 group-hover:text-muted-foreground/50"
                        }`}
                      >
                        {step.description}
                      </p>
                      {/* Progress bar */}
                      <div className="mt-3">
                        <StepProgress
                          key={`${i}-${key}`}
                          active={isActive}
                          duration={AUTOPLAY_INTERVAL}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Simple stepper visual */}
          <div className="relative h-[400px] sm:h-[440px] lg:h-[480px]">
            <StepperVisual activeStep={activeStep} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
