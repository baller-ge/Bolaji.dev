import { writings } from "#site/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXContent } from "@/components/mdx/mdx-content";
import { ogImage } from "@/lib/og";

export function generateStaticParams() {
  return writings
    .filter((w) => w.published)
    .map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = writings.find((w) => w.slug === slug);
  if (!post) return {};
  const image = ogImage(post.title, "writing");
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [image],
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image.url],
    },
  };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = writings.find((w) => w.slug === slug && w.published);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-(--content-width) py-16">
      <Link
        href="/writing"
        className="font-mono text-xs text-ink-subtle transition-colors duration-(--dur-fast) hover:text-accent"
      >
        ← writing
      </Link>
      <header className="mt-6 mb-12">
        <p className="font-mono text-xs text-ink-subtle">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.tags.length > 0 && (
            <>
              {" · "}
              {post.tags.join(" · ")}
            </>
          )}
        </p>
        <h1 className="mt-3 font-sans text-4xl leading-tight font-medium tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
      </header>
      <div className="prose-content">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
