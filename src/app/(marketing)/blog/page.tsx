import fs from "fs";
import path from "path";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
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

  // Extract date from "Created: ..." line
  let date = "";
  for (const line of lines.slice(0, 5)) {
    if (line.startsWith("Created:")) {
      date = line.replace("Created:", "").trim();
      break;
    }
  }

  return { slug, title, date };
}

export default function BlogPage() {
  const markdownDir = path.join(process.cwd(), "public", "markdowns");
  const files = fs
    .readdirSync(markdownDir)
    .filter((f) => f.endsWith(".md"))
    .sort((a, b) => {
      // Sort by modification time, newest first
      const statA = fs.statSync(path.join(markdownDir, a));
      const statB = fs.statSync(path.join(markdownDir, b));
      return statB.mtimeMs - statA.mtimeMs;
    });

  const posts = files.map(parseBlogPost);

  return (
    <section className="relative pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-16 sm:pb-20 md:pb-28 lg:pb-36">
      <div className="grid-bg absolute inset-0 -z-20" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono-bold mb-10 sm:mb-14">
          Blog
        </h1>

        {posts.length === 0 ? (
          <p className="text-muted-foreground text-base">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] rounded-2xl p-6 sm:p-8 hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors"
              >
                <h2 className="text-lg sm:text-xl font-mono-bold mb-2">
                  {post.title}
                </h2>
                {post.date && (
                  <p className="text-sm text-muted-foreground font-mono">
                    {post.date}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
