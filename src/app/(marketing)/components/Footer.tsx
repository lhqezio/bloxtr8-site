import Link from "next/link";
import { footer } from "@/content/copy";
import { ThemeToggle } from "@/components/theme-toggle";

// Helper function to render links
const FooterLink = ({ href, label }: { href: string; label: string }) => {
  const linkClass = "text-sm text-muted-foreground hover:text-foreground transition-colors";
  
  // Use regular anchor for hash links or external links
  if (href.startsWith("#") || href.startsWith("/#") || (!href.startsWith("/") && !href.startsWith("#"))) {
    return <a href={href} className={linkClass}>{label}</a>;
  }
  
  // Use Next.js Link for internal routes
  return <Link href={href} className={linkClass}>{label}</Link>;
};

export default function Footer() {
  return (
    <footer>
      <div className="container-wide py-12 md:py-16 lg:py-24">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Product Column */}
          <div>
            <h4 className="font-mono-medium text-sm mb-4 uppercase tracking-wider">{footer.columns.product.title}</h4>
            <ul className="space-y-3">
              {footer.columns.product.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-mono-medium text-sm mb-4 uppercase tracking-wider">{footer.columns.company.title}</h4>
            <ul className="space-y-3">
              {footer.columns.company.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-mono-medium text-sm mb-4 uppercase tracking-wider">{footer.columns.legal.title}</h4>
            <ul className="space-y-3">
              {footer.columns.legal.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground font-mono-medium">
            {footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}