import { works } from "#site/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXContent } from "@/components/mdx/mdx-content";
import { ogImage } from "@/lib/og";
import styles from "../work.module.css";

export function generateStaticParams() {
  return works.filter((w) => w.published).map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = works.find((w) => w.slug === slug);
  if (!post) return {};
  const image = ogImage(post.title, "case study");
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image.url],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = works.find((w) => w.slug === slug && w.published);
  if (!post) return notFound();

  return (
    <article className={styles.article}>
      <Link href="/work" className={styles.backLink}>
        ← work
      </Link>
      <header className={styles.caseHeader}>
        <p className={styles.caseCompany}>{post.company}</p>
        <h1 className={styles.caseTitle}>{post.title}</h1>
        <div className={styles.caseMeta}>
          <span>
            <span className={styles.caseMetaLabel}>Role</span>
            {post.role}
          </span>
          <span>
            <span className={styles.caseMetaLabel}>Period</span>
            {post.period}
          </span>
        </div>
        <p className={styles.caseDescription}>{post.description}</p>
      </header>
      <div className="prose-content">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
