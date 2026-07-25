import { getCollection } from "astro:content";

/** Enabled projects sorted by frontmatter `order` (ascending). */
export async function getEnabledProjects() {
  const projects = await getCollection("projects", ({ data }) => data.enabled !== false);
  return projects.sort((a, b) => a.data.order - b.data.order);
}
