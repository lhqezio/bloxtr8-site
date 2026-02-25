import Hero2 from "./components/Hero2";
import CTA from "./components/CTA";
import Features2 from "@/components/features2";
import Testimonials from "./components/Testimonials";

export default function Page() {
  return (
    <>
      <Hero2 />
      <div className="space-y-0">
        <Features2 />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
}
