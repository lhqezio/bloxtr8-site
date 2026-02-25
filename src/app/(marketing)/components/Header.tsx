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
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron font-bold text-base hover:scale-105 transition-all duration-200 cursor-pointer min-h-[44px] flex items-center"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                {navigation.links.blockchain}
              </Link>
            </>
          ) : (
            <>
              <Link href="/pricing" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center">{navigation.links.pricing}</Link>
              <Link 
                href="/blockchain" 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron font-bold text-base hover:scale-105 transition-all duration-200 cursor-pointer min-h-[44px] flex items-center"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                {navigation.links.blockchain}
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border z-[99] shadow-lg">
          <nav className="container-wide pt-4 pb-6 px-4 sm:px-6 space-y-1">
            {isHomePage ? (
              <>
                <Link
                  href="/pricing"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.pricing}
                </Link>
                <Link
                  href="/blockchain"
                  className="block text-base bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron font-bold py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 transition-all duration-200 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  {navigation.links.blockchain}
                </Link>
              </>
            ) : (
              <>
                
                <Link
                  href="/pricing"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.pricing}
                </Link>
                <Link
                  href="/blockchain"
                  className="block text-base bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron font-bold py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 transition-all duration-200 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  {navigation.links.blockchain}
                </Link>
              </>
            )}
            <div className="pt-4 pb-2">
              <Button asChild variant="outline" className="w-full rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono min-h-[48px] text-base">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>{navigation.cta}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}