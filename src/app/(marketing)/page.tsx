import Hero2 from "./components/Hero2";
import CTA from "./components/CTA";
import Features from "@/components/features";
import Testimonials from "./components/Testomonials";

export default function Page() {
  return (
    <>
      <Hero2 />
      <div className="space-y-0">
        <Features />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
}
