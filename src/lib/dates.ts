const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as const;

/**
 * Format a video/demo date string (`YYYY`, `YYYY-MM`, or `YYYY-MM-DD`) for display.
 * Returns undefined when the input is missing or invalid.
 */
export function formatVideoDate(date: string | undefined): string | undefined {
  if (!date) return undefined;
  const match = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/.exec(date);
  if (!match) return undefined;

  const year = match[1];
  const month = match[2] ? Number(match[2]) : undefined;
  const day = match[3] ? Number(match[3]) : undefined;

  if (month === undefined) return year;
  if (month < 1 || month > 12) return undefined;

  const monthName = MONTHS[month - 1];
  if (day === undefined) return `${monthName} ${year}`;
  if (day < 1 || day > 31) return undefined;
  return `${monthName} ${day}, ${year}`;
}
