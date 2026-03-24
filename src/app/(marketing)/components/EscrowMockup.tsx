import Image from "next/image";

export default function EscrowMockup() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-tl-2xl border border-r-0 border-b-0 border-border">
      <Image
        src="/hero-escrow.png"
        alt="Deal complete — funds released via Stripe escrow"
        width={744}
        height={1418}
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}
