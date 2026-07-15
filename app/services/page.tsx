import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "@/lib/services";
import { ServiceSection } from "@/components/services/service-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website security, secure deployment, and ongoing support & maintenance — how Abdul-Basit Hamzat keeps corporate sites reliable.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 py-16">
      <header className="flex flex-col gap-3 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/services</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          What I take responsibility for
        </h1>
        <p className="mt-2 max-w-[60ch] font-sans text-xl leading-snug text-ink-muted">
          Most agencies build a site and disappear. My DevOps background means I
          own the parts that decide whether a corporate website is an asset or a
          liability: that it&rsquo;s secure, that it stays up, and that someone
          reliable is on the other end of it.
        </p>
      </header>

      {serviceAreas.map((area) => (
        <ServiceSection key={area.key} area={area} />
      ))}

      <section className="flex flex-col gap-4 border-t border-hairline pt-8">
        <h2 className="font-sans text-xl font-medium text-ink">
          Working together
        </h2>
        <p className="max-w-[60ch] text-base leading-relaxed text-ink-muted">
          Engagements usually run as a fixed-scope build followed by a monthly
          support retainer — sized to the site. Happy to scope a one-off project
          or an ongoing arrangement.
        </p>
        <Link
          href="/contact"
          className="w-fit border-b border-hairline font-mono text-sm text-ink transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent"
        >
          Start a conversation →
        </Link>
      </section>
    </div>
  );
}
