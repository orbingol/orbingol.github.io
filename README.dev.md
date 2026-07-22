# Local development

Astro + Tailwind site. **Use Docker** — you do not need Node installed on the host.

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

Output lands in `./dist` (HTML, assets, generated sitemap, `CNAME`).

CI-equivalent export:

```bash
docker build --target export --output type=local,dest=dist .
```

## Where to edit

| Path | Purpose |
|------|---------|
| `src/pages/` | Routes (`/`, `/contact`, `/projects`, …) |
| `src/components/` | Nav, footer, cards, etc. |
| `src/layouts/Layout.astro` | Shared shell, GA, fonts |
| `src/content/projects/*.md` | Project pages (frontmatter + body) |
| `src/styles/global.css` | Design tokens / global CSS |
| `public/` | Static files (`CNAME`, placeholders, favicons) |

Add a project by creating a Markdown file in `src/content/projects/` and filling the frontmatter (`title`, `summary`, `order`, optional `screenshot` / `links`).

## Docker targets

| Target | Role |
|--------|------|
| `web` (default) | `astro dev` for local preview |
| `build` | `astro build` → `/app/dist` |
| `export` | Scratch stage used by CI to copy only `dist` |

## Deploy

Pushes to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with Docker and deploys to GitHub Pages.

After the first successful workflow run, set the repository **Pages** source to **GitHub Actions** (Settings → Pages).

See [README.md](README.md) for privacy policy and license notes.
