"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import  Footer2  from "../components/Footer2";
import Challenge from "../components/Challenge";
import Link from "next/link";
import Solution from "../components/Solution";
import CTA from "../components/CTA";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container-narrow px-4 sm:px-6">
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full font-mono-medium text-blue-400 mb-5 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Built for modern Roblox studios</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono-bold mb-3 sm:mb-4 md:mb-6 leading-[1.1]">
                Everything you need to <span className="underline decoration-green-500 decoration-[2px] sm:decoration-[3px]">sell safely</span>.
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
                From Discord-first workflows to enterprise-grade security, Bloxtr8 helps you run trusted Roblox trades with less friction.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <Button asChild size="lg" className="rounded-2xl px-6 sm:px-8 h-12 min-h-[48px] w-full sm:w-auto">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-6 sm:px-8 h-12 min-h-[48px] w-full sm:w-auto"
                >
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Challenge />
        <Solution />

        <CTA/>
      </main>
      <Footer2/>
    </div>
  );
}


