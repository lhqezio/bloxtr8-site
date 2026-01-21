"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { cookies } from "@/content/copy";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cookie, Settings, BarChart3 } from "lucide-react";

export default function CookiesPage() {
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
              {cookies.backToHome}
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
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Cookie className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono-bold mb-4 md:mb-6">
                Cookie <span className="underline decoration-orange-500 decoration-[3px]">Policy</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {cookies.lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 md:py-16 lg:py-24 section-bg-subtle border-t border-border">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
              {/* What Are Cookies */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <Cookie className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                  <h2 className="text-2xl md:text-3xl font-mono-bold">{cookies.sections.what.title}</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{cookies.sections.what.intro}</p>
                  <p>{cookies.sections.what.explanation}</p>
                </div>
              </motion.div>

              {/* Types of Cookies */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{cookies.sections.types.title}</h2>
                <div className="space-y-4 md:space-y-6 lg:space-y-8">
                  {cookies.sections.types.categories.map((category, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-mono-bold mb-2 md:mb-3 text-foreground">{category.name}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-mono-medium text-foreground">Examples:</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                          {category.examples.map((example, exIndex) => (
                            <li key={exIndex}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* How We Use Cookies */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  <h2 className="text-2xl md:text-3xl font-mono-bold">{cookies.sections.use.title}</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{cookies.sections.use.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {cookies.sections.use.purposes.map((purpose, index) => (
                      <li key={index}>{purpose}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Managing Cookies */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <Settings className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  <h2 className="text-2xl md:text-3xl font-mono-bold">{cookies.sections.manage.title}</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{cookies.sections.manage.intro}</p>
                  <div className="space-y-4">
                    {cookies.sections.manage.methods.map((method, index) => (
                      <div key={index}>
                        <h4 className="font-mono-medium text-foreground mb-2">{method.title}:</h4>
                        <p>{method.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Third-Party Cookies */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{cookies.sections.thirdParty.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>{cookies.sections.thirdParty.intro}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {cookies.sections.thirdParty.services.map((service, index) => (
                      <li key={index}>{service}</li>
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
                <h2 className="text-2xl md:text-3xl font-mono-bold mb-4 md:mb-6">{cookies.sections.contact.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cookies.sections.contact.intro}
                </p>
                <a
                  href={`mailto:${cookies.sections.contact.email}`}
                  className="inline-flex items-center gap-2 text-foreground hover:text-orange-500 transition-colors font-mono"
                >
                  {cookies.sections.contact.email}
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}