"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blockchain } from "@/content/copy";

export default function BlockchainCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 border-t border-border">
      <div className="container-narrow px-4 sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-3 sm:mb-4 uppercase tracking-wide">
            {blockchain.emailSignup.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8">
            {blockchain.emailSignup.subtitle}
          </p>

          <Button asChild size="lg" className="rounded-xl min-h-[48px] px-6 font-mono-bold uppercase tracking-wider text-xs sm:text-sm">
            <a href="https://pilot.bloxtr8.com" target="_blank" rel="noopener noreferrer">
              {blockchain.emailSignup.button}
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
