/** Shared site identity and SEO helpers (public surfaces only). */

export const SITE_NAME = 'Onur Rauf Bingol, Ph.D.';
export const SITE_URL = 'https://onurraufbingol.com';
export const SITE_TAGLINE =
	'Software Engineering · Computational Geometry · Simulations';
export const DEFAULT_DESCRIPTION =
	'Software Engineering, Computational Geometry, and Simulations by Onur Rauf Bingol, Ph.D.';
export const DEFAULT_OG_IMAGE = '/og-default.png';

/** Professional profiles used for sameAs / UI — LinkedIn is the public CV surface. */
export const SAME_AS = [
	'https://github.com/orbingol/',
	'https://www.linkedin.com/in/orbingol/',
	'https://orcid.org/0000-0002-3139-5725',
] as const;

/** Raster formats that social crawlers reliably support (SVG is gated out). */
const RASTER_OG = /\.(png|jpe?g|webp|gif)$/i;

export function isUsableOgImage(path?: string | null): boolean {
	return Boolean(path && RASTER_OG.test(path));
}

export function absoluteUrl(path: string, site = SITE_URL): string {
	const base = site.replace(/\/$/, '');
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized}`;
}

export function formatPageTitle(title?: string, isHome = false): string {
	if (isHome || !title || title === SITE_NAME) {
		return SITE_NAME;
	}
	if (title.endsWith(` | ${SITE_NAME}`) || title === SITE_NAME) {
		return title;
	}
	return `${title} | ${SITE_NAME}`;
}
