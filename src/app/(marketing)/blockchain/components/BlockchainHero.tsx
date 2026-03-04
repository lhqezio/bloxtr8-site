"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blockchain } from "@/content/copy";
import SmartContractMockup from "./SmartContractMockup";

export default function BlockchainHero() {
  return (
    <section className="bg-background min-h-[100svh]">
      <div className="relative w-full min-h-[100svh] flex items-center justify-center py-20 sm:py-24 lg:py-28">
        <div className="grid-bg absolute inset-0 -z-20" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Coming Soon Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full font-mono-bold text-blue-600 dark:text-blue-400 mb-6 text-[10px] sm:text-xs uppercase tracking-wider"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Coming Soon</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance text-4xl leading-[1.1] font-medium sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl xl:leading-[1.03]"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {blockchain.hero.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mt-6 text-balance text-base sm:text-lg lg:text-xl max-w-2xl"
            >
              {blockchain.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground/80 mt-3 text-sm sm:text-base font-mono-medium max-w-xl"
            >
              {blockchain.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <a href="#transaction-demo">See how it works</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 sm:mt-16 w-full max-w-2xl"
            >
              <SmartContractMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
