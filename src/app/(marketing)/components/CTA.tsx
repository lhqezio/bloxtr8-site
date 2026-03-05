"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { trackEvent } from "@/components/analytics";

const pilotUrl = "https://pilot.bloxtr8.com";

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 border-t border-border">
      <div className="container-narrow px-4 sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-4 sm:mb-6">
            Ready to sell your{" "}
            <span className="text-green-500">game</span>?
            <br />
            List it on Bloxtr8 today.
          </h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href={pilotUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("cta_click", {
                    event_category: "engagement",
                    event_label: "homepage_cta_bottom",
                    cta_text: "Start Trading",
                    cta_location: "homepage_bottom",
                  });
                }}
              >
                <span className="text-nowrap">Start Trading</span>
                <ChevronRight className="opacity-50" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <a
                href="mailto:support@bloxtr8.com"
                onClick={() => {
                  trackEvent("cta_click", {
                    event_category: "engagement",
                    event_label: "homepage_cta_contact",
                    cta_text: "Contact Us",
                    cta_location: "homepage_bottom",
                  });
                }}
              >
                Contact Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
