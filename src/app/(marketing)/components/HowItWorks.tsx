"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/content/copy";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container-narrow px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4"
          >
            {howItWorks.title}
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground"
          >
            {howItWorks.subtitle}
          </motion.p>
        </div>

        {/* Screenshot */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-lg"
        >
          <Image
            src="/step-deal-v3.png"
            alt="Completed deal on Bloxtr8 showing chat, escrow steps, and payment details"
            width={2371}
            height={1846}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
