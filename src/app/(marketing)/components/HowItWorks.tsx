"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/content/copy";

const fadeUp = (delay: number) => ({
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay },
});

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 border-t border-border section-bg-subtle">
      <div className="container-narrow px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4">
            {howItWorks.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            {howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.number}
              {...fadeUp(i * 0.15)}
              className="text-center"
            >
              <div className="text-6xl sm:text-7xl md:text-8xl font-mono-bold text-foreground/[0.06] leading-none mb-4">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-mono-bold mb-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
