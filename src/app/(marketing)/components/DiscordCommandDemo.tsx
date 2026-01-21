"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MessageSquare, Bot, ArrowRight } from "lucide-react";

const DiscordCommandDemo = () => {
  const messages = [
    {
      user: "robloxdev123",
      avatar: "🎮",
      message: "/escrow create",
      isCommand: true,
      timestamp: "2:34 PM"
    },
    {
      user: "Bloxtr8 Bot",
      avatar: "🤖",
      message: "Creating secure escrow... Please provide trade details:",
      isCommand: false,
      timestamp: "2:34 PM"
    },
    {
      user: "robloxdev123", 
      avatar: "🎮",
      message: "Selling: Adopt Me Mega Neon Dragon\nBuyer: @megadealer\nAmount: $45,000",
      isCommand: false,
      timestamp: "2:35 PM"
    },
    {
      user: "Bloxtr8 Bot",
      avatar: "🤖", 
      message: "✅ Escrow created! Contract sent to both parties.\n🔒 Funds secured in escrow wallet.\n📋 Verification in progress...",
      isCommand: false,
      timestamp: "2:35 PM"
    }
  ];

  return (
    <div className="bg-background/50 rounded-2xl p-4 md:p-6 border border-border w-full max-w-4xl mx-auto shadow-light">
      {/* Discord Header */}
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-border">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
          <MessageSquare className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-foreground font-semibold text-sm md:text-base truncate">#trade-channel</h3>
          <p className="text-muted-foreground text-xs md:text-sm">Discord slash commands</p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 md:space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <Card 
              className={`p-3 md:p-4 shadow-light ${msg.isCommand ? 'bg-card/50 border-border' : 'bg-card/50 border-border'}`}
              style={msg.isCommand ? { borderLeft: '4px solid #5865F2' } : {}}
            >
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs md:text-sm flex-shrink-0">
                  {msg.user === "Bloxtr8 Bot" ? "🤖" : msg.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1">
                    <span className="text-foreground font-medium text-xs md:text-sm">{msg.user}</span>
                    <span className="text-muted-foreground text-xs">{msg.timestamp}</span>
                    {msg.isCommand && (
                      <div className="px-1.5 md:px-2 py-0.5 md:py-1 bg-[#5865F2] text-white text-[10px] md:text-xs rounded font-medium whitespace-nowrap">
                        SLASH COMMAND
                      </div>
                    )}
                  </div>
                  <p className={`text-xs md:text-sm whitespace-pre-wrap break-words ${
                    msg.isCommand ? 'text-foreground font-mono font-medium' : 'text-muted-foreground'
                  }`}>
                    {msg.message}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Bot className="h-3.5 w-3.5 md:h-4 md:w-4 text-indigo-600 dark:text-indigo-400" />
            <span>Bloxtr8 Bot active</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span>Type /escrow for commands</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordCommandDemo;
