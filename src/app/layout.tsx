import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { meta } from "@/content/copy";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import ErrorBoundary from "@/components/error-boundary";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

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
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <ThemeProvider defaultTheme="system" storageKey="bloxtr8-theme">
            {children}
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
