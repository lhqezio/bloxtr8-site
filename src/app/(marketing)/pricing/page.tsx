"use client";
import { pricing } from "@/content/copy";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/components/analytics";

const pilotUrl = "https://pilot.bloxtr8.com";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6 },
};

const studioFeatures = [
  "TrendSpot market analytics",
  "Track 8,000+ games",
  "CreatorX portfolio tools",
  "Discord community tools",
  "Real-time stat monitoring",
];

export default function PricingPage() {

  return (
    <>
      {/* Pricing Cards */}
      <section className="relative pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-16 sm:pb-20 md:pb-28 lg:pb-36">
        <div className="grid-bg absolute inset-0 -z-20" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Studio Card — FREE */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col"
            >
              <h3 className="text-lg sm:text-xl font-mono-bold mb-6">Studio</h3>

              <div className="mb-6">
                <span className="text-6xl sm:text-7xl font-mono-bold text-foreground leading-none">
                  Free
                </span>
              </div>

              <Button asChild size="lg" variant="outline" className="w-full mb-6">
                <a
                  href={pilotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("cta_click", {
                      event_category: "engagement",
                      event_label: "pricing_studio_cta",
                      cta_text: "Get Started",
                      cta_location: "pricing_studio_card",
                    });
                  }}
                >
                  <span className="text-nowrap">Get Started</span>
                  <ChevronRight className="opacity-50" />
                </a>
              </Button>

              <ul className="space-y-2.5 sm:space-y-3 flex-1 mb-6">
                {studioFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm sm:text-base text-muted-foreground">
                Everything you need to research and showcase.
              </p>
            </motion.div>

            {/* Trading Card — 6% */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/[0.03] dark:bg-white/[0.03] border-2 border-green-500/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col"
            >
              <h3 className="text-lg sm:text-xl font-mono-bold mb-6">Trading</h3>

              <div className="mb-6">
                <span className="text-6xl sm:text-7xl font-mono-bold text-foreground leading-none">
                  {pricing.feeBreakdown.total}
                </span>
              </div>

              <Button asChild size="lg" className="w-full mb-6">
                <a
                  href={pilotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("cta_click", {
                      event_category: "engagement",
                      event_label: "pricing_trading_cta",
                      cta_text: "Start Trading",
                      cta_location: "pricing_trading_card",
                    });
                  }}
                >
                  <span className="text-nowrap">Start Trading</span>
                  <ChevronRight className="opacity-50" />
                </a>
              </Button>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="border border-black/[0.08] dark:border-white/[0.08] rounded-lg p-3 sm:p-4 bg-black/[0.02] dark:bg-white/[0.02] text-center">
                  <div className="text-xl sm:text-2xl font-mono-bold text-foreground">
                    {pricing.feeBreakdown.buyer}
                  </div>
                  <div className="text-xs sm:text-sm font-mono-medium text-muted-foreground mt-0.5">
                    Buyer fee
                  </div>
                </div>
                <div className="border border-black/[0.08] dark:border-white/[0.08] rounded-lg p-3 sm:p-4 bg-black/[0.02] dark:bg-white/[0.02] text-center">
                  <div className="text-xl sm:text-2xl font-mono-bold text-foreground">
                    {pricing.feeBreakdown.seller}
                  </div>
                  <div className="text-xs sm:text-sm font-mono-medium text-muted-foreground mt-0.5">
                    Seller fee
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 flex-1 mb-6">
                {pricing.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm sm:text-base text-muted-foreground">
                Per successful trade. {pricing.feeBreakdown.description}.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-4 sm:mb-6">
              Ready to trade safely?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-lg mx-auto">
              Join the platform built for secure Roblox game trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a
                  href={pilotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("cta_click", {
                      event_category: "engagement",
                      event_label: "pricing_cta_bottom",
                      cta_text: "Start Trading",
                      cta_location: "pricing_bottom",
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
                      event_label: "pricing_cta_contact",
                      cta_text: "Contact Us",
                      cta_location: "pricing_bottom",
                    });
                  }}
                >
                  Contact Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
