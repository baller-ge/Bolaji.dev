/**
 * Client references / testimonials.
 *
 * Real, signed-off references. To add a new one, copy an entry and fill in
 * `quote`, `name`, `role`, and `company`. If a quote is still awaiting
 * sign-off, set `placeholder: true` and it renders with a visible "Awaiting
 * sign-off" marker so an unfinished quote never reads as a genuine reference.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The real test of an engineer isn't launch day — it's what happens six months down the line. Abdul-Basit designed our cloud infrastructure and has handled our ongoing maintenance and support ever since. Their responsiveness is unmatched: whenever a third-party API goes down or an alert is triggered, they're already on it before our internal team even notices. Thanks to their proactive monitoring and automated backups, we've maintained 99.99% uptime over the past year. Knowing our systems are being monitored, patched, and optimized by someone so thorough lets us sleep easily at night.",
    name: "Chidubem Ikeagu",
    role: "Operations & Delivery Lead",
    company: "TDAfrica",
  },
  {
    quote:
      "In tech, security and deployment speed are everything. Before Abdul-Basit joined the project, our dev environment setup was a headache and our deployment pipeline took nearly 45 minutes to run. He containerized our entire application stack with Docker and optimized our GitHub Actions pipelines, cutting build-and-deploy times to under 8 minutes. He writes exceptionally clean Terraform and is incredibly collaborative — it's rare to find someone who can dive deep into complex infrastructure while pair-programming with the app devs to unblock their local environments. He made our whole engineering team faster.",
    name: "Adenola Uthman",
    role: "Senior Software Architect",
    company: "MTN",
  },
  {
    quote:
      "We were heading into our biggest product launch of the year, and historically our site struggled with the traffic spikes whenever our newsletter went out. Abdul-Basit stepped in and rebuilt our hosting infrastructure on AWS, setting up auto-scaling and a proper CDN. Not only did the site stay lightning-fast when we hit 50k concurrent users on launch day, he also explained the technical side in plain English. Over the last year, working with him has given our marketing team total peace of mind — we no longer cross our fingers when we launch a campaign, we just focus on the creative, knowing the infrastructure is bulletproof.",
    name: "Fridel Makun",
    role: "Head of Marketing",
    company: "TDAfrica",
  },
];
