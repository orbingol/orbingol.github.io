# syntax=docker/dockerfile:1

# Latest Node.js LTS (currently 24.x)
# Build from repo root: docker build -f docker/Dockerfile --target export ...
FROM node:24-bookworm AS deps
ENV ASTRO_TELEMETRY_DISABLED=1
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS source
COPY . .

# Production static site in /app/dist (no Astro Dev Toolbar — toolbar is only for `astro dev`)
FROM source AS build
ENV NODE_ENV=production
RUN npm run build

# Export-only stage for CI: docker build -f docker/Dockerfile --target export -o dist .
FROM scratch AS export
COPY --from=build /app/dist /

# Favicon rasterizer: docker compose run --rm favicons
FROM node:24-bookworm AS favicons
RUN apt-get update -qq \
    && apt-get install -y -qq --no-install-recommends fonts-dejavu-core \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /opt/favicons
COPY scripts/package.favicons.json ./package.json
COPY scripts/regen-favicons.mjs ./regen-favicons.mjs
RUN npm install --omit=dev
WORKDIR /work
ENV FAVICON_DIR=/work
CMD ["node", "/opt/favicons/regen-favicons.mjs"]

# Default target: Astro dev server (bind-mount source via compose)
FROM source AS web
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4321"]
