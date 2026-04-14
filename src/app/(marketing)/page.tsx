import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Something great is coming
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">Stay tuned.</p>
      <Link
        href="https://tr8.ca"
        className="mt-8 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Visit tr8.ca
      </Link>
    </div>
  );
}
