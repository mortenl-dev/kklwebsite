# Karina Kehlet Lins — Portfolio Site

Next.js 14 + next-intl + Tailwind CSS portfolio site with EN / DA / DE support.

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000  (redirects to /en/)
```

## Project structure

```
messages/
  en.json       ← All English text
  da.json       ← All Danish text
  de.json       ← All German text

src/
  i18n.ts                    ← Locale list + request config
  app/
    layout.tsx               ← Root layout (imports globals.css)
    [locale]/
      layout.tsx             ← Locale wrapper (NextIntlClientProvider)
      page.tsx               ← Home page (assembles all sections)
  components/
    Nav.tsx                  ← Sticky nav + language switcher
    Hero.tsx                 ← Full-height hero section
    About.tsx                ← Bio + credential timeline
    Focus.tsx                ← Research area cards
    Teaching.tsx             ← University positions + course list
    Publications.tsx         ← Publication list
    Contact.tsx              ← Contact info + form
    Footer.tsx               ← Simple footer
    ScrollReveal.tsx         ← IntersectionObserver reveal wrapper
  styles/
    globals.css              ← CSS variables, base styles, animations

middleware.ts                ← Locale routing (next-intl)
```

## Adding a 4th language

1. Add the locale code to `src/i18n.ts` → `locales` array
2. Create `messages/XX.json` (copy `en.json` and translate)
3. Done — the nav language switcher auto-renders all locales

## Adding your photo

In `src/components/Hero.tsx`, replace the placeholder `<div>` with:

```tsx
import Image from 'next/image';

<div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
  <Image
    src="/photo.jpg"
    alt="Karina Kehlet Lins"
    fill
    priority
    style={{ objectFit: 'cover', borderRadius: '4px 40px 4px 40px' }}
  />
</div>
```

Put `photo.jpg` in the `public/` folder.

## Wiring up the contact form

In `src/components/Contact.tsx`, the `handleSubmit` function is a stub.
Replace the `console.log` with your preferred email service:

- **Resend** (recommended): https://resend.com — create an API route at `src/app/api/contact/route.ts`
- **Formspree**: replace the form action with your Formspree endpoint
- **EmailJS**: call `emailjs.send()` directly from the client

## Deploy to Vercel

```bash
# Push to GitHub, then:
vercel --prod
# or import repo at vercel.com/new
```

Set `NEXT_PUBLIC_SITE_URL` env var to your domain in Vercel project settings.

## Updating content

All text lives in `messages/*.json`. No code changes needed for:
- Bio text, quotes, credentials
- Research area descriptions
- University positions and courses
- Publication list (add new objects to the `list` array)
- Contact details (email, phone)
