# syntax=docker/dockerfile:1

FROM node:22-bookworm AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS source
COPY . .

# Production static site in /app/dist
FROM source AS build
RUN npm run build

# Export-only stage for CI: docker build --target export -o dist .
FROM scratch AS export
COPY --from=build /app/dist /

# Default target: Astro dev server (bind-mount source via compose)
FROM source AS web
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4321"]
