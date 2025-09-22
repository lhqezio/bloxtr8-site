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
    <div className="bg-background/50 rounded-2xl p-6 border border-border max-w-4xl mx-auto shadow-light">
      {/* Discord Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        <div>
          <h3 className="text-foreground font-semibold">#game-listings</h3>
          <p className="text-muted-foreground text-sm">Protected by Bloxtr8</p>
        </div>
      </div>

      {/* Game Listings */}
      <div className="space-y-4">
        {gameListings.map((listing, index) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-card/50 border-border p-4 hover:bg-card/70 transition-colors shadow-light">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🎮</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">{listing.game}</h4>
                    <p className="text-muted-foreground text-sm">by {listing.seller}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-600 dark:text-green-400 font-bold text-lg">{listing.price}</p>
                  <p className="text-muted-foreground text-sm">{listing.timeLeft} left</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">{listing.escrow}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{listing.buyers} interested</span>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Trade
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span>All trades protected by Bloxtr8 escrow</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Auto-refresh every 30s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameListingsDemo;
