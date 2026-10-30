# ashique.work

Personal site of Muhammed Ashique, a software engineer from Kerala, India.

A single static page: a short bio, projects and contact links. The layout and typography follow [leerob.com](https://leerob.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack), React 19, TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (configured in `app/globals.css`; there is no `tailwind.config.js`)
- Fonts: Iowan Old Style (built into macOS and iOS, falls back to Palatino or Georgia) and the system sans-serif for small UI text

> This Next.js version has breaking changes from older docs. Read the guides in `node_modules/next/dist/docs/` before changing framework code (see `AGENTS.md`).

## Develop

Requires Node.js 22 and npm 10.

```sh
npm install
npm run dev        # http://localhost:3000
```

Before pushing:

```sh
npm run lint && npx tsc --noEmit && npm run build
```

To check the production build locally, run `npm start` after `npm run build`.

## Editing content

| What | Where |
| --- | --- |
| Bio text (Default and Long) | `app/bio.tsx` |
| Projects list | `projects` array in `app/page.tsx` |
| Contact links | `contact` array in `app/page.tsx` |
| Page title and description | `app/layout.tsx` |
| Link preview image and its alt text | `app/opengraph-image.jpg`, `app/opengraph-image.alt.txt` |
| Favicon | `app/icon.png`, `app/apple-icon.png` |
| Colours (light and dark) and fonts | `app/globals.css` |

### Adding a project or brand logo

Each logo needs two transparent PNGs in `public/logos/`:

- `name.png`: 64×64, shown inline next to the name
- `name-cursor.png`: 32×32, used as the mouse cursor when hovering the link

Then add an entry to `projects` in `app/page.tsx`. In the bio, use the `BrandLink` component in `app/bio.tsx` with `logo="name"`.

## Features

- Bio with a **Default / Long** toggle
- Inline logos for every company and project, and logo-shaped cursors on hover
- Light and dark mode that follow the system setting
- Hovering a project row dims the others

## Security

Headers are set for every route in `next.config.ts`:

- `Content-Security-Policy`: only the site's own scripts, styles, fonts and images, with no embedding in other sites. It doesn't use nonces because nonces would make the page render dynamically. `'unsafe-eval'` is added in development only, because React needs it there.
- `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy` (camera, microphone and location disabled)
- `X-Powered-By` is turned off

The site has no forms, API routes, secrets or environment variables.

## SEO

- Title, description and canonical URL (`https://ashique.work`)
- Open Graph and Twitter cards with a 1200×630 preview image
- `robots.txt` and `sitemap.xml` (`app/robots.ts`, `app/sitemap.ts`)

Last checked on 30 October 2026 against the production build: Lighthouse scored 100 for accessibility, best practices and SEO on desktop and mobile. LCP was 0.92s with 4× CPU slowdown on Fast 4G, and CLS was 0.

## Deploy

The site is fully static. On [Vercel](https://vercel.com), import the repository with the default Next.js settings and add the `ashique.work` domain. If you deploy to a different domain, update `metadataBase` in `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts`.

## Credits

- Project and company logos belong to their owners: Codely, Convyflow, Dialogen, GetTravelHelp, Forma and Nivlet.
- The boats painting in the link preview (`app/opengraph-image.jpg`) came from [Pinterest](https://in.pinterest.com/pin/974959019326481392/). Its artist is not yet identified, so the rights to use it still need to be confirmed.
