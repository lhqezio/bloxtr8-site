import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

export async function generateStaticParams() {
  const markdownDir = path.join(process.cwd(), "public", "markdowns");
  const files = fs.readdirSync(markdownDir).filter((f) => f.endsWith(".md"));
  return files.map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "public", "markdowns", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  // Extract title from first line
  const title = (lines[0] || "").replace(/^#\s+/, "").trim();

  // Extract metadata
  let date = "";
  let image = "";
  let credit = "";
  for (const line of lines.slice(0, 10)) {
    if (line.startsWith("Created:")) {
      date = line.replace("Created:", "").trim();
    }
    if (line.startsWith("Image:")) {
      image = line.replace("Image:", "").trim();
    }
    if (line.startsWith("Credit:")) {
      credit = line.replace("Credit:", "").trim();
    }
  }

  // Remove the title line and the "Created:" metadata line from the body
  const bodyLines = lines.filter(
    (line, i) => i !== 0 && !line.startsWith("Created:") && !line.startsWith("Image:") && !line.startsWith("Credit:")
  );
  const body = bodyLines.join("\n");

  return (
    <section className="relative pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28">
      <div className="grid-bg absolute inset-0 -z-20" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono-bold mb-4">
          {title}
        </h1>
        {date && (
          <p className="text-sm text-muted-foreground font-mono mb-10">
            {date}
          </p>
        )}

        <article>
          <MarkdownRenderer content={body} />
        </article>

        {image && (
          <figure className="mt-12">
            <div className="rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={title}
                className="w-full h-auto"
              />
            </div>
            {credit && (
              <figcaption className="text-sm text-muted-foreground font-mono mt-3 text-center">
                Credit: {credit}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
