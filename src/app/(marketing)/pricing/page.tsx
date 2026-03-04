"use client";
import { pricing } from "@/content/copy";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { trackEvent } from "@/components/analytics";

const pilotUrl = "https://pilot.bloxtr8.com";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6 },
};

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-12 sm:pb-16 md:pb-20">
        <div className="grid-bg absolute inset-0 -z-20" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full font-mono-bold text-green-600 dark:text-green-400 mb-6 text-[10px] sm:text-xs uppercase tracking-wider"
          >
            <span>100% Free to Start</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl leading-[1.1] font-medium sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl xl:leading-[1.03]"
          >
            Simple, transparent pricing.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mt-5 text-balance text-base sm:text-lg lg:text-xl max-w-xl mx-auto"
          >
            No monthly fees. No setup costs. Just a small fee when your trade completes successfully.
          </motion.p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="pb-16 sm:pb-20 md:pb-28 lg:pb-36">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fee Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 text-center"
          >
            <span className="text-6xl sm:text-7xl md:text-8xl font-mono-bold text-foreground leading-none">
              {pricing.feeBreakdown.total}
            </span>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-3 font-medium">
              Transaction fee per successful trade
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {pricing.feeBreakdown.note}
            </p>

            <div className="mt-6 sm:mt-8">
              <p className="text-muted-foreground mb-3 sm:mb-4 font-mono-medium text-xs sm:text-sm">
                {pricing.feeBreakdown.description}
              </p>
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                <div className="border border-black/[0.08] dark:border-white/[0.08] rounded-lg p-3 sm:p-4 bg-black/[0.02] dark:bg-white/[0.02]">
                  <div className="text-xl sm:text-2xl md:text-3xl font-mono-bold text-foreground">
                    {pricing.feeBreakdown.buyer}
                  </div>
                  <div className="text-xs sm:text-sm font-mono-medium text-muted-foreground mt-0.5">Buyer</div>
                </div>
                <div className="border border-black/[0.08] dark:border-white/[0.08] rounded-lg p-3 sm:p-4 bg-black/[0.02] dark:bg-white/[0.02]">
                  <div className="text-xl sm:text-2xl md:text-3xl font-mono-bold text-foreground">
                    {pricing.feeBreakdown.seller}
                  </div>
                  <div className="text-xs sm:text-sm font-mono-medium text-muted-foreground mt-0.5">Seller</div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a
                  href={pilotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("cta_click", {
                      event_category: "engagement",
                      event_label: "pricing_card_cta",
                      cta_text: "Start Trading",
                      cta_location: "pricing_card",
                    });
                  }}
                >
                  <span className="text-nowrap">Start Trading</span>
                  <ChevronRight className="opacity-50" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* What's included */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 sm:mt-14"
          >
            <h3 className="text-lg sm:text-xl font-mono-bold mb-4 sm:mb-5 text-center">
              What&apos;s included
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 max-w-md mx-auto">
              {pricing.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="text-center mb-8 sm:mb-10 md:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-2 sm:space-y-3">
            {pricing.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between text-left group min-h-[48px]"
                >
                  <span className="font-medium text-foreground text-sm sm:text-base pr-4">
                    {item.question}
                  </span>
                  <span className="text-lg sm:text-xl text-muted-foreground flex-shrink-0">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pb-4 sm:pb-5"
                  >
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
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
                <Link
                  href="/contact"
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
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
