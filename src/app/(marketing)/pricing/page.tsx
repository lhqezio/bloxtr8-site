"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <section className="py-8 border-b border-border">
          <div className="container-wide">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 -z-10" />
          <div className="container-narrow">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              {/* Free Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 md:px-6 md:py-3 rounded-full font-mono-bold text-green-400 mb-6 md:mb-8 backdrop-blur-sm text-sm md:text-base lg:text-lg"
              >
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
                <span>100% FREE to Start</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono-bold mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {pricing.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 md:mb-6 font-medium">
                {pricing.hero.subtitle}
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
              <div className="bg-card/80 backdrop-blur-md border-2 border-border rounded-3xl p-6 md:p-8 lg:p-16 shadow-strong relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
                
                {/* Fee Display */}
                <div className="text-center mb-8 md:mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                    className="mb-4 md:mb-6"
                  >
                    <div className="inline-flex items-baseline gap-2">
                      <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-mono-bold text-foreground">
                        {pricing.feeBreakdown.total}
                      </span>
                    </div>
                  </motion.div>
                  <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2 font-medium">
                    Transaction fee per successful trade
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {pricing.feeBreakdown.note}
                  </p>
                </div>

                {/* Split Visualization */}
                <div className="mb-8 md:mb-12">
                  <p className="text-center text-muted-foreground mb-4 md:mb-6 font-mono-medium text-sm md:text-base">
                    {pricing.feeBreakdown.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500/30 rounded-2xl p-6 md:p-8 text-center hover:border-blue-500/50 transition-all"
                    >
                      <div className="text-4xl md:text-5xl font-mono-bold text-blue-400 mb-2 md:mb-3">
                        {pricing.feeBreakdown.buyer}
                      </div>
                      <div className="text-base md:text-lg font-mono-medium text-foreground mb-1">Buyer</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Pays when trade completes</div>
                    </motion.div>
                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-2 border-purple-500/30 rounded-2xl p-6 md:p-8 text-center hover:border-purple-500/50 transition-all"
                    >
                      <div className="text-4xl md:text-5xl font-mono-bold text-purple-400 mb-2 md:mb-3">
                        {pricing.feeBreakdown.seller}
                      </div>
                      <div className="text-base md:text-lg font-mono-medium text-foreground mb-1">Seller</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Pays when trade completes</div>
                    </motion.div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="border-t-2 border-border pt-8 md:pt-12">
                  <h3 className="text-xl md:text-2xl font-mono-bold mb-6 md:mb-8 text-center">
                    Everything You Get
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {pricing.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="flex items-start gap-3 bg-background/50 rounded-xl p-4 border border-border/50 hover:border-border transition-all"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-foreground font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-12 md:py-16 lg:py-24 border-t border-border">
          <div className="container-wide">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-4">
                Why Choose <span className="underline decoration-green-500 decoration-[3px]">Bloxtr8</span>?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Transparent pricing with no surprises. Pay only when you succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
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
                  className="text-center p-4 md:p-6"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-mono-bold mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-24 border-t border-border bg-background/30">
          <div className="container-narrow">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-4">
                Frequently Asked <span className="underline decoration-blue-500 decoration-[3px]">Questions</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                Everything you need to know about our pricing
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
              {pricing.faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-card border-2 border-border rounded-xl overflow-hidden hover:border-blue-500/30 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-4 py-4 md:px-6 md:py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors group min-h-[44px]"
                  >
                    <span className="font-mono-medium text-foreground text-base md:text-lg group-hover:text-blue-400 transition-colors pr-4">
                      {item.question}
                    </span>
                    <span className="text-xl md:text-2xl text-muted-foreground group-hover:text-blue-400 transition-colors flex-shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 md:px-6 md:pb-5"
                    >
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
        <section className="py-12 md:py-16 lg:py-24 border-t border-border">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-4 md:mb-6">
                Ready to protect your trades?
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 md:mb-4 max-w-2xl mx-auto">
                Get started today. No setup fees, no commitments.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10 max-w-xl mx-auto">
                Just secure escrow when you need it. Only pay when trades succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button asChild size="lg" className="rounded-2xl px-8 md:px-10 text-base md:text-lg h-12 md:h-14 min-h-[44px]">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl px-8 md:px-10 text-base md:text-lg h-12 md:h-14 min-h-[44px]">
                  <Link href="/#features">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}