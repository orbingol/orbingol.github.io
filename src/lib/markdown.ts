import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

/** Render a markdown string from frontmatter to HTML. */
export function renderMarkdown(source: string): string {
  return marked.parse(source, { async: false }) as string;
}
