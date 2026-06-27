# Neural Bit Links — Motion Website

A responsive, animated marketing site for **Neural Bit Links**, an AI tool
development studio. Content is adapted from neuralbts.com and rebuilt as a modern
motion-driven experience.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling and responsive layout
- **Framer Motion** — page/section reveals, nav, accordions, staggered grids
- **GSAP** (ScrollTrigger) — animated stat counters
- **Three.js** via **@react-three/fiber** — the live neural-network hero
- Deploys free on **Vercel**

## Pages

`/` Home · `/about` · `/services` · `/products` · `/clients` · `/blog` · `/contact`

All copy lives in [`lib/content.ts`](lib/content.ts) — edit there to change text.

## Run locally

> Requires Node.js 18.18+ (built and verified on Node 24).

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Deploy to Vercel (free) with automatic GitHub deploys

This repository is the project root (the Next.js app lives at the top level).

1. **Create a GitHub repo and push** (run inside this folder):
   ```bash
   git init
   git add -A
   git commit -m "Neural Bit Links motion website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. **Import to Vercel:** go to https://vercel.com/new, pick the GitHub repo.
   - Framework preset: **Next.js** (auto-detected)
   - Root directory: **`./`** (leave as default)
   - Build command / output: **defaults** (no changes needed)
3. Click **Deploy**. Vercel builds and gives you a live URL.
4. **Automation:** once connected, every `git push` to `main` triggers a new
   production deploy, and every pull request gets its own preview URL — no extra
   CI configuration required.

### Notes
- No environment variables are required to run or deploy.
- The contact form is a front-end demo (shows a success state). To receive
  submissions, wire `components/ContactForm.tsx` to a Next.js route handler or a
  service like Formspree / Resend.
- Replace the `#` social links in `lib/content.ts` with real URLs when ready.
