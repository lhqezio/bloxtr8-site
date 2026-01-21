import Header from "../components/Header";
import Footer from "../components/Footer";
import { about } from "@/content/copy";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Zap, Users, Target } from "lucide-react";

export default function AboutPage() {
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
              {about.backToHome}
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-narrow">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono-bold mb-4 md:mb-6">
                About <span className="underline decoration-green-500 decoration-[3px]">Bloxtr8</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {about.mission}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 md:py-16 lg:py-24 section-bg-subtle border-t border-border">
          <div className="container-narrow">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-mono-bold mb-4 md:mb-6">
                Our <span className="underline decoration-blue-500 decoration-[3px]">story</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {about.story}
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                </div>
                <h3 className="text-lg md:text-xl font-mono-bold mb-2">{about.values.security.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{about.values.security.description}</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                </div>
                <h3 className="text-lg md:text-xl font-mono-bold mb-2">{about.values.speed.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{about.values.speed.description}</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                </div>
                <h3 className="text-lg md:text-xl font-mono-bold mb-2">{about.values.community.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{about.values.community.description}</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                </div>
                <h3 className="text-lg md:text-xl font-mono-bold mb-2">{about.values.transparency.title}</h3>
                <p className="text-muted-foreground">{about.values.transparency.description}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-narrow">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-mono-bold mb-4 md:mb-6">
                Meet the <span className="underline decoration-purple-500 decoration-[3px]">team</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12">
                {about.team.description}
              </p>

              {/* Team Grid - Placeholder for now */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                {about.team.members.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-mono-bold text-foreground">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-mono-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}