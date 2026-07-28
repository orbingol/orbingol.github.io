/** Numeric category IDs used in project frontmatter → display labels. */
export const PROJECT_CATEGORIES = {
  1: "Geometry / Digital Twins",
  2: "AI Projects",
} as const;

export type ProjectCategoryId = keyof typeof PROJECT_CATEGORIES;

export const PROJECT_CATEGORY_IDS = Object.keys(PROJECT_CATEGORIES).map(Number) as ProjectCategoryId[];

export function getProjectCategoryLabel(category: number | undefined): string | undefined {
  if (category === undefined) return undefined;
  return PROJECT_CATEGORIES[category as ProjectCategoryId];
}
