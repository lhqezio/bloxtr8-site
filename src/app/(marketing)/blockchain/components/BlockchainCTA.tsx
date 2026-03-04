"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blockchain } from "@/content/copy";

export default function BlockchainCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={blockchain.emailSignup.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border-border flex-1 h-12 sm:h-14 min-h-[48px] text-sm sm:text-base"
                />
                <Button
                  type="submit"
                  className="rounded-xl h-12 sm:h-14 min-h-[48px] px-6 font-mono-bold uppercase tracking-wider text-xs sm:text-sm"
                >
                  {blockchain.emailSignup.button}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-5 py-2.5 rounded-xl">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <p className="text-green-400 font-mono-bold text-xs sm:text-base uppercase tracking-wide">
                  {blockchain.emailSignup.success}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
