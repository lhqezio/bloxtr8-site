"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import { StripeLogo } from "@/components/logos/StripeLogo";
import TerminalDemo from "./TerminalDemo";

export default function EscrowSection() {
  return (
    <section id="escrow" className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container-narrow px-4 sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4 md:mb-6">
            Secure{" "}
            <span className="underline decoration-green-500 decoration-[2px] sm:decoration-[3px]">
              Escrow
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Funds are held in escrow until both parties confirm the deal is
            complete. No more trust-based trading.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Funds held until trade completes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <StripeLogo className="h-4 w-4 flex-shrink-0" />
              <span>Stripe-powered payments</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Verified marketplace listings</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TerminalDemo />
        </motion.div>
      </div>
    </section>
  );
}
