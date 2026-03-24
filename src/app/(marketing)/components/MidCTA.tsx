"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export default function MidCTA() {
  return (
    <section className="py-10 sm:py-14">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="container-narrow px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
      >
        <p className="text-base sm:text-lg font-mono-bold text-center sm:text-left">
          Done with trusting?
        </p>
        <Button asChild size="lg">
          <a
            href="https://pilot.bloxtr8.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("cta_click", {
                event_category: "engagement",
                event_label: "homepage_cta_mid",
                cta_text: "Start Trading",
                cta_location: "homepage_mid",
              });
            }}
          >
            <span className="text-nowrap">Start Trading</span>
            <ChevronRight className="opacity-50" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
