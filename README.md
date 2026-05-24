# Bunian Social Links hub

[![Astro](https://img.shields.io/badge/Astro-astro-151515?logo=astro&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-tailwind-06B6D4?logo=tailwindcss&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-TypeScript-3178C6?logo=typescript&logoColor=white)](#)

This repository contains the Bunian website — a small Astro-powered site that serves as social-links hub for the Bunian Foundation. The site aggregates the foundation's social media profiles, contact links, and short project/branch information for easy public access.

**Overview**

- **Project**: Bunian — a focused link-landing site for the Bunian Foundation.
- **Purpose**: Provide a single, shareable landing page that lists Bunian Foundation social profiles, social/contact links, and short informational sections (branches, about..).

**Key Features**

- **Social links hub**: Central list of social profiles and external links (configured in `src/data/social-icons.ts`).
- **Componentized UI**: Reusable components under `src/components` and `src/components/home`, enabling easy updates and theming.
- **Fast static site**: Built with Astro for fast static output and optional partial hydration for interactive widgets.
- **Responsive styling**: Tailwind CSS-based utility classes for mobile-first responsiveness.
- **Icon driven**: Uses `astro-icon` plus Iconify packs for consistent brand icons (e.g., `@iconify-json/fa6-brands`).
- **Custom fonts & assets**: Fonts and images placed in `public/assets` for fast static serving.

**Tech Stack**

- Framework: Astro
- Styling: Tailwind CSS
- Language: TypeScript
- Icons: `astro-icon` + Iconify JSON packs
- Package managers: `bun`, `npm`, or `pnpm` supported

**Why Bunian?**

Organizations often need a concise, trusted place to list official profiles and ways to engage. Bunian is designed to be that canonical landing page for the Bunian Foundation.

**Getting Started (local)**

- Clone the repo: `git clone https://github.com/Sidali-Djeghbal/bunian`
- Install deps (bun):

```bash
bun install
```

- Run dev server:

```bash
bun run dev
```

Common scripts (see `package.json`):

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "format": "prettier --write ."
}
```

**Project Structure (high level)**

- Config: [astro.config.mjs](astro.config.mjs), [tailwind.config.mjs](tailwind.config.mjs), [tsconfig.json](tsconfig.json)
- Public assets: `public/assets/` (fonts, images)
- Pages: [src/pages/index.astro](src/pages/index.astro)
- Layouts: [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- Components: `src/components` and `src/components/home` (UI building blocks)
- Data: [src/data/social-icons.ts](src/data/social-icons.ts) (primary links), [src/data/home.ts](src/data/home.ts), [src/data/marquee-titles.ts](src/data/marquee-titles.ts)
- Styles: [src/styles/global.css](src/styles/global.css)

How social links are configured

1. Open [src/data/social-icons.ts](src/data/social-icons.ts).
2. Add or update entries with `name`, `url`, and `icon` identifiers (Iconify-friendly). Example:

```ts
export const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/bunian", icon: "brand:twitter" },
  { name: "GitHub", url: "https://github.com/bunian", icon: "brand:github" },
];
```

This file is read by the components that render the link cards. Icons should use keys from installed Iconify packs.

**Deployment**

- Hosts: Netlify, Cloudflare Pages are recommended for static deployments.
- Build: `bun run build`.
- After build, the site output is ready for static hosting (typically `dist/`).

**Customization**

- Update copy in `src/data/home.ts` to change titles, descriptions, and marquee items.
- Add or edit components inside `src/components` to change layout or add new sections (e.g., events, newsletter signup).
