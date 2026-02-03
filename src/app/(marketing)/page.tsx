import Header from "./components/Header";
import Hero2 from "./components/Hero2";
import CTA from "./components/CTA";
import Features from "@/components/features";
import  Footer2  from "./components/Footer2";
import Testimonials from "./components/Testomonials";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* <Hero /> */}
        <Hero2 />
        <div className="space-y-0">
          <Features />
          <Testimonials />
          <CTA />
        </div>
      </main>
      <Footer2 />
    </div>
  );
}