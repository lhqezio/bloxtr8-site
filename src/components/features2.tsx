import EscrowSection from "@/app/(marketing)/components/EscrowSection";
import DiscordSection from "@/app/(marketing)/components/DiscordSection";
import TrendSpotSection from "@/app/(marketing)/components/TrendSpotSection";
import CreatorXSection from "@/app/(marketing)/components/CreatorXSection";
export default function Features2() {
  return (
    <section className="@container py-8 sm:py-12 md:py-16 lg:py-24 ">
      <div className="container-narrow px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 sm:mb-4">
            Powerful Features for Modern Studios
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Everything you need to connect, secure, and sell your creations in
            Roblox effortlessly.
          </p>
        </div>{" "}
        <EscrowSection />
        <DiscordSection />
        <TrendSpotSection />
        <CreatorXSection />
      </div>
    </section>
  );
}
