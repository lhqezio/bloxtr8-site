"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { trackEvent } from "@/components/analytics";

const CTA = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 border-t border-border">
      <div className="container-narrow px-4 sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-3 sm:mb-4 md:mb-6">
            Ready to <span className="underline decoration-green-500 decoration-[2px] sm:decoration-[3px]">protect</span> your trades?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience secure Roblox trading with Bloxtr8.
          </p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="rounded-2xl px-6 sm:px-8 min-h-[48px] text-base sm:text-lg w-full sm:w-auto"
            >
              <Link 
                href="/contact"
                onClick={() => {
                  trackEvent("cta_click", {
                    event_category: "engagement",
                    event_label: "homepage_cta",
                    cta_text: "Contact Us",
                    cta_location: "homepage_bottom"
                  });
                }}
              >
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
