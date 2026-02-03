# FloCreativeLab

A professional video editing and post-production agency website built with Next.js.

## About FloCreativeLab

**Project Type:** Website  
**Location:** Lagos, Nigeria  
**Industry:** Video Production & Post-Production

FloCreativeLab is a premium post-production agency partnering with visionary directors, artists, and brands to create visually striking content. The founder is a professional video editor specializing in:

- **Polished Music Videos** — Crafting visual experiences that amplify the power of music
- **TV Commercials** — Creating compelling brand stories that drive results  
- **Visual Effects (VFX)** — Bringing creative visions to life with cinematic excellence
- **Color Grading** — Professional color correction that sets the perfect mood and tone
- **Motion Graphics** — Dynamic visual elements that enhance storytelling

### Mission Statement

> Driven by a passion for transforming raw footage into refined, cinematic visuals, we work closely with artists and brands to deliver edits that feel intentional, polished, and aligned with the story being told.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS, SCSS
- **Animations:** GSAP, Framer Motion
- **Content:** Markdown-based services and projects
- **Fonts:** Satoshi, Instrument Serif

## Getting Started

```bash
# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/app                    — Next.js App Router pages
  /about               — About page with team info
  /contact             — Contact form page
  /faq                 — Frequently asked questions
  /flim-making
    /services/[slug]   — Service detail pages (music-videos, commercials)
    /project/[slug]    — Project detail pages
/components
  /homepage-14         — Main homepage components
  /shared              — Reusable components (Navbar, Footer, CTA, FAQ)
  /animation           — Animation wrapper components
/data
  /flim-making/services — Service markdown files
  faq.json, faqV2.json, faqV3.json — FAQ data
  footer.json          — Footer navigation data
/public
  /images              — Static images and assets
  /fonts               — Custom font files
```

## Main Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services showcase, work portfolio, testimonials |
| `/about` | Company story, team members, awards |
| `/contact` | Contact form for project inquiries |
| `/faq` | Frequently asked questions |
| `/flim-making/services/music-videos` | Music video editing service details |
| `/flim-making/services/commercials` | TV commercial production details |

## Featured Work

The homepage showcases:
- **Music Videos** — 6 embedded YouTube videos from artists like Flavour, D'Banj, Qing Madi, Ms Banks
- **Commercials** — 4 embedded YouTube videos of commercial work

## Key Components

- **HeroV14** — Video background hero with main CTA
- **OurWorkShowcase** — YouTube video grid for music videos and commercials
- **ServicesV13** — Services overview with hover effects
- **WhyChooseUsV3/V6** — Value propositions (craft, VFX, turnaround, color grading)
- **TestimonialV9** — Client testimonials slider
- **FaqV2** — Accordion FAQ component

## Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Brand Guidelines

- **Primary Focus:** Video editing, post-production, VFX
- **Target Audience:** Artists, musicians, brands, production companies
- **Tone:** Professional, creative, cinematic
- **Location:** Lagos, Nigeria
