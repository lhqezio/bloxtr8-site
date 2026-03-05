"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { comparison } from "@/content/copy";

export default function ComparisonSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container-narrow px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold">
            {comparison.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Traditional / Trust Trading */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-border bg-card/30 p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-mono-bold mb-6 text-muted-foreground">
              {comparison.traditional.label}
            </h3>
            <ul className="space-y-4">
              {comparison.traditional.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bloxtr8 */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border-2 border-green-500/40 bg-card/50 p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-mono-bold mb-6">
              {comparison.bloxtr8.label}
            </h3>
            <ul className="space-y-4">
              {comparison.bloxtr8.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
