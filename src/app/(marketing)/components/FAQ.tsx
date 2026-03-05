"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homeFaq } from "@/content/copy";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-2 sm:space-y-3">
          {homeFaq.map((item, index) => (
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
              <AnimatePresence>
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
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
