import Image from "next/image";

export default function TrendSpotMockup() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-tr-2xl border border-l-0 border-b-0 border-border">
      <Image
        src="/hero-trendspot.png"
        alt="TrendSpot — real-time Roblox game market analytics"
        width={1200}
        height={1200}
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}
