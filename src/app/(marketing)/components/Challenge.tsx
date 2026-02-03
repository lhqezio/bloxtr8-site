"use client";
import { motion } from "framer-motion";
import DiscordCommandDemo from "./DiscordCommandDemo";
import InteractiveMarketChart from "./InteractiveMarketChart";

const Challenge = () => {

  return (
    <section id="challenge" className="py-8 sm:py-12 md:py-16 lg:py-24 border-t border-border">
      <div className="container-narrow px-4 sm:px-6">
        {/* Problem Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4 md:mb-6 text-left">
            The <span className="underline decoration-red-500 decoration-[2px] sm:decoration-[3px]">Challenge</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl text-left">
            High-value Roblox trades happen in Discord DMs. Deals are made on trust, with no formal protection. 
            When disputes arise, there&apos;s no recourse and traders can lose thousands.
          </p>
        </motion.div>

        {/* Discord Demo */}
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <DiscordCommandDemo />
        </div>

        {/* Interactive Market Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 sm:mb-8 md:mb-12 lg:mb-16"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-mono-bold text-left mb-3 sm:mb-4 md:mb-6">
            The <span className="underline decoration-blue-500 decoration-[1.5px] sm:decoration-[2px]">scale</span> of the problem
          </h3>
          <InteractiveMarketChart />
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;
