# A.K. Traders Ltd — Official Website

> **"You Name it, We Trade it!"**
> Canada's trusted product sourcing partner since 2003.

A modern, SEO-optimised marketing website for A.K. Traders Ltd — a Winnipeg-based company that helps Canadian businesses import products from China, Pakistan, and Turkey.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org/) | Framework (App Router) |
| [Tailwind CSS v3](https://tailwindcss.com/) | Styling |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [react-hook-form](https://react-hook-form.com/) | Contact / quote forms |
| [lucide-react](https://lucide.dev/) | Icons |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, services overview, process, testimonials |
| `/about` | Company story, core values, team |
| `/services` | All services + pricing plans |
| `/services/china` | China sourcing detail page |
| `/services/pakistan` | Pakistan sourcing detail page |
| `/services/turkey` | Turkey sourcing detail page |
| `/blog` | Blog listing |
| `/blog/[slug]` | Dynamic blog post (static pre-rendering) |
| `/faqs` | Accordion FAQ page |
| `/contact` | Contact & free quote form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Type-check
npx tsc --noEmit

# Production build
npm run build
npm start
```

---

## Project Structure

```
ak-traders/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + custom utility classes
│   ├── about/
│   ├── services/           # Main + china / pakistan / turkey
│   ├── blog/               # Listing + [slug] dynamic route
│   ├── faqs/
│   ├── contact/
│   ├── privacy/
│   └── terms/
├── components/             # Reusable UI components
│   ├── Header.tsx          # Sticky nav with Services dropdown
│   ├── Footer.tsx          # Full footer with CTA banner
│   ├── Hero.tsx            # Home hero section
│   ├── Stats.tsx           # Animated counters
│   ├── ServicesOverview.tsx
│   ├── Process.tsx         # 8-step sourcing process
│   ├── CoreValues.tsx
│   ├── Testimonials.tsx
│   ├── QuoteForm.tsx       # react-hook-form quote form
│   └── NewsletterSignup.tsx
├── lib/
│   └── blogData.ts         # Static blog post data
├── public/
│   └── logo.jpg            # Company logo
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Deployment

The site is deployed on **Vercel**. Every push to `master` triggers an automatic redeploy.

To deploy manually:
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## Contact

**A.K. Traders Ltd.**
- Email: info@aktraders.ca
- Phone: +1 (204) 123-4567
- Location: Winnipeg, Manitoba, Canada
- Website: [aktraders.ca](https://aktraders.ca)
