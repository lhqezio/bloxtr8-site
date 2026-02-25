"use client";

import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { footer, footer2 } from "@/content/copy";
import { ThemeToggle } from "@/components/theme-toggle";
import { StripeLogo } from "@/components/logos/StripeLogo";

type FooterNavLink = {
  label: string;
  href: string;
  external?: boolean;
  targetBlank?: boolean;
  withIcon?: boolean;
};

const NavLink = ({ label, href, external, targetBlank, withIcon }: FooterNavLink) => {
  const className =
    "text-[14px] leading-none text-muted-foreground hover:text-foreground transition-colors";

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
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
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
  const navLinks: FooterNavLink[] = footer2.navLinks;
  const socialLinks: FooterNavLink[] = footer2.socialLinks;
  const contactEmail = footer2.support.email;

  return (
    <footer className="relative w-full overflow-hidden bg-background text-foreground">
      <div className="container-wide px-6">
        <div className="relative grid grid-cols-1 gap-14 pt-20 md:grid-cols-2 md:gap-8 md:pt-28 lg:pt-32">
          {/* Left side */}
          <div className="max-w-xl">
            <h2 className="text-[44px] leading-[1.05] tracking-tight md:text-[56px]">
              {footer2.headline}
            </h2>

            <div className="mt-10 space-y-2 text-[14px] text-muted-foreground">
              <div>{footer2.support.label}</div>
              <a
                href={`mailto:${contactEmail}`}
                className="text-foreground hover:text-foreground/90 transition-colors underline underline-offset-4 decoration-border"
              >
                {contactEmail}
              </a>
            </div>

            <div className="mt-20">
              <div className="text-[14px] text-muted-foreground">{footer2.newsletter.label}</div>

              <div className="mt-6 flex max-w-[520px] items-center gap-4 border-b border-border pb-3">
                <label className="sr-only" htmlFor="footer2-email">
                  {footer2.newsletter.inputPlaceholder}
                </label>
                <input
                  id="footer2-email"
                  name="email"
                  placeholder={footer2.newsletter.inputPlaceholder}
                  className="w-full bg-transparent text-[14px] tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none"
                  autoComplete="email"
                />
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={footer2.newsletter.submitAriaLabel}
                >
                  <MoveRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-16 md:justify-self-end md:gap-x-20">
            <div className="space-y-3 text-[14px]">
              {navLinks.map((l) => (
                <div key={l.label}>
                  <NavLink {...l} />
                </div>
              ))}
            </div>

            <div className="space-y-3 text-[14px]">
              {socialLinks.map((l) => (
                <div key={l.label}>
                  <NavLink {...l} />
                </div>
              ))}
            </div>

            <div className="text-[14px] leading-relaxed">
              {footer2.locationLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>

            <div className="space-y-3 text-[14px]">
              {footer2.legalLinks.map((l) => (
                <div key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] leading-none text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big word */}
        <div className="relative mt-16 pb-8 md:mt-24 md:pb-10">
          <div className="pointer-events-none select-none">
            <div className="font-semibold font-mono tracking-tight leading-[0.82] text-[clamp(56px,16vw,340px)] md:text-[clamp(96px,22vw,340px)] break-words text-center md:text-left text-foreground">
              {footer2.bigWord}
            </div>
          </div>

          {/* Subtext row under big word */}
          <div className="mt-4 flex flex-col items-center justify-start gap-3 text-xs text-muted-foreground sm:flex-row sm:gap-5 sm:text-sm">
            <div className="font-mono-medium text-center">
              {footer.copyright.replace("{year}", new Date().getFullYear().toString())}
            </div>

            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="font-mono-medium">Powered by</span>
              <a
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                aria-label="Stripe"
              >
                <StripeLogo size={16} className="text-muted-foreground" />
                <span className="font-mono-medium">Stripe</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
