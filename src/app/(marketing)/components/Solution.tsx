"use client";
import { motion } from "framer-motion";
import TerminalDemo from "./TerminalDemo";
import SecurityVerificationDemo from "./SecurityVerificationDemo";

const Solution = () => {

  return (
    <section id="solution" className="py-16 bg-white/[0.02]">
      <div className="container-narrow">
        {/* Product Flow Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl font-mono-bold mb-4">
            How we <span className="underline decoration-green-500 decoration-[6px]">solve</span> it
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Secure escrow built for Discord communities. We hold funds until trades are complete.
          </p>
        </motion.div>

        {/* Terminal Demo with Integrated Steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-mono-bold text-left mb-6">
            Our <span className="underline decoration-blue-500 decoration-[4px]">6-step</span> process
          </h3>
          <TerminalDemo />
        </motion.div>

        {/* Security Verification Demo */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-left mb-8">
            <h3 className="text-2xl font-mono-bold mb-4">
              Real-time <span className="underline decoration-purple-500 decoration-[4px]">security</span> checks
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Before any trade begins, our system automatically verifies both parties. 
              This happens behind the scenes while you&apos;re setting up your deal in Discord.
            </p>
          </div>
          <SecurityVerificationDemo />
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
