"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigation } from "@/content/copy";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 relative z-[101]">
          <span className="font-mono text-sm tracking-widest uppercase underline decoration-foreground decoration-2">{navigation.brand}</span>
        </Link>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-mono relative z-[101] flex-1 justify-center">
          {isHomePage ? (
            <>
              <a href="#challenge" className="hover:text-foreground transition-colors cursor-pointer">{navigation.links.product}</a>
              <a href="#solution" className="hover:text-foreground transition-colors cursor-pointer">{navigation.links.trust}</a>
            </>
          ) : (
            <>
              <Link href="/#challenge" className="hover:text-foreground transition-colors cursor-pointer">{navigation.links.product}</Link>
              <Link href="/#solution" className="hover:text-foreground transition-colors cursor-pointer">{navigation.links.trust}</Link>
            </>
          )}
          <Link href="/founders" className="hover:text-foreground transition-colors cursor-pointer">{navigation.links.founders}</Link>
        </nav>

        {/* Desktop CTA and Theme Toggle */}
        <div className="hidden md:flex items-center gap-3 relative z-[101]">
          <ThemeToggle />
          <Button asChild variant="outline" className="rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono">
            {isHomePage ? (
              <a href="#contact">{navigation.cta}</a>
            ) : (
              <Link href="/#contact">{navigation.cta}</Link>
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-[101] p-2 text-muted-foreground hover:text-foreground transition-colors"
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
                  href="#challenge" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.product}
                </a>
                <a 
                  href="#solution" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.trust}
                </a>
              </>
            ) : (
              <>
                <Link 
                  href="/#challenge" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.product}
                </Link>
                <Link 
                  href="/#solution" 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.trust}
                </Link>
              </>
            )}
            <Link 
              href="/founders" 
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navigation.links.founders}
            </Link>
            <div className="pt-4 space-y-3">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <Button asChild variant="outline" className="w-full rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono">
                {isHomePage ? (
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{navigation.cta}</a>
                ) : (
                  <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>{navigation.cta}</Link>
                )}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}