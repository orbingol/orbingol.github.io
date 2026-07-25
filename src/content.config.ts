import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Longer meta description; falls back to summary when omitted. */
    description: z.string().optional(),
    /** Overrides document title (still gets `| Onur Rauf Bingol, Ph.D.` in Layout). */
    seoTitle: z.string().optional(),
    screenshot: z.string().optional(),
    /** Card/list thumbnail; falls back to screenshot. */
    cardImage: z.string().optional(),
    /** Dedicated OG/Twitter image (raster preferred). Falls back to screenshot if raster. */
    image: z.string().optional(),
    order: z.number(),
    /** When false, omitted from nav, listings, detail routes, and sitemap. */
    enabled: z.boolean().default(true),
    links: z.record(z.string(), z.string().url()).optional(),
    /** Image gallery / carousel slides for the project page. */
    gallery: z
      .array(
        z.object({
          src: z.string(),
          caption: z.string().optional(),
          alt: z.string().optional(),
        }),
      )
      .optional(),
    /** Optional YouTube (or similar) videos shown as embeds on the project page. */
    videos: z
      .array(
        z.object({
          title: z.string(),
          /** Full watch URL or embeddable URL; YouTube watch/shorts IDs are extracted automatically. */
          url: z.string().url(),
          /** Shown under the embed (e.g. YouTube description). */
          description: z.string().optional(),
        }),
      )
      .optional(),
    /** JSON-LD @type override (default SoftwareApplication). */
    schemaType: z.enum(["SoftwareApplication", "CreativeWork"]).optional(),
  }),
});

export const collections = { projects };
