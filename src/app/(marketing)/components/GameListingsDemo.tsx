"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock } from "lucide-react";

const GameListingsDemo = () => {
  const gameListings = [
    {
      id: 1,
      game: "Adopt Me Mega Neon",
      seller: "@robloxdev123",
      price: "$45,000",
      escrow: "Bloxtr8 Protected",
      buyers: 3,
      timeLeft: "2h 15m",
      verified: true
    },
    {
      id: 2,
      game: "Pet Simulator X Titan",
      seller: "@megadealer",
      price: "$28,500",
      escrow: "Bloxtr8 Protected", 
      buyers: 7,
      timeLeft: "5h 42m",
      verified: true
    },
    {
      id: 3,
      game: "Brookhaven Mansion",
      seller: "@luxuryhomes",
      price: "$12,000",
      escrow: "Bloxtr8 Protected",
      buyers: 2,
      timeLeft: "1d 3h",
      verified: true
    }
  ];

  return (
    <div className="bg-background/50 rounded-2xl p-4 md:p-6 border border-border w-full max-w-4xl mx-auto shadow-light">
      {/* Discord Header */}
      <div className="flex items-center gap-3 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-border">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        <div>
          <h3 className="text-foreground font-semibold text-sm md:text-base">#game-listings</h3>
          <p className="text-muted-foreground text-xs md:text-sm">Protected by Bloxtr8</p>
        </div>
      </div>

      {/* Game Listings */}
      <div className="space-y-3 md:space-y-4">
        {gameListings.map((listing, index) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-card/50 border-border p-3 md:p-4 hover:bg-card/70 transition-colors shadow-light">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2 md:gap-0">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs md:text-sm">🎮</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-foreground font-semibold text-sm md:text-base truncate">{listing.game}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">by {listing.seller}</p>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-green-600 dark:text-green-400 font-bold text-base md:text-lg">{listing.price}</p>
                  <p className="text-muted-foreground text-xs md:text-sm">{listing.timeLeft} left</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  <div className="flex items-center gap-1.5 md:gap-2 text-green-600 dark:text-green-400">
                    <Shield className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    <span className="text-xs md:text-sm font-medium">{listing.escrow}</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 text-blue-600 dark:text-blue-400">
                    <Users className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    <span className="text-xs md:text-sm">{listing.buyers} interested</span>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto min-h-[44px]">
                  Start Trade
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-600 dark:text-green-400" />
            <span>All trades protected by Bloxtr8 escrow</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span>Auto-refresh every 30s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameListingsDemo;
