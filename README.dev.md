# Local development

Astro + Tailwind site. **Use Docker** — you do not need Node installed on the host.

Docker images use **Node.js 24 LTS** (`node:24-bookworm`). The Astro Dev Toolbar appears only during `docker compose up web` (`astro dev`); production builds (`astro build` / GitHub Pages) are static HTML and never include it.


## Prerequisites

- Docker Desktop (or another Docker engine with Compose)

## Start the dev server

From the repo root:

```bash
docker compose up web
```

Open [http://localhost:4321](http://localhost:4321).

The container bind-mounts the repo, so edits under `src/`, `public/`, and content files hot-reload. Stop with `Ctrl+C`.

Rebuild the image after dependency changes (`package.json` / lockfile):

```bash
docker compose build web
docker compose up web
```

## Production build locally

```bash
docker compose run --rm build
```

Output lands in `./dist` (HTML, assets, generated sitemap, `CNAME`, plus anything from `public/` such as `robots.txt` / `llms.txt`).

CI-equivalent export:

```bash
docker build -f docker/Dockerfile --target export --output type=local,dest=dist .
```

## Where to edit

| Path | Purpose |
|------|---------|
| `src/pages/` | Routes (`/`, `/cv`, `/contact`, `/projects`, …) |
| `src/components/` | Nav, footer, cards, etc. |
| `src/layouts/Layout.astro` | Shared shell, SEO head, GA, fonts |
| `src/lib/site.ts` | Site name, default OG, `sameAs`, title helpers |
| `src/content/projects/*.md` | Project pages (frontmatter + body) |
| `src/styles/global.css` | Design tokens / global CSS |
| `public/` | Static SEO/crawl files, OG image, favicons, placeholders |
| `CNAME` | Custom domain; copied into `dist/` by `npm run build` |

Add a project by creating a Markdown file in `src/content/projects/` and filling the frontmatter (`title`, `summary`, `order`, optional `screenshot` / `links` / SEO fields below).

## Build artifacts — never commit `dist/`

`dist/` is **build output only** (gitignored). Edit sources; let the build copy them.

| Artifact | Source of truth | How it reaches `dist/` |
|----------|-----------------|------------------------|
| `robots.txt`, `llms.txt`, OG images, verify HTML files | `public/` | Astro copies `public/` → `dist/` on `astro build` |
| Favicons / `og-default.png` | `public/` (regen via `docker compose run --rm favicons`) | Same |
| Custom domain `CNAME` | Repo-root `CNAME` | `npm run build` → `astro build && cp CNAME dist/CNAME` |
| Sitemap XML | `@astrojs/sitemap` | Written at build time only |

After a local build, confirm `dist/` contains `robots.txt`, `llms.txt`, `CNAME`, and `sitemap*.xml` — and that `git status` does **not** stage `dist/`. Never `git add dist/`.

## SEO & discovery

### Public pages

Home, projects, and contact are indexable. Layout emits canonical URLs, title template (`Page \| Onur Rauf Bingol, Ph.D.`, brand-only on home), Open Graph / Twitter tags, and optional JSON-LD. Identity defaults live in `src/lib/site.ts` (`SITE_NAME`, `SITE_TAGLINE`).

**Project frontmatter (optional):**

| Field | Role |
|-------|------|
| `description` | Meta / OG description (falls back to `summary`) |
| `seoTitle` | Document title override (Layout still appends site name) |
| `image` | Dedicated OG image path under `public/` (raster: png/jpg/webp/gif) |
| `screenshot` | On-page image; used for OG only if it is a raster file |

SVG placeholders are **not** used as `og:image` — public pages fall back to `/og-default.png`.

### `/cv` exclusion (intentional)

`/cv` is for humans with the link — not for search snippets or AI training ingestion via this domain. LinkedIn is the public professional / CV surface.

| Mechanism | Where |
|-----------|--------|
| `noindex, follow` | `src/pages/cv.astro` → Layout |
| Omitted from sitemap | `astro.config.mjs` sitemap `filter` |
| `Disallow: /cv` | `public/robots.txt` (including named AI crawlers) |
| Not listed | `public/llms.txt`, JSON-LD |

Honest limit: scrapers that ignore robots/noindex can still fetch a public URL. Do not put unique sensitive data on `/cv` that would be unacceptable if leaked.

**Google Disallow vs noindex gotcha:** If Google already indexed `/cv` and you only `Disallow` it in `robots.txt`, Google may keep the listing and stop crawling — so it never sees `noindex`. Prefer shipping `noindex` + sitemap omit; use [Search Console URL Inspection / Removals](https://search.google.com/search-console) if a stale snippet remains. If stuck indexed, temporarily allow crawl while `noindex` is present until GSC shows excluded, then restore `Disallow`.

### Webmaster verification

Prefer **DNS TXT** for [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters).

HTML meta fallback: set `PUBLIC_GSC_VERIFICATION` / `PUBLIC_BING_VERIFICATION` in the build environment. Layout injects the meta tags when those env vars are present. Alternatively place Google/Bing HTML verify files under `public/` (never only under `dist/`).

After deploy: submit `https://onurraufbingol.com/sitemap-index.xml`, confirm `/cv` is absent from the sitemap and not indexed. Validators: [Rich Results Test](https://search.google.com/test/rich-results), social share debuggers on **public** URLs only.

## Favicons & default OG image

Edit `public/favicon.svg` and/or `public/og-default.svg`, then regenerate rasters:

```bash
docker compose run --rm favicons
```

That writes `favicon-16.png`, `favicon-32.png`, `favicon.ico`, `apple-touch-icon.png`, and `og-default.png` under `public/`. Browsers cache favicons aggressively — hard-refresh (or clear site data) after regenerating.

## Docker targets

| Target | Role |
|--------|------|
| `web` (default) | `astro dev` for local preview |
| `build` | `astro build` → `/app/dist` |
| `export` | Scratch stage used by CI to copy only `dist` |
| `favicons` | Rasterize `public/favicon.svg` (+ `og-default.svg`) → PNG/ICO |

## Deploy

Pushes to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with Docker and deploys to GitHub Pages.

After the first successful workflow run, set the repository **Pages** source to **GitHub Actions** (Settings → Pages).

See [README.md](README.md) for privacy policy and license notes.
