"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blockchain } from "@/content/copy";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Check, X, ArrowRight, User, Package, Play, Pause, Zap, Coins, Gamepad2 } from "lucide-react";
import { BaseLogo } from "@/components/logos/BaseLogo";
import { USDCLogo } from "@/components/logos/USDCLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";

// Animated gradient background component
const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 });
  
  // Deterministic seed function to avoid hydration mismatch
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const seed = i * 0.618033988749; // Golden ratio for better distribution
        const left = seededRandom(seed) * 100;
        const top = seededRandom(seed + 1) * 100;
        const xOffset = seededRandom(seed + 2) * 20 - 10;
        const duration = 3 + seededRandom(seed + 3) * 2;
        const delay = seededRandom(seed + 4) * 2;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, xOffset, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// Interactive card component with mouse tracking - disabled on touch devices
const InteractiveCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isTouch ? 0 : rotateX,
        rotateY: isTouch ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ 
  value, 
  prefix = "", 
  suffix = "",
  duration = 2 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value < 1 ? count.toFixed(3) : Math.floor(count)}
      {suffix}
    </span>
  );
};

// Transaction Demo Component
const TransactionDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 4) return 0; // Reset to start
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const steps = blockchain.transactionDemo.steps;

  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-12">
        {/* Progress indicator */}
        <div className="text-center mb-3 sm:mb-4 w-full px-2 sm:px-4">
          <p className="text-sm sm:text-base md:text-lg font-mono-bold text-foreground mb-2 sm:mb-2.5 md:mb-3 uppercase tracking-wider">
            Step {activeStep + 1} of {steps.length}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-mono-medium mb-3 sm:mb-4 md:mb-5 min-h-[16px] sm:min-h-[20px] md:min-h-[24px] px-2">
            {steps[activeStep].label}
          </p>
          <div className="flex gap-2 sm:gap-2.5 md:gap-3 justify-center px-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 sm:h-2 md:h-2 w-8 sm:w-10 md:w-12 lg:w-16 rounded-full transition-all duration-300 ${
                  idx === activeStep
                    ? "bg-blue-400"
                    : idx < activeStep
                    ? "bg-blue-400/50"
                    : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Visual flow - Vertical layout */}
        <div className="w-full max-w-2xl px-3 sm:px-4 md:px-0">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-8">
            {/* Buyer */}
            <motion.div
              animate={{
                scale: activeStep === 0 ? 1.02 : 1,
                borderColor: activeStep === 0 ? "rgb(59, 130, 246)" : "rgb(255, 255, 255, 0.1)",
              }}
              className="bg-card/50 backdrop-blur-md border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:border-blue-500/50 transition-all relative min-h-[110px] sm:min-h-[130px] md:min-h-[140px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3">
                <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-400" />
              </div>
              <p className="font-mono-bold text-xs sm:text-sm md:text-base mb-2 sm:mb-2.5 md:mb-3 uppercase tracking-wide">Buyer</p>
              <div className="min-h-[20px] sm:min-h-[24px] md:min-h-[28px] flex items-center justify-center">
                {activeStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5"
                  >
                    <Coins className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base text-blue-400 font-mono-medium">Depositing USDC...</span>
                  </motion.div>
                )}
                {activeStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-purple-500/20 border border-purple-500/30 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
                      <Gamepad2 className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base font-mono-medium text-purple-400">Roblox Item</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Arrow down - Funds going to contract */}
            <div className="flex justify-center relative h-12 sm:h-14 md:h-16">
              <motion.div
                animate={{
                  opacity: activeStep >= 1 ? 1 : 0.3,
                  y: activeStep === 1 ? [0, 8, 0] : 0,
                }}
                transition={{ duration: 1, repeat: activeStep === 1 ? Infinity : 0 }}
                className="flex flex-col items-center gap-1"
              >
                <Coins className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-400 rotate-90 flex-shrink-0" />
              </motion.div>
            </div>

            {/* Smart Contract */}
            <motion.div
              animate={{
                scale: [1, 2, 3, 4].includes(activeStep) ? 1.02 : 1,
                borderColor: [1, 2, 3, 4].includes(activeStep) ? "rgb(168, 85, 247)" : "rgb(255, 255, 255, 0.1)",
              }}
              className="bg-card/50 backdrop-blur-md border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center relative hover:border-purple-500/50 transition-all min-h-[130px] sm:min-h-[150px] md:min-h-[160px]"
            >
              {[1, 2, 3, 4].includes(activeStep) && (
                <motion.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl bg-purple-500/10"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3 relative z-10">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-400" />
              </div>
              <p className="font-mono-bold text-xs sm:text-sm md:text-base relative z-10 mb-2 sm:mb-2.5 md:mb-3 uppercase tracking-wide">Smart Contract</p>
              <div className="min-h-[24px] sm:min-h-[32px] md:min-h-[40px] flex items-center justify-center relative z-10">
                {activeStep === 1 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs sm:text-sm md:text-base text-purple-400 font-mono-medium"
                  >
                    Holding USDC escrow
                  </motion.p>
                )}
                {activeStep === 2 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs sm:text-sm md:text-base text-purple-400 font-mono-medium"
                  >
                    Waiting for Roblox transfer...
                  </motion.p>
                )}
                {activeStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-1 sm:space-y-1 md:space-y-1.5"
                  >
                    <p className="text-xs sm:text-sm md:text-base text-purple-400 font-mono-medium">Roblox item verified</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-purple-400/70 font-mono-medium uppercase tracking-tight">Ready to release funds</p>
                  </motion.div>
                )}
                {activeStep === 4 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs sm:text-sm md:text-base text-purple-400 font-mono-medium"
                  >
                    Releasing USDC...
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Arrow down - Item going up, funds going down */}
            <div className="flex justify-center relative h-14 sm:h-16 md:h-20">
              {activeStep === 2 && (
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    opacity: 1,
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute flex flex-col items-center gap-1"
                >
                  <Gamepad2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-400 -rotate-90 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-green-400 font-mono-medium uppercase tracking-tighter">Roblox Item</span>
                </motion.div>
              )}
              {activeStep === 4 && (
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    opacity: 1,
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute flex flex-col items-center gap-1"
                >
                  <Coins className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-400 rotate-90 flex-shrink-0" />
                </motion.div>
              )}
              {activeStep !== 2 && activeStep !== 4 && (
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-400 rotate-90 opacity-20 flex-shrink-0" />
              )}
            </div>

            {/* Seller */}
            <motion.div
              animate={{
                scale: [2, 3, 4].includes(activeStep) ? 1.02 : 1,
                borderColor: [2, 3, 4].includes(activeStep) ? "rgb(34, 197, 94)" : "rgb(255, 255, 255, 0.1)",
              }}
              className="bg-card/50 backdrop-blur-md border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:border-green-500/50 transition-all relative min-h-[110px] sm:min-h-[130px] md:min-h-[140px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-2.5 md:mb-3">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-400" />
              </div>
              <p className="font-mono-bold text-xs sm:text-sm md:text-base mb-2 sm:mb-2.5 md:mb-3 uppercase tracking-wide">Seller</p>
              <div className="min-h-[20px] sm:min-h-[24px] md:min-h-[28px] flex items-center justify-center">
                {activeStep < 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-green-500/20 border border-green-500/30 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
                      <Gamepad2 className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base font-mono-medium text-green-400">Roblox Item</span>
                    </div>
                  </motion.div>
                )}
                {activeStep === 2 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs sm:text-sm md:text-base text-green-400 font-mono-medium"
                  >
                    Transferring Roblox item...
                  </motion.p>
                )}
                {activeStep === 3 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs sm:text-sm md:text-base text-green-400 font-mono-medium"
                  >
                    Item transferred ✓
                  </motion.p>
                )}
                {activeStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5"
                  >
                    <Coins className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base text-green-400 font-mono-medium">Receiving USDC...</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Success state */}
            {activeStep === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-3 sm:mt-4 md:mt-5"
              >
                <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-green-500/20 border border-green-500/30 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full">
                  <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-400 font-mono-bold text-xs sm:text-sm md:text-base uppercase tracking-wide">Trade Complete!</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Control button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="inline-flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base md:text-lg font-mono-medium text-muted-foreground hover:text-foreground active:text-foreground transition-colors min-h-[48px] px-4 sm:px-5 mt-2 sm:mt-3"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default function BlockchainPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatedGradient />
      <FloatingParticles />
      
      <Header />
      <main className="flex-1 relative z-10">
        {/* Back to Home Link */}
        <section className="py-8 relative z-20">
          <div className="container-narrow">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
          <div className="container-narrow relative z-20 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Coming Soon Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-500/10 border border-blue-500/20 px-2.5 sm:px-3 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full font-mono-bold text-blue-400 mb-4 sm:mb-6 md:mb-8 text-[9px] sm:text-[10px] md:text-sm uppercase tracking-wider"
              >
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span>Coming Soon</span>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-mono-bold mb-3 sm:mb-4 md:mb-6 leading-[1.1] md:leading-tight px-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {blockchain.hero.title}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground mb-3 sm:mb-4 md:mb-6 font-medium max-w-2xl mx-auto px-2">
                {blockchain.hero.subtitle}
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-foreground font-mono-medium mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto opacity-80 px-2">
                {blockchain.hero.tagline}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center px-2"
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl px-6 sm:px-8 font-mono-medium min-h-[48px] text-sm sm:text-base w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("transaction-demo")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <a href="#transaction-demo">See how it works</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Animated Stats Bar */}
        <section className="py-6 sm:py-8 md:py-16 lg:py-24">
          <div className="container-wide px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
              {blockchain.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 sm:p-5 md:p-6 bg-card/50 backdrop-blur-md border border-border rounded-xl sm:rounded-2xl hover:border-blue-500/30 transition-all"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono-bold text-foreground mb-1 sm:mb-1.5 md:mb-2 leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-mono-bold text-foreground mb-1 sm:mb-1.5 md:mb-2 uppercase tracking-tight md:tracking-normal">
                    {stat.label}
                  </div>
                  <div className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Transaction Demo */}
        <section id="transaction-demo" className="py-12 md:py-16 lg:py-24">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {blockchain.transactionDemo.title}
                </span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                See how blockchain escrow executes in real-time
              </p>
            </motion.div>

            <TransactionDemo />
          </div>
        </section>

        {/* Traditional vs Blockchain Comparison */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-4">
                <span className="bg-gradient-to-r from-red-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  {blockchain.comparison.title}
                </span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                {blockchain.comparison.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
              {/* Traditional Escrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-5 md:p-8 hover:border-red-500/30 transition-all"
              >
                <h3 className="text-lg md:text-2xl font-mono-bold mb-4 md:mb-6 text-center uppercase tracking-wider text-muted-foreground">
                  {blockchain.comparison.traditional.label}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {blockchain.comparison.traditional.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 md:p-4 bg-background/50 rounded-xl border border-border/50"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] md:text-sm text-muted-foreground mb-0.5 uppercase tracking-tight">{item.label}</div>
                        <div className="text-sm md:text-lg font-mono-medium text-red-400 truncate">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Blockchain Escrow */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card/50 backdrop-blur-md border border-green-500/30 rounded-2xl p-5 md:p-8 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10"
              >
                <h3 className="text-lg md:text-2xl font-mono-bold mb-4 md:mb-6 text-center uppercase tracking-wider text-green-400">
                  {blockchain.comparison.blockchain.label}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {blockchain.comparison.blockchain.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 md:p-4 bg-background/50 rounded-xl border border-border/50"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] md:text-sm text-muted-foreground mb-0.5 uppercase tracking-tight">{item.label}</div>
                        <div className="text-sm md:text-lg font-mono-medium text-green-400 truncate">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Specs Section */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {blockchain.tech.title}
                </span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                {blockchain.tech.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4 md:px-0">
              {blockchain.tech.specs.map((spec, index) => {
                return (
                  <InteractiveCard key={index} delay={index * 0.1}>
                    <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-5 md:p-6 h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="text-[10px] md:text-sm text-muted-foreground font-mono-medium mb-1.5 md:mb-2 uppercase tracking-wider">
                        {spec.label}
                      </div>
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        {spec.value === "Base" && (
                          <BaseLogo size={20} color="#3B82F6" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        )}
                        {spec.value === "USDC" && (
                          <USDCLogo size={20} color="#06B6D4" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        )}
                        <div className="text-lg md:text-2xl font-mono-bold text-foreground">
                          {spec.value}
                        </div>
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {spec.description}
                      </div>
                    </div>
                  </InteractiveCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Email Signup CTA */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-narrow px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <InteractiveCard>
                <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 lg:p-12 text-center hover:border-blue-500/30 transition-all">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6"
                >
                  <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />
                </motion.div>
                
                <h2 className="text-xl md:text-3xl lg:text-4xl font-mono-bold mb-3 md:mb-4 uppercase tracking-wide">
                  {blockchain.emailSignup.title}
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8">
                  {blockchain.emailSignup.subtitle}
                </p>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="mt-4 md:mt-8">
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
                      <Input
                        type="email"
                        placeholder={blockchain.emailSignup.placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-background border-border flex-1 h-12 md:h-14 min-h-[48px] text-sm md:text-base"
                      />
                      <Button 
                        type="submit" 
                        className="rounded-xl h-12 md:h-14 min-h-[48px] px-6 font-mono-bold uppercase tracking-wider text-xs md:text-sm"
                      >
                        {blockchain.emailSignup.button}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 md:mt-8"
                  >
                    <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-5 py-2.5 md:px-6 md:py-3 rounded-xl">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                      <p className="text-green-400 font-mono-bold text-xs md:text-base uppercase tracking-wide">
                        {blockchain.emailSignup.success}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              </InteractiveCard>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
