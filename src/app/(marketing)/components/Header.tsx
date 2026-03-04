"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigation } from "@/content/copy";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
    <header className="sticky top-0 z-[100] border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center relative px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 relative z-[101] min-h-[44px] min-w-[44px] flex items-center justify-center">
          <span className="font-mono text-sm sm:text-base tracking-widest uppercase font-medium">{navigation.brand}</span>
        </Link>
        
        {/* Desktop Navigation - Absolutely Centered */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm text-muted-foreground font-mono font-medium absolute left-1/2 -translate-x-1/2 z-[101]">
          {isHomePage ? (
            <>
              <Link href="/pricing" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center">{navigation.links.pricing}</Link>
              <Link 
                href="/blockchain" 
                className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center"
              >
                {navigation.links.blockchain}
                <span className="ml-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-border bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 bg-clip-text text-transparent leading-none" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(to right, #60a5fa, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text" }}>SOON</span>
              </Link>
            </>
          ) : (
            <>
              <Link href="/pricing" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center">{navigation.links.pricing}</Link>
              <Link 
                href="/blockchain" 
                className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center"
              >
                {navigation.links.blockchain}
                <span className="ml-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-border bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 bg-clip-text text-transparent leading-none" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(to right, #60a5fa, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text" }}>SOON</span>
              </Link>
            </>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 relative z-[101] ml-auto">
          <Button asChild variant="outline" className="rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono min-h-[44px]">
            <Link href="/contact">{navigation.cta}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-[101] p-2.5 text-muted-foreground hover:text-foreground active:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

    </header>

      {/* Mobile Navigation - outside header to avoid sticky context issues */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-[99] bg-background overflow-y-auto">
          <nav className="px-4 sm:px-6 pt-6 pb-8 space-y-1">
            <Link
              href="/pricing"
              className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-muted/50 active:bg-muted/70 min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navigation.links.pricing}
            </Link>
            <Link
              href="/blockchain"
              className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-muted/50 active:bg-muted/70 min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navigation.links.blockchain}
            </Link>
            <div className="pt-4 pb-2">
              <Button asChild variant="outline" className="w-full rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono min-h-[48px] text-base">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>{navigation.cta}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}