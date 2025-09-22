"use client";
import GameListingsDemo from "./GameListingsDemo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/copy";
import { Shield, Zap, Star, Heart, Globe, Rocket, Sparkles, Crown } from "lucide-react";
import { trackEvent } from "@/components/analytics";

// Smooth Floating Graphics Component
const SmoothGraphics = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Slow, smooth floating graphics */}
      <motion.div
        className="absolute top-20 left-20 text-pink-500"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 8, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Star size={20} />
      </motion.div>

      <motion.div
        className="absolute top-32 right-32 text-red-500"
        animate={{ 
          y: [0, 12, 0],
          x: [0, -10, 0],
          rotate: [0, -4, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Heart size={24} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-40 text-cyan-500"
        animate={{ 
          y: [0, -18, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      >
        <Globe size={22} />
      </motion.div>

      <motion.div
        className="absolute top-60 right-20 text-orange-500"
        animate={{ 
          y: [0, 16, 0],
          x: [0, -8, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Rocket size={26} />
      </motion.div>

      <motion.div
        className="absolute bottom-60 right-40 text-indigo-500"
        animate={{ 
          y: [0, -12, 0],
          x: [0, 18, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{ 
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        <Sparkles size={18} />
      </motion.div>

      <motion.div
        className="absolute top-40 left-60 text-emerald-500"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -12, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      >
        <Crown size={28} />
      </motion.div>

      <motion.div
        className="absolute top-80 left-20 text-purple-500"
        animate={{ 
          y: [0, -14, 0],
          x: [0, 10, 0],
          rotate: [0, 4, 0]
        }}
        transition={{ 
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      >
        <Shield size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-60 text-blue-500"
        animate={{ 
          y: [0, 18, 0],
          x: [0, -14, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <Zap size={24} />
      </motion.div>

      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute top-24 right-60 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <motion.div
        className="absolute top-80 left-80 w-18 h-18 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-xl"
        animate={{ 
          y: [0, -12, 0],
          x: [0, 20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4.5
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/2 w-18 h-18 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-xl"
        animate={{ 
          y: [0, 22, 0],
          x: [0, -18, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{ 
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-24">
      <div className="grid-bg absolute inset-0 -z-20" />
      
      {/* FlowAnimation disabled - was showing gray ring */}
      {/* <FlowAnimation /> */}
      
      {/* Smooth Floating Graphics */}
      <SmoothGraphics />
      
      <div className="container-wide py-20 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-mono-bold leading-tight mb-6"
          >
                <span className="underline decoration-green-500 decoration-[6px]">{hero.title.main}</span> {hero.title.connector} <span className="underline decoration-green-500 decoration-[6px]">{hero.title.underlineWords.trades}</span> in <span className="underline decoration-purple-500 decoration-[6px]">{hero.title.underlineWords.roblox}</span> {hero.title.context}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            {hero.subtitle.flows}, {hero.subtitle.contracts}, {hero.subtitle.description} <span className="underline decoration-blue-500 decoration-[3px]">{hero.subtitle.underlineWords.stripe}</span> {hero.subtitle.stripeLimit} <span className="underline decoration-yellow-400 decoration-[3px]">{hero.subtitle.underlineWords.usdc}</span> {hero.subtitle.base} {hero.subtitle.baseLimit}
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <Button asChild size="lg" className="rounded-2xl px-8">
              <a 
                href="#contact"
                onClick={() => trackEvent("cta_click", {
                  event_category: "engagement",
                  event_label: "hero_cta",
                  cta_text: hero.cta.primary,
                  cta_location: "hero_section"
                })}
              >
                {hero.cta.primary}
              </a>
            </Button>
          </motion.div>
            </div>

            {/* Right Side - Game Listings Demo */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <GameListingsDemo />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}