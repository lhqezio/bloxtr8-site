"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footer } from "@/content/copy";
import { ThemeToggle } from "@/components/theme-toggle";
import { StripeLogo } from "@/components/logos/StripeLogo";
import LogoIcon from "./LogoIcon";

type FooterNavLink = {
  label: string;
  href: string;
  external?: boolean;
  targetBlank?: boolean;
  withIcon?: boolean;
};

const NavLink = ({ label, href, external, targetBlank, withIcon }: FooterNavLink) => {
  const className =
    "text-sm text-muted-foreground hover:text-foreground transition-colors";

  const isExternal = Boolean(external || targetBlank || /^https?:\/\//.test(href));

  if (isExternal) {
    return (
      <a
        href={href}
        target={targetBlank ? "_blank" : undefined}
        rel={targetBlank ? "noreferrer" : undefined}
        className="inline-flex items-center gap-1.5"
      >
        <span className={className}>{label}</span>
        {withIcon ? (
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        ) : null}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

export default function Footer2() {
  const year = new Date().getFullYear().toString();

  return (
    <footer className="w-full border-t border-border bg-background text-foreground">
      <div className="container-narrow">
        {/* Main footer content */}
        <div className="flex flex-col gap-10 py-12 sm:py-16 md:flex-row md:justify-between md:gap-8">
          {/* Left — Brand */}
          <div className="shrink-0">
            <Link href="/" className="inline-flex items-center gap-2">
              <LogoIcon className="h-5 sm:h-6 drop-shadow-[0_0_6px_rgba(160,160,190,0.4)] dark:drop-shadow-[0_0_8px_rgba(220,220,255,0.6)]" />
              <span className="font-mono text-base sm:text-lg tracking-widest uppercase font-semibold">
                BLOXTR8
              </span>
            </Link>
          </div>

          {/* Right — Link columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 sm:gap-x-16 lg:gap-x-20">
            {/* Product */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                {footer.columns.product.title}
              </h3>
              {footer.columns.product.links.map((l) => (
                <div key={l.label}>
                  <NavLink label={l.label} href={l.href} />
                </div>
              ))}
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                {footer.columns.company.title}
              </h3>
              {footer.columns.company.links.map((l) => (
                <div key={l.label}>
                  <NavLink
                    label={l.label}
                    href={l.href}
                    targetBlank={/^https?:\/\//.test(l.href)}
                    withIcon={/^https?:\/\//.test(l.href)}
                  />
                </div>
              ))}
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                {footer.columns.legal.title}
              </h3>
              {footer.columns.legal.links.map((l) => (
                <div key={l.label}>
                  <NavLink label={l.label} href={l.href} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <span className="text-xs text-muted-foreground font-mono-medium">
            {footer.copyright.replace("{year}", year)}
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-mono-medium">Powered by</span>
              <a
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                aria-label="Stripe"
              >
                <StripeLogo size={14} className="text-muted-foreground" />
                <span className="font-mono-medium">Stripe</span>
              </a>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
