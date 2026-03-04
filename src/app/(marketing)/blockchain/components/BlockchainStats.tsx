"use client";

import { motion } from "framer-motion";
import { blockchain } from "@/content/copy";

const fadeUp = (delay: number) => ({
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay },
});

export default function BlockchainStats() {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-t border-border section-bg-subtle">
      <div className="container-narrow px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
          {blockchain.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp(i * 0.1)}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-mono-bold mb-1 sm:mb-2">
                {stat.display}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-mono-medium mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground/70">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
