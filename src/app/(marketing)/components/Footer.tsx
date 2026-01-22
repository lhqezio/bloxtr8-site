import Link from "next/link";
import { footer } from "@/content/copy";
import { ThemeToggle } from "@/components/theme-toggle";
import { StripeLogo } from "@/components/logos/StripeLogo";

// Helper function to render links
const FooterLink = ({ href, label }: { href: string; label: string }) => {
  const linkClass = "text-xs sm:text-sm text-muted-foreground hover:text-foreground active:text-foreground transition-colors min-h-[44px] flex items-center";
  
  // Use regular anchor for hash links or external links
  if (href.startsWith("#") || href.startsWith("/#") || (!href.startsWith("/") && !href.startsWith("#"))) {
    return <a href={href} className={linkClass}>{label}</a>;
  }
  
  // Use Next.js Link for internal routes
  return <Link href={href} className={linkClass}>{label}</Link>;
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container-wide pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 pb-12 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24 px-4 sm:px-6">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 w-full pt-2">
          {/* Product Column */}
          <div>
            <h4 className="font-mono-medium text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">{footer.columns.product.title}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footer.columns.product.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-mono-medium text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">{footer.columns.company.title}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footer.columns.company.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-mono-medium text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">{footer.columns.legal.title}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footer.columns.legal.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t border-border flex flex-col gap-3 sm:gap-4 w-full pb-2">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm text-muted-foreground font-mono-medium flex-shrink-0 text-center sm:text-left">
              {footer.copyright.replace('{year}', new Date().getFullYear().toString())}
            </div>
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>
          {/* Powered by Stripe */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground pb-2">
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
    </footer>
  );
}