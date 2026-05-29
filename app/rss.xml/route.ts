import { writings } from "#site/content";
import { SITE_URL as SITE } from "@/lib/site";

const TITLE = "Bolaji Adekunle";
const DESC =
  "Notes on craft, the web, and the things I'm learning, from a frontend / product engineer at TD Africa.";

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET() {
  const items = writings
    .filter((w) => w.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const lastBuild =
    items[0]?.date
      ? new Date(items[0].date).toUTCString()
      : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(TITLE)}</title>
    <link>${SITE}</link>
    <description>${escape(DESC)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${escape(item.title)}</title>
      <link>${SITE}${item.permalink}</link>
      <guid isPermaLink="true">${SITE}${item.permalink}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>${escape(item.description)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
