"use client";
import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { Button } from "@/components/ui/button";
import { navigation } from "@/content/copy";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage || !headerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderHidden(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <>
    <header ref={headerRef} className={`${isHomePage ? "relative" : "sticky top-0 border-b border-border"} z-[100] bg-background/95 backdrop-blur-md`}>
      <div className="container-narrow flex h-16 items-center relative">
        <Link href="/" className="flex items-center justify-center gap-2 relative z-[101] min-h-[44px] min-w-[44px]">
          <LogoIcon className="h-5 sm:h-6 drop-shadow-[0_0_6px_rgba(160,160,190,0.4)] dark:drop-shadow-[0_0_8px_rgba(220,220,255,0.6)]" />
          <span className="font-mono text-base sm:text-lg tracking-widest uppercase font-semibold">{navigation.brand}</span>
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
                <span className="ml-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-border text-muted-foreground leading-none">SOON</span>
              </Link>
              <Link href="/blog" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center">{navigation.links.blog}</Link>
            </>
          ) : (
            <>
              <Link href="/pricing" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center">{navigation.links.pricing}</Link>
              <Link
                href="/blockchain"
                className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center"
              >
                {navigation.links.blockchain}
                <span className="ml-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-border text-muted-foreground leading-none">SOON</span>
              </Link>
              <Link href="/blog" className="hover:text-foreground transition-all duration-200 hover:scale-105 cursor-pointer min-h-[44px] flex items-center">{navigation.links.blog}</Link>
            </>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 relative z-[101] ml-auto">
          <Button asChild variant="outline" className="rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono min-h-[44px]">
            <a href="https://pilot.bloxtr8.com" target="_blank" rel="noopener noreferrer">{navigation.cta}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-[101] ml-auto p-2.5 text-muted-foreground hover:text-foreground active:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
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
        <div className="md:hidden fixed top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border z-[99] shadow-lg">
          <nav className="container-wide pt-4 pb-6 px-4 sm:px-6 space-y-1">
            {isHomePage ? (
              <>
                <a
                  href="features"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.features}
                </a>
                <Link
                  href="/pricing"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.pricing}
                </Link>
                <Link
                  href="/blockchain"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.blockchain}
                </Link>
                <Link
                  href="/blog"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.blog}
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/features"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.features}
                </Link>
                <Link
                  href="/pricing"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.pricing}
                </Link>
                <Link
                  href="/blockchain"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.blockchain}
                </Link>
                <Link
                  href="/blog"
                  className="block text-base text-muted-foreground hover:text-foreground active:text-foreground transition-all duration-200 font-mono font-medium py-3 px-2 rounded-lg hover:bg-background/50 active:bg-background/70 min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation.links.blog}
                </Link>
              </>
            )}
            <div className="pt-4 pb-2">
              <Button asChild variant="outline" className="w-full rounded-2xl border-border text-foreground hover:bg-primary hover:text-primary-foreground font-mono min-h-[48px] text-base">
                <a href="https://pilot.bloxtr8.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>{navigation.cta}</a>
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Floating sticky CTA - appears when header scrolls out on landing */}
      {isHomePage && (
        <div
          className={`fixed top-4 right-4 z-[100] transition-all duration-300 hidden md:block ${
            headerHidden
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="rounded-2xl font-mono min-h-[44px] px-6 shadow-[0_0_15px_rgba(0,0,0,0.2),0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.3),0_0_60px_rgba(0,0,0,0.15)] dark:shadow-[0_0_15px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.08)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.25),0_0_60px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-105"
          >
            <a href="https://pilot.bloxtr8.com" target="_blank" rel="noopener noreferrer">{navigation.cta}</a>
          </Button>
        </div>
      )}
    </>
  );
}