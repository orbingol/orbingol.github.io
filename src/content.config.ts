import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { PROJECT_CATEGORY_IDS } from "./lib/project-categories";

const projectCategorySchema = z
  .number()
  .int()
  .refine((value): value is (typeof PROJECT_CATEGORY_IDS)[number] => PROJECT_CATEGORY_IDS.includes(value as (typeof PROJECT_CATEGORY_IDS)[number]), {
    message: `category must be one of: ${PROJECT_CATEGORY_IDS.join(", ")}`,
  });

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
    /**
     * Project category ID (see `PROJECT_CATEGORIES` in `src/lib/projects.ts`).
     * Shown on the projects listing only.
     */
    category: projectCategorySchema.optional(),
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
          /**
           * When the demo was developed: `YYYY`, `YYYY-MM`, or `YYYY-MM-DD`.
           * Shown under the video title on the project page.
           * Quote year-only values in YAML (e.g. `"2023"`) so they stay strings.
           */
          date: z.preprocess(
            (value) => (typeof value === "number" ? String(value) : value),
            z
              .string()
              .regex(/^\d{4}(-\d{2}(-\d{2})?)?$/, "Use YYYY, YYYY-MM, or YYYY-MM-DD")
              .optional(),
          ),
          /** Short plain text for JSON-LD / fallback caption when sections are omitted. */
          description: z.string().optional(),
          /** Ordered markdown blocks under the embed (Story, Technical details, …). */
          sections: z
            .array(
              z.object({
                title: z.string(),
                body: z.string(),
                /**
                 * Omit = not collapsible.
                 * true = collapsible, starts collapsed; false = collapsible, starts open.
                 */
                collapsed: z.boolean().optional(),
              }),
            )
            .optional(),
        }),
      )
      .optional(),
    /** JSON-LD @type override (default SoftwareApplication). */
    schemaType: z.enum(["SoftwareApplication", "CreativeWork"]).optional(),
  }),
});

export const collections = { projects };
