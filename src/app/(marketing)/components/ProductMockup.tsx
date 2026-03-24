import Image from "next/image";

export default function ProductMockup() {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl border border-border">
        <Image
          src="/hero-marketplace.png"
          alt="Bloxtr8 Marketplace browse verified Roblox game listings"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
      <p className="text-center text-xs text-muted-foreground mt-3">
        Listings shown are for demonstration purposes only.
      </p>
    </div>
  );
}
