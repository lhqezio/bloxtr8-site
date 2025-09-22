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
    <div className="bg-background/50 rounded-2xl p-6 border border-border max-w-4xl mx-auto shadow-light">
      {/* Discord Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
          <MessageSquare className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="text-foreground font-semibold">#trade-channel</h3>
          <p className="text-muted-foreground text-sm">Discord slash commands</p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <Card 
              className={`p-4 shadow-light ${msg.isCommand ? 'bg-card/50 border-border' : 'bg-card/50 border-border'}`}
              style={msg.isCommand ? { borderLeft: '6px solid #5865F2' } : {}}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm">
                  {msg.user === "Bloxtr8 Bot" ? "🤖" : msg.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-foreground font-medium text-sm">{msg.user}</span>
                    <span className="text-muted-foreground text-xs">{msg.timestamp}</span>
                    {msg.isCommand && (
                      <div className="px-2 py-1 bg-[#5865F2] text-white text-xs rounded font-medium">
                        SLASH COMMAND
                      </div>
                    )}
                  </div>
                  <p className={`text-sm ${
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
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>Bloxtr8 Bot active</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            <span>Type /escrow for commands</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordCommandDemo;
