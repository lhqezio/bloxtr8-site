"use client";

import { motion } from "framer-motion";
import { blockchain } from "@/content/copy";
import TransactionDemoMockup from "./TransactionDemoMockup";

const accent = "#a855f7";

export default function TransactionDemoSection() {
  return (
    <section
      id="transaction-demo"
      className="py-12 sm:py-16 md:py-20 lg:py-28 border-t border-border"
    >
      <div className="container-narrow px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {blockchain.transactionDemo.title}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            See how blockchain escrow executes in real-time
          </p>
        </motion.div>

        <div
          className="rounded-2xl backdrop-blur-xl p-4 sm:p-5 md:p-6 max-w-xl mx-auto"
          style={{
            background: `linear-gradient(135deg, ${accent}15, ${accent}08, transparent 60%), oklch(0.13 0.005 265 / 40%)`,
            border: `1px solid ${accent}25`,
            boxShadow: `0 0 40px ${accent}08, 0 4px 30px oklch(0 0 0 / 30%), inset 0 1px 0 0 oklch(1 0 0 / 8%)`,
          }}
        >
          <TransactionDemoMockup />
        </div>
      </div>
    </section>
  );
}
