/** Extract a YouTube video id from common watch / share / embed URLs. */
export function youtubeIdFromUrl(url: string): string | undefined {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id || undefined;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
      const v = u.searchParams.get("v");
      if (v) return v;

      const parts = u.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live") {
        return parts[1] || undefined;
      }
    }
  } catch {
    return undefined;
  }
  return undefined;
}

export function youtubeEmbedUrl(url: string): string | undefined {
  const id = youtubeIdFromUrl(url);
  return id ? `https://www.youtube.com/embed/${id}` : undefined;
}
