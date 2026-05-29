import { labs } from "#site/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXContent } from "@/components/mdx/mdx-content";
import { ogImage } from "@/lib/og";

export function generateStaticParams() {
  return labs.filter((l) => l.published).map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lab = labs.find((l) => l.slug === slug);
  if (!lab) return {};
  const image = ogImage(lab.title, "lab");
  return {
    title: lab.title,
    description: lab.description,
    openGraph: {
      title: lab.title,
      description: lab.description,
      type: "article",
      images: [image],
      publishedTime: lab.date,
    },
    twitter: {
      card: "summary_large_image",
      title: lab.title,
      description: lab.description,
      images: [image.url],
    },
  };
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lab = labs.find((l) => l.slug === slug && l.published);
  if (!lab) return notFound();

  return (
    <article className="mx-auto max-w-(--content-width) py-16">
      <Link
        href="/lab"
        className="font-mono text-xs text-ink-subtle transition-colors duration-(--dur-fast) hover:text-accent"
      >
        ← lab
      </Link>
      <header className="mt-6 mb-12 flex flex-col gap-3 border-b border-hairline pb-8">
        <p className="font-mono text-xs text-ink-subtle">
          <time dateTime={lab.date}>
            {new Date(lab.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
        <h1 className="font-sans text-4xl leading-tight font-medium tracking-tight text-ink sm:text-5xl">
          {lab.title}
        </h1>
      </header>
      <div className="prose-content">
        <MDXContent code={lab.body} />
      </div>
    </article>
  );
}
