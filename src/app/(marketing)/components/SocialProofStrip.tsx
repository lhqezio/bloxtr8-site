"use client";

import { motion } from "framer-motion";
import { StripeLogo } from "@/components/logos/StripeLogo";
import { DiscordLogo } from "@/components/logos/DiscordLogo";
import { RobloxLogo } from "@/components/logos/RobloxLogo";
import { BaseLogo } from "@/components/logos/BaseLogo";

const logos = [
  { name: "Stripe", Icon: StripeLogo },
  { name: "Discord", Icon: DiscordLogo },
  { name: "Roblox", Icon: RobloxLogo },
  { name: "Base", Icon: BaseLogo },
];

export default function SocialProofStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-8 sm:py-12 border-t border-border"
    >
      <div className="container-narrow px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          <span className="text-sm text-muted-foreground font-mono-medium">
            Built on
          </span>
          {logos.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <Icon size={24} className="opacity-60" />
              <span className="text-sm font-mono-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
