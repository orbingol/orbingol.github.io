import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Longer meta description; falls back to summary when omitted. */
    description: z.string().optional(),
    /** Overrides document title (still gets `| Onur Rauf Bingol, Ph.D.` in Layout). */
    seoTitle: z.string().optional(),
    screenshot: z.string().optional(),
    /** Dedicated OG/Twitter image (raster preferred). Falls back to screenshot if raster. */
    image: z.string().optional(),
    order: z.number(),
    links: z.record(z.string(), z.string().url()).optional(),
  }),
});

export const collections = { projects };
