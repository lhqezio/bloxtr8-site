"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

const highlightRegex = /==(.*?)==/g;

function processHighlights(text: string): React.ReactNode[] {
  const parts = text.split(highlightRegex);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="underline decoration-purple-500 decoration-2 underline-offset-4 font-medium">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function processChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return processHighlights(child);
    }
    return child;
  });
}

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono-bold mt-10 mb-4">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl sm:text-2xl font-mono-bold mt-10 mb-4">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg sm:text-xl font-mono-bold mt-8 mb-3">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 mb-4">
            {processChildren(children)}
          </p>
        ),
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-border pl-4 sm:pl-6 my-6 text-muted-foreground italic">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 space-y-2 text-base sm:text-lg text-foreground/90">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-base sm:text-lg text-foreground/90">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{processChildren(children)}</li>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        ),
        code: ({ children, className }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return (
              <code className={`${className} block`}>{children}</code>
            );
          }
          return (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-muted rounded-xl p-4 sm:p-6 overflow-x-auto mb-4 text-sm">
            {children}
          </pre>
        ),
        hr: () => <hr className="border-border my-8" />,
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt || ""} className="rounded-xl my-6 max-w-full" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
