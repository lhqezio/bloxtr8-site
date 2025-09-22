import { contact } from "@/config/contact";
import { footer } from "@/content/copy";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-wide py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <div>{footer.copyright.replace('{year}', new Date().getFullYear().toString())}</div>
        <div className="flex gap-6">
          <a href={`mailto:${contact.emails.general}`} className="hover:text-foreground transition-colors">
            {contact.emails.general}
          </a>
        </div>
      </div>
    </footer>
  );
}