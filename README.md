# Onur's Personal Website

https://onurraufbingol.com

## Privacy Policy

* This website is publicly hosted on GitHub. Accessing this website is subject to GitHub policies.
* This website uses Content Delivery Services (CDNs) for accessing the HTML and Javascript frameworks. Accessing these services is subject to their policies.
* This website implements Google Analytics __in anonymous mode__ for personal viewing only.
* This website does not explicitly set or use cookies but dependent 3rd party services, e.g. GitHub and Google Analytics, may use cookies to obtain personal information which is out of my control. [Learn more](https://cookiesandyou.com)
* The contact form requires a valid email address to get back to you. The email address you provide on the contact form will not be used for email advertising or will not be shared with someone else.

## Development

This site is built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). All Node/npm work runs in Docker — no local Node install is required.

### Preview (default Docker target: `web`)

```bash
docker compose up web
```

Open http://localhost:4321

Or:

```bash
docker build -t orbingol-web .
docker run --rm -p 4321:4321 -v "$PWD:/app" -v web_node_modules:/app/node_modules orbingol-web \
  sh -c "npm ci && npm run dev -- --host 0.0.0.0 --port 4321"
```

### Production build (target: `build` / `export`)

```bash
docker compose run --rm build
```

Static files are written to `./dist` (includes generated sitemap and `CNAME`).

For CI-style export of only the site files:

```bash
docker build --target export --output type=local,dest=dist .
```

### Deploy

Pushes to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with Docker and deploys to GitHub Pages.

After the first successful workflow run, set the repository **Pages** source to **GitHub Actions** (Settings → Pages).

## License

* All text, figures and pictures used on this webpage is licensed under [CC BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/) unless indicated otherwise
* [Astro](https://github.com/withastro/astro) is licensed under the MIT License
* [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) is licensed under the MIT License
* [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) are licensed under the SIL Open Font License 1.1
