"use client";

import { motion } from "framer-motion";
import { Terminal, Bot } from "lucide-react";
import { DiscordLogo } from "@/components/logos/DiscordLogo";
import DiscordCommandDemo from "./DiscordCommandDemo";

export default function DiscordSection() {
  return (
    <section id="discord" className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container-narrow px-4 sm:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4 md:mb-6">
            <span className="underline decoration-indigo-500 decoration-[2px] sm:decoration-[3px]">
              Discord
            </span>{" "}
            Integration
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Bloxtr8 lives in your Discord server. Start trades, manage deals,
            and get notifications without leaving the conversation.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DiscordLogo className="h-4 w-4 flex-shrink-0" />
              <span>Sign in with Discord</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Terminal className="h-4 w-4 text-indigo-500 flex-shrink-0" />
              <span>Slash commands for trading</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bot className="h-4 w-4 text-indigo-500 flex-shrink-0" />
              <span>Automated bot notifications</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DiscordCommandDemo />
        </motion.div>
      </div>
    </section>
  );
}
