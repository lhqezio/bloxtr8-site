import Header from "./components/Header";
import Hero from "./components/Hero";
import Challenge from "./components/Challenge";
import Solution from "./components/Solution";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Challenge />
        <Solution />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}