# cAIrlink Landing (Next.js + Tailwind)

A production-ready landing page with a working contact API route.

## Quick Start

```bash
npm install
cp .env.example .env.local   # set either RESEND_API_KEY+TO_EMAIL or FORMSPREE_ID
npm run dev
```

Visit http://localhost:3000

## Deployment (Vercel)

1. Push this project to a Git repo (GitHub/GitLab).
2. Import to Vercel.
3. In Project Settings → Environment Variables, set:
   - Either `RESEND_API_KEY` and `TO_EMAIL`
   - Or `FORMSPREE_ID`
4. Deploy.

## Notes

- UI uses minimal local components to avoid shadcn setup.
- The contact form posts to `/api/contact`. The API will:
  - Send an email via Resend if `RESEND_API_KEY` and `TO_EMAIL` are set.
  - Or forward JSON to Formspree if `FORMSPREE_ID` is set.
  - Otherwise, it accepts and logs (for development).

## Customize

- Edit copy in `app/page.tsx`.
- Update branding and colors in Tailwind classes.
- Replace the placeholder contact info in the Contact card.
