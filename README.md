# Portfolio

Next.js portfolio site modeled after a modern dark/light developer portfolio.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting started

Requires **Node.js 18+** (Node 20/24 recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Customize your content

All personal content lives in one file:

```
src/data/portfolio.ts
```

Update name, role, experience, projects, contact links, SEO, and more there. Replace `public/resume.pdf` with your résumé.

## Deploy to Vercel

```bash
npx vercel
```

Or connect this GitHub repo in the Vercel dashboard.
