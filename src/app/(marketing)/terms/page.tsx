"use client";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import { terms } from "@/content/copy";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertTriangle } from "lucide-react";

export default function TermsPage() {
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
              {terms.backToHome}
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
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono-bold mb-4 md:mb-6">
                Terms of <span className="underline decoration-blue-500 decoration-[3px]">Service</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {terms.lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 md:py-16 lg:py-24 section-bg-subtle border-t border-border">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
              {/* Acceptance of Terms */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{terms.sections.acceptance.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{terms.sections.acceptance.content}</p>
                </div>
              </motion.div>

              {/* Description of Service */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{terms.sections.service.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{terms.sections.service.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {terms.sections.service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* User Responsibilities */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <Scale className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  <h2 className="text-2xl md:text-3xl font-mono-bold">{terms.sections.responsibilities.title}</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{terms.sections.responsibilities.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {terms.sections.responsibilities.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Prohibited Activities */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  <h2 className="text-2xl md:text-3xl font-mono-bold">{terms.sections.prohibited.title}</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{terms.sections.prohibited.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {terms.sections.prohibited.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Fees and Payment */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{terms.sections.fees.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{terms.sections.fees.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {terms.sections.fees.structure.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{terms.sections.liability.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{terms.sections.liability.content}</p>
                </div>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{terms.sections.termination.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{terms.sections.termination.content}</p>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="border-t border-border pt-8 md:pt-12"
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{terms.sections.contact.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {terms.sections.contact.intro}
                </p>
                <a
                  href={`mailto:${terms.sections.contact.email}`}
                  className="inline-flex items-center gap-2 text-foreground hover:text-blue-500 transition-colors font-mono"
                >
                  {terms.sections.contact.email}
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