# TECH3ON

> **AI, Cloud & Full-Stack Engineering for Modern Businesses**
> Building Scalable Software, Cloud Solutions & AI-Powered Products.

A premium, enterprise-grade marketing website for TECH3ON — a software
consulting company. Built to generate inbound leads from startups, SMEs and
enterprises across the US, EMEA, APAC and the Middle East.

---

## ✨ Features

- **Next.js 15 (App Router)** + **React 19** + **TypeScript**
- **Tailwind CSS** design system with **dark / light mode** (deep navy + azure palette)
- **Framer Motion** scroll animations & micro-interactions
- Glassmorphism accents, animated hero background & floating tech icons
- Fully **responsive** (mobile-first) and **WCAG-conscious** (semantic markup, focus states, reduced-motion support, ARIA)
- **SEO-ready**: metadata, Open Graph & Twitter cards, JSON-LD structured data (Organization, WebSite, ProfessionalService, FAQPage), dynamic `sitemap.xml`, `robots.txt`, PWA manifest, dynamic OG image
- **Contact form** with **React Hook Form** + **Zod** validation and a server **API route**
- Sticky navigation, smooth scrolling, back-to-top button, loading states
- 11 sections: Hero, Trust, Services, Why Choose Us, Technology, Case Studies, Process, Testimonials, FAQ, Contact, Footer
- Legal pages (Privacy Policy, Terms of Service) and a custom 404

---

## 🧱 Tech Stack

| Concern      | Choice                                   |
| ------------ | ---------------------------------------- |
| Framework    | Next.js 15 (App Router)                  |
| Language     | TypeScript                               |
| Styling      | Tailwind CSS + CSS variables             |
| Animation    | Framer Motion                            |
| UI           | Custom shadcn-style primitives           |
| Icons        | Lucide React                             |
| Forms        | React Hook Form                          |
| Validation   | Zod                                      |
| Theming      | next-themes                              |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18.18+** (Node 20+ recommended)
- npm (or pnpm / yarn)

### Install & run

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
```

### Scripts

```bash
npm run dev        # start dev server
npm run build      # production build
npm run start      # run production server
npm run lint       # ESLint
npm run typecheck  # TypeScript (tsc --noEmit)
```

---

## ⚙️ Configuration

Most site-wide content lives in two files:

- [`src/lib/site.ts`](src/lib/site.ts) — name, tagline, URL, email, phone,
  social links, Calendly URL, navigation.
- [`src/lib/content.ts`](src/lib/content.ts) — services, tech stack, case
  studies, testimonials, FAQ, process, form options.

### Environment variables

| Variable                   | Required | Description                                 |
| -------------------------- | -------- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | ✅        | Canonical site URL (no trailing slash)      |
| `NEXT_PUBLIC_CALENDLY_URL` | ⬜        | Calendly scheduling link                    |
| `RESEND_API_KEY`           | ⬜        | API key if delivering leads via Resend      |
| `CONTACT_TO_EMAIL`         | ⬜        | Destination inbox for contact submissions   |

See [`.env.example`](.env.example) for the full list.

---

## 📬 Wiring up the contact form

The form posts to [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts),
which validates input server-side with Zod. By default it logs submissions.
To deliver leads, uncomment the provider block in that file (a Resend example
is included) and set the corresponding environment variables.

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. In [Vercel](https://vercel.com/new), **Import** the repository.
   The framework preset (Next.js) is detected automatically and
   [`vercel.json`](vercel.json) is respected.
3. Add environment variables (at minimum `NEXT_PUBLIC_SITE_URL`) under
   **Project → Settings → Environment Variables**.
4. Click **Deploy**.

Or via the CLI:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

After deploying, point your custom domain at the project and update
`NEXT_PUBLIC_SITE_URL` accordingly.

---

## 📈 Performance & Accessibility

- Fonts loaded via `next/font` with `display: swap`
- Self-contained UI primitives (minimal dependency surface)
- Images served as AVIF/WebP via `next/image`
- `prefers-reduced-motion` respected globally
- Semantic landmarks, labelled controls and visible focus rings

Run a Lighthouse audit on the production build (`npm run build && npm run start`)
to verify 90+ scores.

---

## 📁 Project structure

```
src/
├── app/
│   ├── api/contact/route.ts   # contact form endpoint
│   ├── privacy/ · terms/      # legal pages
│   ├── layout.tsx · page.tsx  # root layout & home
│   ├── globals.css            # design tokens & base styles
│   ├── sitemap.ts · robots.ts · manifest.ts · opengraph-image.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/                # navbar, footer
│   ├── sections/              # 10 page sections + contact form
│   ├── ui/                    # button, card, badge, input, accordion, …
│   ├── theme-provider.tsx · theme-toggle.tsx · back-to-top.tsx
│   └── structured-data.tsx · logo.tsx
└── lib/
    ├── site.ts · content.ts   # configuration & content
    ├── contact-schema.ts      # shared Zod schema
    └── utils.ts
```

---

## 📝 License

Proprietary — © TECH3ON. All rights reserved.
