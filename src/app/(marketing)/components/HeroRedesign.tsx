"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, CirclePlay } from "lucide-react";
import ProductMockup from "./ProductMockup";

const pilotUrl = "https://pilot.bloxtr8.com";
const youtubeDemoUrl =
  "https://www.youtube.com/watch?v=z5QTJ_-0cp0&feature=youtu.be";

export default function HeroRedesign() {
  return (
    <main className="overflow-hidden">
      <section className="bg-background sm:min-h-[100svh]">
        <div className="relative w-full sm:min-h-[100svh] flex items-center justify-center pt-24 pb-12 sm:py-24 lg:py-28">
          <div className="grid-bg absolute inset-0 -z-20" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-balance text-4xl leading-[1.1] font-medium sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl xl:leading-[1.03]"
              >
                Trade Roblox games.
                <br />
                <span className="text-green-500">Without the risk.</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-muted-foreground mt-6 text-balance text-base sm:text-lg lg:text-xl max-w-2xl"
              >
                All-in-one platform for studios and indie devs to sell games and
                assets with escrow protection.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Button asChild size="lg">
                  <a
                    href={pilotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <span className="text-nowrap">Start Trading</span>
                    <ChevronRight className="opacity-50" />
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <a
                    href={youtubeDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <span className="text-nowrap">Watch Demo</span>
                    <CirclePlay className="h-5 w-5 opacity-70" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 sm:mt-16 w-full"
              >
                <ProductMockup />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
