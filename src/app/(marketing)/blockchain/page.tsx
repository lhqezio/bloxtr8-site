"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blockchain } from "@/content/copy";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Zap, Lock, Globe, DollarSign, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Animated gradient background component
const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 });
  
  // Deterministic seed function to avoid hydration mismatch
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const seed = i * 0.618033988749; // Golden ratio for better distribution
        const left = seededRandom(seed) * 100;
        const top = seededRandom(seed + 1) * 100;
        const xOffset = seededRandom(seed + 2) * 20 - 10;
        const duration = 3 + seededRandom(seed + 3) * 2;
        const delay = seededRandom(seed + 4) * 2;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, xOffset, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// Interactive card component with mouse tracking
const InteractiveCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default function BlockchainPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const iconMap: Record<string, React.ReactNode> = {
    "⚡": <Zap className="w-8 h-8" />,
    "🔒": <Lock className="w-8 h-8" />,
    "🌐": <Globe className="w-8 h-8" />,
    "💰": <DollarSign className="w-8 h-8" />,
    "📜": <FileText className="w-8 h-8" />,
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatedGradient />
      <FloatingParticles />
      
      <Header />
      <main className="flex-1 relative z-10">
        {/* Back to Home Link */}
        <section className="py-8 border-b border-border/50 relative z-20">
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
        <section className="py-12 md:py-16 lg:py-24 xl:py-32 relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center">
          <div className="container-narrow relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Coming Soon Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-4 py-2 md:px-6 md:py-2 rounded-full font-mono-medium text-xs md:text-sm mb-6 md:mb-8 backdrop-blur-sm"
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                <span className="text-blue-400">Coming Soon</span>
              </motion.div>

              {/* Main Title with Glitch Effect */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono-bold mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {blockchain.hero.title}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground mb-3 md:mb-4"
              >
                {blockchain.hero.subtitle}
              </motion.p>

              {/* Animated Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-2 md:gap-4 text-base md:text-lg lg:text-xl font-mono-medium"
              >
                {blockchain.hero.tagline.split(". ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + i * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-lg backdrop-blur-sm"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-16 lg:py-24 border-t border-border/50 relative z-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono-bold mb-4">
                What to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expect</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                {blockchain.comingSoon.message}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mt-2">
                {blockchain.comingSoon.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {blockchain.features.map((feature, index) => (
                <InteractiveCard key={index} delay={index * 0.1}>
                  <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring" }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400"
                    >
                      {iconMap[feature.icon] || <Sparkles className="w-8 h-8" />}
                    </motion.div>
                    <h3 className="text-xl font-mono-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 lg:py-24 border-t border-border/50 relative z-20">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-mono-bold mb-4">
                Why <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Blockchain</span>?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
              {blockchain.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section className="py-12 md:py-16 lg:py-24 border-t border-border/50 relative z-20">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <InteractiveCard>
                <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 lg:p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6"
                  >
                    <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                  </motion.div>
                  
                  <h2 className="text-2xl md:text-3xl font-mono-bold mb-3 md:mb-4">
                    {blockchain.emailSignup.title}
                  </h2>
                  
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="mt-6 md:mt-8">
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
                        <Input
                          type="email"
                          placeholder={blockchain.emailSignup.placeholder}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-background/50 border-border flex-1 h-12 md:h-14 min-h-[44px]"
                        />
                        <Button type="submit" className="rounded-xl h-12 md:h-14 min-h-[44px] px-6">
                          {blockchain.emailSignup.button}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8"
                    >
                      <p className="text-green-400 font-mono-medium">
                        {blockchain.emailSignup.success}
                      </p>
                    </motion.div>
                  )}
                </div>
              </InteractiveCard>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}