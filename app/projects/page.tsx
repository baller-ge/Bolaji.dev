import type { Metadata } from "next";
import { projects } from "#site/content";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live websites Abdul-Basit Hamzat has built, deployed, secured, and maintained — enterprise portals, professional services, and commerce.",
};

export default function ProjectsPage() {
  const published = projects
    .filter((p) => p.published)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col gap-12 py-16">
      <header className="flex flex-col gap-3 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/projects</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          Websites I&rsquo;ve shipped
        </h1>
        <p className="mt-2 max-w-[62ch] font-sans text-xl leading-snug text-ink-muted">
          Live, in-production sites across enterprise platforms, professional
          services, and commerce — each one built, deployed, secured, and kept
          running.
        </p>
      </header>

      {published.length > 0 ? (
        <ProjectGrid projects={published} />
      ) : (
        <p className="font-mono text-sm text-ink-subtle">
          No projects published yet.
        </p>
      )}

      <p className="border-t border-hairline pt-8 font-mono text-sm text-ink-subtle">
        More work under NDA or in private repos — happy to walk through it on a
        call.
      </p>
    </div>
  );
}
