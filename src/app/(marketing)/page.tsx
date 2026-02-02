import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Challenge from "./components/Challenge";
import Solution from "./components/Solution";
import CTA from "./components/CTA";
import Features from "@/components/features";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* <Hero /> */}
        <Hero2 />
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