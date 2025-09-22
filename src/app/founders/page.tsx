import Image from "next/image";
import Link from "next/link";
import Header from "../(marketing)/components/Header";
import Footer from "../(marketing)/components/Footer";
import { team } from "@/content/copy";
import { pageMeta, footer } from "@/content/copy";
// Discord Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// LinkedIn Icon Component
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const founders = team.founders.map(founder => ({
  ...founder,
  discord: founder.discord,
  linkedin: founder.linkedin
}));

export const metadata = { 
  title: pageMeta.founders.title, 
  description: pageMeta.founders.description 
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container-wide py-16">
          <h1 className="text-3xl md:text-4xl font-mono-bold">Founders</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            {team.description}. We&apos;re building trust rails for high-ticket digital asset trades starting with Roblox.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map(f => (
              <div key={f.name} className="rounded-2xl border border-white/10 overflow-hidden bg-white/5">
                <div className="aspect-[4/3] relative">
                  <Image src={f.img} alt={f.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-mono-medium">{f.name}</h3>
                  <p className="text-sm text-blue-400 font-medium">{f.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{f.bio}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{f.expertise}</p>
                  <div className="mt-4 flex gap-4">
                    <a 
                      href={`https://discord.com/users/${f.discord}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                      title={`Discord: ${f.discord}`}
                    >
                      <DiscordIcon className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href={f.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                      title="LinkedIn Profile"
                    >
                      <LinkedInIcon className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/" className="underline underline-offset-4 hover:text-foreground transition-colors">
              {footer.links.backToHome}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}