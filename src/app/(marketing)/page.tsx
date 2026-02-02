import Header from "./components/Header";
import Hero from "./components/Hero";
import Challenge from "./components/Challenge";
import Solution from "./components/Solution";
import CTA from "./components/CTA";
import TeamSnippet from "./components/TeamSnippet";
import ContactForm from "./components/ContactForm";
import Features from "@/components/features";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="space-y-0">
          <Challenge />
          <Features />
          <Solution />
          <CTA />

        </div>
      </main>
      <Footer />
    </div>
  );
}