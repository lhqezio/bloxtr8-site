import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  preview: string;
  readTime: string;
}

function parseBlogPost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, "");
  const content = fs.readFileSync(
    path.join(process.cwd(), "public", "markdowns", filename),
    "utf-8"
  );
  const lines = content.split("\n");

  // Extract title from first line (# Title)
  const title = (lines[0] || "").replace(/^#\s+/, "").trim() || slug;

  // Extract metadata from early lines
  let date = "";
  let image = "";
  for (const line of lines.slice(0, 10)) {
    if (line.startsWith("Created:")) {
      date = line.replace("Created:", "").trim();
    }
    if (line.startsWith("Image:")) {
      image = line.replace("Image:", "").trim();
    }
  }

  // Estimate read time
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  const readTime = `${minutes} min read`;

  // Extract preview from body text
  const bodyLines = lines
    .slice(1)
    .filter((l) => !l.startsWith("Created:") && !l.startsWith("Image:") && !l.startsWith("Credit:") && !l.startsWith("#") && !l.startsWith(">") && l.trim() !== "")
    .map((l) => l.replace(/\*\*/g, "").replace(/\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim());
  const preview = bodyLines.slice(0, 3).join(" ").slice(0, 200) + (bodyLines.join(" ").length > 200 ? "..." : "");

  return { slug, title, date, image, preview, readTime };
}

export default function BlogPage() {
  const markdownDir = path.join(process.cwd(), "public", "markdowns");
  const files = fs
    .readdirSync(markdownDir)
    .filter((f) => f.endsWith(".md"))
    .sort((a, b) => {
      const statA = fs.statSync(path.join(markdownDir, a));
      const statB = fs.statSync(path.join(markdownDir, b));
      return statB.mtimeMs - statA.mtimeMs;
    });

  const posts = files.map(parseBlogPost);
  const [featured, ...rest] = posts;

  return (
    <section className="relative pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-16 sm:pb-20 md:pb-28 lg:pb-36">
      <div className="grid-bg absolute inset-0 -z-20" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono-bold mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Thoughts and updates from us
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground text-base text-center">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-6">
            {/* Featured post */}
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl border border-border overflow-hidden hover:border-foreground/20 transition-all duration-300 relative min-h-[320px] sm:min-h-[400px] md:min-h-[450px]"
              >
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 backdrop-blur-[2px]" />
                <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    {featured.date && (
                      <span className="text-xs text-white/70 font-mono">
                        {featured.date}
                      </span>
                    )}
                    <span className="text-xs text-white/70 font-mono">
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mb-3 text-white">
                    {featured.title}
                  </h2>
                  {featured.preview && (
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl line-clamp-2">
                      {featured.preview}
                    </p>
                  )}
                </div>
              </Link>
            )}

            {/* Other posts */}
            {rest.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-border overflow-hidden hover:border-foreground/20 transition-all duration-200 relative min-h-[260px] sm:min-h-[300px]"
                  >
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 backdrop-blur-[2px]" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        {post.date && (
                          <span className="text-xs text-white/70 font-mono">
                            {post.date}
                          </span>
                        )}
                        <span className="text-xs text-white/70 font-mono">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-mono-bold mb-2 text-white">
                        {post.title}
                      </h2>
                      {post.preview && (
                        <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                          {post.preview}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
