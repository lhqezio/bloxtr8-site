"use client";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 border-border">
        <div className="container-narrow px-4 sm:px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono-bold mb-3 sm:mb-4 md:mb-6 leading-[1.1] sm:leading-tight">
              Get Early Access
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2">
              Join the waitlist to be among the first to experience secure Roblox trading.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              We&apos;re building something special. Be the first to know when we launch.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Shield, text: "Secure & Protected" },
              { icon: Mail, text: "Early Access Priority" },
              { icon: MessageSquare, text: "Direct Updates" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-border bg-card/30 backdrop-blur-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/50 border border-border flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </div>
                <p className="text-xs sm:text-sm font-mono-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}
