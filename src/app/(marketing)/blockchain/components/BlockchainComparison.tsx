"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { blockchain } from "@/content/copy";

export default function BlockchainComparison() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 border-t border-border">
      <div className="container-narrow px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3">
            {blockchain.comparison.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {blockchain.comparison.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-border bg-card/30 p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-mono-bold mb-6 text-muted-foreground">
              {blockchain.comparison.traditional.label}
            </h3>
            <ul className="space-y-4">
              {blockchain.comparison.traditional.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-tight">{item.label}</div>
                    <div className="text-sm sm:text-base font-mono-medium text-red-400">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Blockchain */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border-2 border-green-500/40 bg-card/50 p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-mono-bold mb-6">
              {blockchain.comparison.blockchain.label}
            </h3>
            <ul className="space-y-4">
              {blockchain.comparison.blockchain.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-tight">{item.label}</div>
                    <div className="text-sm sm:text-base font-mono-medium text-green-400">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
