"use client";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import { privacy } from "@/content/copy";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock } from "lucide-react";

export default function PrivacyPage() {
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
              {privacy.backToHome}
            </Link>
          </div>
        </section>

        {/* Header Section */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-narrow">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono-bold mb-4 md:mb-6">
                Privacy <span className="underline decoration-green-500 decoration-[3px]">Policy</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {privacy.lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 md:py-16 lg:py-24 section-bg-subtle border-t border-border">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
              {/* Information We Collect */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  <h2 className="text-2xl md:text-3xl font-mono-bold">{privacy.sections.collect.title}</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{privacy.sections.collect.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {privacy.sections.collect.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* How We Use Information */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{privacy.sections.use.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{privacy.sections.use.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {privacy.sections.use.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Information Sharing */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{privacy.sections.sharing.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{privacy.sections.sharing.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {privacy.sections.sharing.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Data Security */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <Lock className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  <h2 className="text-2xl md:text-3xl font-mono-bold">{privacy.sections.security.title}</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{privacy.sections.security.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {privacy.sections.security.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{privacy.sections.rights.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{privacy.sections.rights.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {privacy.sections.rights.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Contact Us */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="border-t border-border pt-8 md:pt-12"
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{privacy.sections.contact.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {privacy.sections.contact.intro}
                </p>
                <a
                  href={`mailto:${privacy.sections.contact.email}`}
                  className="inline-flex items-center gap-2 text-foreground hover:text-green-500 transition-colors font-mono"
                >
                  {privacy.sections.contact.email}
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer2 />
    </div>
  );
}