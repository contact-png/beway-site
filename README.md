
# Beway Labs — Website

Production‑ready Next.js 14 + TypeScript + Tailwind project skeleton for **bewaylabs.com**.

## Tech
- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS
- Client i18n (FR/EN) with a simple context + JSON dictionaries
- API route for contact (`/api/contact`)
- `next-sitemap` for `robots.txt` and `sitemap.xml`

## Branding
- Primary Light Blue: `#00B4FF`
- Secondary Dark Blue: `#0047AB`
- Night Blue (Background): `#0A142F`
- Typographic Grey: `#8A93A2`
- White: `#FFFFFF`

## Offers (EUR / month)
- Website — from **50 €/mo**
- AI Copilot — from **249 €/mo**
- Custom Apps — from **999 €/mo**
Commitment: **12 / 24 / 36 months**.

## Getting started

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

To build:
```bash
pnpm build
pnpm start
```

## Contact form
- By default, submissions are logged server‑side.
- To send to an external endpoint (e.g., Formspree), set `FORM_ENDPOINT` in `.env.local` and rebuild.

## Sitemap & robots
```bash
pnpm run sitemap
```

## Deploy
Vercel recommended.

