# Sai Aryan Soma — Personal Portfolio

A world-class personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Designed with a premium, minimal aesthetic inspired by apple.com, linear.app, and vercel.com.

---

## Live Demo

> Deploy to Vercel to get your live URL — see [Deployment](#deployment) below.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | SSG, routing, performance |
| **Language** | TypeScript 5 | Type safety across all components |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first, CSS variable design system |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) | Subtle scroll-triggered fade-ins |
| **Font** | Inter (Google Fonts) | Clean, highly readable system font |
| **Rendering** | Static Site Generation (SSG) | Lighthouse 95+ performance |
| **Deployment** | [Vercel](https://vercel.com/) | Zero-config, edge CDN |

---

## Features

- **Dark / light mode** — system-aware detection with persistent toggle, no flash on load
- **Smooth scroll animations** — Framer Motion `whileInView` fade-ups, not constant animations
- **Fully responsive** — mobile-first layout, tested across all breakpoints
- **Single data file** — all content lives in `content/portfolioData.ts`; zero layout changes needed to update copy
- **SEO ready** — Open Graph metadata, canonical tags, robots config
- **No skill bars, no carousels, no glassmorphism** — calm, sharp, premium

---

## Project Structure

```
Portfolio Website/
├── app/
│   ├── globals.css           # Tailwind v4 + CSS custom properties (light & dark tokens)
│   ├── layout.tsx            # Root layout — Inter font, dark mode init, metadata
│   └── page.tsx              # Main page composing all sections
│
├── components/
│   ├── Navbar.tsx            # Fixed nav with scroll-blur, section links, dark mode toggle
│   ├── Hero.tsx              # Full-height hero with staggered entrance animations
│   ├── About.tsx             # Personal bio + achievements + certifications (2-col)
│   ├── Projects.tsx          # 2-column project grid with hover elevation
│   ├── Skills.tsx            # Categorised tech stack (5 groups)
│   ├── Education.tsx         # Vertical timeline + numbered certifications
│   ├── Contact.tsx           # Minimal contact form (mailto) + direct links
│   ├── Footer.tsx            # Single-row clean footer
│   ├── FadeIn.tsx            # Reusable Framer Motion scroll-reveal wrapper
│   └── ThemeToggle.tsx       # Sun/moon icon toggle with localStorage persistence
│
├── content/
│   └── portfolioData.ts      # ★ Single source of truth — edit all content here
│
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── .gitignore
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → http://localhost:3000

# 3. Production build (verify before deploy)
npm run build
npm start
```

---

## Updating Content

All portfolio content is managed from a **single file**:

```
content/portfolioData.ts
```

This includes:

| Key | What it controls |
|---|---|
| `name`, `title`, `headline` | Hero section identity |
| `about` | About section bio paragraph |
| `email`, `github`, `linkedin`, `phone` | Contact + social links everywhere |
| `projects[]` | Project cards — title, description, tech, link, period |
| `skills[]` | Tech stack categories and items |
| `education[]` | Academic timeline — degree, institution, grade, coursework |
| `certifications[]` | Certification list — name + issuer |
| `achievements[]` | Achievement bullet points |

**To add a project**, append to the `projects` array:

```ts
{
  title: 'My New Project',
  description: 'Two-line description, achievement-focused.',
  tech: ['React', 'Python'],
  github: 'https://github.com/SaiAryanS/my-repo',
  live: 'https://my-project.vercel.app',   // or null
  period: 'Jan 2026',
  featured: true,   // shows in top 2-col grid
},
```

---

## Design System

### Color Tokens (CSS Variables)

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#ffffff` | `#09090b` |
| `--bg-secondary` | `#f9fafb` | `#111113` |
| `--card` | `#ffffff` | `#111113` |
| `--card-hover` | `#f9fafb` | `#18181b` |
| `--text` | `#09090b` | `#fafafa` |
| `--text-muted` | `#71717a` | `#71717a` |
| `--border` | `#e4e4e7` | `#27272a` |
| `--accent` | `#2563eb` | `#3b82f6` |
| `--accent-hover` | `#1d4ed8` | `#2563eb` |

### Typography Scale

| Role | Size | Weight |
|---|---|---|
| Hero name | `text-7xl` (4.5rem) | 700 Bold |
| Section headings | `text-4xl` (2.25rem) | 700 Bold |
| Project titles | `text-base` (1rem) | 600 Semibold |
| Body text | `text-base` (1rem) | 400 Regular |
| Labels / tags | `text-xs` (0.75rem) | 500 Medium |

### Spacing Scale

8px base unit — all spacing uses multiples of 8 (`p-2`, `p-4`, `p-6`, `p-8`, `p-16`, `py-24`, `py-32`).

---

## Deployment

### Vercel (Recommended — 2 minutes)

```bash
# Option A: CLI
npm install -g vercel
vercel   # follow prompts, auto-detects Next.js

# Option B: GitHub Integration
# 1. Push to a GitHub repository
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/SaiAryanS/portfolio.git
git push -u origin main

# 2. Go to vercel.com → New Project → Import GitHub repo
# 3. Click Deploy — done. Vercel auto-deploys on every push.
```

No environment variables are required. The site is fully static.

### Custom Domain

In the Vercel dashboard → **Settings → Domains** → add your domain and update your DNS records with the provided values.

---

## Performance Notes

- Static generation (SSG) — all pages pre-rendered at build time
- Google Fonts loaded with `display: swap` — no render blocking
- Framer Motion animations are `whileInView` only — no idle CPU cost
- No images (except resume PNGs which are not served) — minimal network payload
- Tailwind v4 purges all unused CSS in production

Target Lighthouse scores: **Performance 95+ · Accessibility 100 · Best Practices 100 · SEO 100**

---

## License

MIT — free to use and adapt. Attribution appreciated but not required.

---

*Built with Next.js · Tailwind CSS · Framer Motion · TypeScript*
