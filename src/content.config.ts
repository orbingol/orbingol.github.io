import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    screenshot: z.string().optional(),
    order: z.number(),
    links: z
      .object({
        github: z.string().url().optional(),
        docs: z.string().url().optional(),
        homepage: z.string().url().optional(),
        pypi: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
