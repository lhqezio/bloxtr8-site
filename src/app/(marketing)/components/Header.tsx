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
      <div className="container-wide flex h-16 items-center relative">
        <Link href="/" className="flex items-center gap-2 relative z-[101]">
          <span className="font-mono text-sm tracking-widest uppercase font-medium">{navigation.brand}</span>
        </Link>
        
        {/* Desktop Navigation - Absolutely Centered */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground font-mono font-medium absolute left-1/2 -translate-x-1/2 z-[101]">
          {isHomePage ? (
            <>
              <a href="#features" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer">{navigation.links.features}</a>
              <Link href="/pricing" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer">{navigation.links.pricing}</Link>
              <Link 
                href="/blockchain" 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron font-bold text-base hover:scale-105 transition-all duration-200 cursor-pointer"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                {navigation.links.blockchain}
              </Link>
            </>
          ) : (
            <>
              <Link href="/#features" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer">{navigation.links.features}</Link>
              <Link href="/pricing" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer">{navigation.links.pricing}</Link>
              <Link 
                href="/blockchain" 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron font-bold text-base hover:scale-105 transition-all duration-200 cursor-pointer"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                {navigation.links.blockchain}
              </Link>
            </>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 relative z-[101] ml-auto">
          <Button asChild variant="outline" className="rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono">
            <Link href="/contact">{navigation.cta}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-[101] p-2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border z-[99]">
          <nav className="container-wide py-4 space-y-4">
            {isHomePage ? (
              <>
                <a
                  href="#features"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-all duration-200 font-mono font-medium py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.features}
                </a>
                <Link
                  href="/pricing"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-all duration-200 font-mono font-medium py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.pricing}
                </Link>
                <Link
                  href="/blockchain"
                  className="block text-sm bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron font-bold py-1 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  {navigation.links.blockchain}
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/#features"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-all duration-200 font-mono font-medium py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.features}
                </Link>
                <Link
                  href="/pricing"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-all duration-200 font-mono font-medium py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.pricing}
                </Link>
                <Link
                  href="/blockchain"
                  className="block text-sm bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron font-bold py-1 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  {navigation.links.blockchain}
                </Link>
              </>
            )}
            <div className="pt-4">
              <Button asChild variant="outline" className="w-full rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono min-h-[44px]">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>{navigation.cta}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}