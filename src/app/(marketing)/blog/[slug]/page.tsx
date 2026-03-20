import fs from "fs";
import path from "path";
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

  // Extract date
  let date = "";
  for (const line of lines.slice(0, 5)) {
    if (line.startsWith("Created:")) {
      date = line.replace("Created:", "").trim();
      break;
    }
  }

  // Remove the title line and the "Created:" metadata line from the body
  const bodyLines = lines.filter(
    (line, i) => i !== 0 && !line.startsWith("Created:")
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
      </div>
    </section>
  );
}
