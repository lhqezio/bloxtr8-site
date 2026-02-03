"use client";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import { pricing } from "@/content/copy";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Zap, Shield, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back to Home Link */}
        {/* <section className="py-8 border-b border-border">
          <div className="container-narrow">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </section> */}

        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container-narrow px-4 sm:px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
            >
              {/* Free Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-500/10 border border-green-500/20 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-mono-bold text-green-400 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>100% FREE to Start</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono-bold mb-3 sm:mb-4 md:mb-6 leading-[1.1] sm:leading-tight px-2">
                <span className="underline decoration-green-500 decoration-[2px] sm:decoration-[3px]">Free escrow</span>. <span className="underline decoration-blue-500 decoration-[2px] sm:decoration-[3px]">Fair fees</span>.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-3 sm:mb-4 md:mb-6 font-medium px-2">
                {pricing.hero.subtitle}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
                {pricing.hero.description}
              </p>
            </motion.div>

            {/* Main Pricing Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-card border-2 border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-16 shadow-strong relative overflow-hidden">
                
                {/* Fee Display */}
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                    className="mb-3 sm:mb-4 md:mb-6"
                  >
                    <div className="inline-flex items-baseline gap-1 sm:gap-2">
                      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-mono-bold text-foreground">
                        {pricing.feeBreakdown.total}
                      </span>
                    </div>
                  </motion.div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-1.5 sm:mb-2 font-medium px-2">
                    Transaction fee per successful trade
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground px-2">
                    {pricing.feeBreakdown.note}
                  </p>
                </div>

                {/* Split Visualization */}
                <div className="mb-6 sm:mb-8 md:mb-12">
                  <p className="text-center text-muted-foreground mb-3 sm:mb-4 md:mb-6 font-mono-medium text-xs sm:text-sm md:text-base px-2">
                    {pricing.feeBreakdown.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-background/50 border-2 border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:border-blue-500/30 transition-all"
                    >
                      <div className="text-3xl sm:text-4xl md:text-5xl font-mono-bold text-blue-400 mb-1.5 sm:mb-2 md:mb-3">
                        {pricing.feeBreakdown.buyer}
                      </div>
                      <div className="text-sm sm:text-base md:text-lg font-mono-medium text-foreground mb-0.5 sm:mb-1">Buyer</div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Pays when trade completes</div>
                    </motion.div>
                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="bg-background/50 border-2 border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:border-purple-500/30 transition-all"
                    >
                      <div className="text-3xl sm:text-4xl md:text-5xl font-mono-bold text-purple-400 mb-1.5 sm:mb-2 md:mb-3">
                        {pricing.feeBreakdown.seller}
                      </div>
                      <div className="text-sm sm:text-base md:text-lg font-mono-medium text-foreground mb-0.5 sm:mb-1">Seller</div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Pays when trade completes</div>
                    </motion.div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="border-t-2 border-border pt-6 sm:pt-8 md:pt-12">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-mono-bold mb-4 sm:mb-6 md:mb-8 text-center">
                    Everything You Get
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                    {pricing.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="flex items-start gap-2 sm:gap-3 bg-background/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border/50 hover:border-border transition-all"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                        </div>
                        <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 section-bg-subtle border-t border-border">
          <div className="container-narrow px-4 sm:px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-3 sm:mb-4">
                Why Choose <span className="underline decoration-green-500 decoration-[2px] sm:decoration-[3px]">Bloxtr8</span>?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
                Transparent pricing with no surprises. Pay only when you succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Secure & Protected", desc: "Bank-grade security for every transaction" },
                { icon: Clock, title: "Instant Setup", desc: "Start protecting trades in seconds" },
                { icon: TrendingUp, title: "Fair Pricing", desc: "No hidden fees, ever" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-3 sm:p-4 md:p-6"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-background/50 border border-border rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-400" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-mono-bold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 section-bg-subtle border-t border-border">
          <div className="container-narrow px-4 sm:px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 sm:mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-3 sm:mb-4">
                Frequently Asked <span className="underline decoration-blue-500 decoration-[2px] sm:decoration-[3px]">Questions</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-2">
                Everything you need to know about our pricing
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3 md:space-y-4">
              {pricing.faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-card border-2 border-border rounded-lg sm:rounded-xl overflow-hidden hover:border-blue-500/30 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between text-left hover:bg-background/50 active:bg-background/70 transition-colors group min-h-[48px]"
                  >
                    <span className="font-mono-medium text-foreground text-sm sm:text-base md:text-lg group-hover:text-blue-400 transition-colors pr-3 sm:pr-4 text-left">
                      {item.question}
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground group-hover:text-blue-400 transition-colors flex-shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-5"
                    >
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 border-t border-border">
          <div className="container-narrow text-center px-4 sm:px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-3 sm:mb-4 md:mb-6">
                Ready to protect your trades?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 max-w-2xl mx-auto">
                Get started today. No setup fees, no commitments.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-10 max-w-xl mx-auto">
                Just secure escrow when you need it. Only pay when trades succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center">
                <Button asChild size="lg" className="rounded-2xl px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg h-12 md:h-14 min-h-[48px] w-full sm:w-auto">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg h-12 md:h-14 min-h-[48px] w-full sm:w-auto">
                  <Link href="/features">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main> 
      <Footer2 />
    </div>
  );
}