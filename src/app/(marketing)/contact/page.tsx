"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
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
        <section className="py-12 md:py-16 lg:py-24 border-b border-border">
          <div className="container-narrow">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono-bold mb-4 md:mb-6 leading-tight">
                Get Early Access
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Join the waitlist to be among the first to experience secure Roblox trading.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                We&apos;re building something special. Be the first to know when we launch.
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
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
                  className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-background/50 border border-border flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <p className="text-sm font-mono-medium text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}