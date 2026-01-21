import "./globals.css";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { meta } from "@/content/copy";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics as GoogleAnalytics } from "@/components/analytics";
import ErrorBoundary from "@/components/error-boundary";
import CookieConsent from "@/components/cookie-consent";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL("https://bloxtr8.com"),
  openGraph: { title: meta.ogTitle, description: meta.ogDescription, url: "/", siteName: meta.ogTitle },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} ${orbitron.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <ThemeProvider defaultTheme="system" storageKey="bloxtr8-theme">
            {children}
            <CookieConsent />
          </ThemeProvider>
        </ErrorBoundary>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Analytics />
      </body>
    </html>
  );
}
