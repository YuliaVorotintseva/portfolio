# Yulia Vorotintseva — Portfolio

An English-language portfolio for frontend opportunities, built with Next.js, React, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content updates

- Profile, work experience, skills, and certificates: `content/profile.ts`
- Project case studies: `content/projects.ts`
- CV and certificate files: `public/`
- Global design and responsive behavior: `app/globals.css`

All project pages are statically generated from `content/projects.ts`.

## Deployment

Deploy to Vercel and set `NEXT_PUBLIC_SITE_URL` to the production URL. No runtime secrets or database are required.

Before publishing, confirm the preferred city wording and replace the fallback canonical domain with the final domain through `NEXT_PUBLIC_SITE_URL`.
