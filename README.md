<div align="center">

# Angular Template SSR

**Production-ready Angular starter with SSR, TypeScript, Tailwind CSS, and
modern testing**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-24+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-11+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular)](https://angular.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates)
ecosystem

</div>

---

## Features

| Category         | Technologies                                              |
| ---------------- | --------------------------------------------------------- |
| **Framework**    | Angular 21 with standalone components and signals         |
| **Rendering**    | `@angular/ssr` with Express and zoneless change detection |
| **UI**           | Tailwind CSS 4, Lucide Angular                            |
| **Data**         | TanStack Query Angular adapter                            |
| **Type Safety**  | TypeScript with strict shared presets                     |
| **Testing**      | Vitest, Playwright smoke e2e                              |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged                      |

---

## Requirements

- Node.js 24+
- pnpm 11+

---

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

The dev server starts on `http://localhost:4200`. The production server listens
on port `3000`.

---

## Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `pnpm dev`        | Start Angular dev server               |
| `pnpm build`      | Create production SSR build            |
| `pnpm start`      | Run production Express SSR server      |
| `pnpm test`       | Run unit tests with Vitest             |
| `pnpm test:e2e`   | Run Playwright smoke tests             |
| `pnpm coverage`   | Run tests with coverage                |
| `pnpm check`      | Run lint, typecheck, format, and tests |
| `pnpm lint:es`    | Lint and fix with ESLint               |
| `pnpm lint:ts`    | TypeScript type checking               |
| `pnpm format`     | Format with Prettier                   |
| `pnpm docker:dev` | Start Docker Compose dev stack         |

---

## Project Structure

| Path                  | Purpose                               |
| --------------------- | ------------------------------------- |
| `src/app/`            | Application shell, routes, pages      |
| `src/app/components/` | Shared UI components                  |
| `src/app/services/`   | Injectable services and query hooks   |
| `src/lib/`            | Server utilities and shared contracts |
| `src/server.ts`       | Express SSR server and API routes     |
| `public/`             | Static assets                         |
| `e2e/`                | Playwright smoke tests                |
| `docker/`             | Production and development images     |

---

## Environment

Copy `.env.example` and adjust values as needed.

| Variable            | Purpose                        |
| ------------------- | ------------------------------ |
| `PORT`              | Production server port         |
| `NODE_ENV`          | Runtime environment            |
| `NG_APP_PUBLIC_URL` | Canonical URL for SEO metadata |

---

## Docker

```bash
pnpm docker:dev
```

Uses `docker-compose.yml` with optional database and Redis profiles.

---

## Health Endpoint

`GET /api/health` returns a typed health payload from the SSR server. The home
page reads it through TanStack Query.

---

## Additional Resources

- [Angular documentation](https://angular.dev)
- [Angular SSR guide](https://angular.dev/guide/ssr)
