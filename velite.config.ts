import { defineConfig, defineCollection, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const computedFields = <T extends { slug: string }>(data: T, base: string) => ({
  ...data,
  permalink: `/${base}/${data.slug}`,
});

const writings = defineCollection({
  name: "Writing",
  pattern: "writing/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.slug("writings"),
      date: s.isodate(),
      description: s.string().max(280),
      tags: s.array(s.string()).default([]),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data) => computedFields(data, "writing")),
});

const works = defineCollection({
  name: "Work",
  pattern: "work/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.slug("works"),
      company: s.string(),
      role: s.string(),
      period: s.string(),
      startYear: s.number().default(0),
      description: s.string().max(280),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data) => computedFields(data, "work")),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/*.mdx",
  schema: s.object({
    title: s.string().max(120),
    slug: s.slug("projects"),
    url: s.string().url(),
    client: s.string(),
    sector: s.string(),
    role: s.string(),
    year: s.number(),
    description: s.string().max(280),
    cover: s.image(),
    featured: s.boolean().default(false),
    order: s.number().default(99),
    published: s.boolean().default(true),
  }),
});

const labs = defineCollection({
  name: "Lab",
  pattern: "lab/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.slug("labs"),
      date: s.isodate(),
      description: s.string().max(280),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data) => computedFields(data, "lab")),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { writings, works, projects, labs },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
        },
      ],
    ],
  },
});
