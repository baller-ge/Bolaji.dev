/**
 * Capability data for the Services page and the home-page highlights.
 * Grounded in Abdul-Basit's DevOps résumé — SSL/DNS, access control,
 * secure deployments, monitoring, uptime, performance.
 */

export interface Capability {
  title: string;
  body: string;
}

export interface ServiceArea {
  key: string;
  eyebrow: string;
  title: string;
  lede: string;
  items: Capability[];
}

export const security: ServiceArea = {
  key: "security",
  eyebrow: "Website security",
  title: "Secure by default",
  lede: "Security isn't a bolt-on. It's part of how the site is built, shipped, and run — so a corporate web presence stays trustworthy under real-world traffic.",
  items: [
    {
      title: "SSL/TLS & DNS",
      body: "Correctly configured certificates, HTTPS everywhere, and DNS set up so mail, subdomains, and redirects all resolve the way they should.",
    },
    {
      title: "Access control",
      body: "Least-privilege access to servers, dashboards, and deploy pipelines. Secrets and environment variables kept out of the codebase.",
    },
    {
      title: "Hardened deployments",
      body: "Repeatable, reviewed releases on hardened servers — no manual, ad-hoc changes in production that no one can trace later.",
    },
    {
      title: "Monitoring & logging",
      body: "Uptime checks, log aggregation, and alerting so problems surface before a client's customers are the ones reporting them.",
    },
  ],
};

export const maintenance: ServiceArea = {
  key: "maintenance",
  eyebrow: "Ongoing support",
  title: "Support & maintenance that stays",
  lede: "A launch is the start, not the finish. I stay on to keep sites fast, patched, and available — the difference between a website and a reliable business asset.",
  items: [
    {
      title: "Uptime & response",
      body: "Proactive monitoring with an agreed response window when something needs attention — not silence until the next invoice.",
    },
    {
      title: "Updates & patching",
      body: "Dependencies, platforms, and servers kept current so known vulnerabilities and breakage don't accumulate over time.",
    },
    {
      title: "Performance & SEO",
      body: "Ongoing tuning of load speed, Core Web Vitals, and technical SEO — the things that quietly decide rankings and conversions.",
    },
    {
      title: "Content & change requests",
      body: "New pages, copy edits, and feature tweaks handled on a predictable retainer, so the site keeps pace with the business.",
    },
  ],
};

export const serviceAreas: ServiceArea[] = [security, maintenance];
