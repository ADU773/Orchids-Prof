This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# ADVAITH Portfolio Website

A modern, animated portfolio website built with Next.js, Framer Motion, and Three.js.

---

## Project Structure & File Contents

### Pages (`src/app/`)

| File | Description | What to Edit |
|------|-------------|--------------|
| `src/app/page.tsx` | Main homepage - assembles all sections | Section order, loading behavior |
| `src/app/privacy/page.tsx` | Privacy Policy page | Privacy policy content |
| `src/app/terms/page.tsx` | Terms of Service page | Terms content |
| `src/app/cookies/page.tsx` | Cookie Policy page | Cookie policy content |
| `src/app/project/[id]/page.tsx` | Individual project detail pages | **Project data, images, descriptions** (see below) |

---

### Components (`src/components/`)

| File | Description | What to Edit |
|------|-------------|--------------|
| `Navbar.tsx` | Navigation bar with mobile menu | Nav links, logo text "ADVAITH" |
| `HeroSection.tsx` | Hero section with animated text | Main title "ADVAITH", tagline text |
| `AboutSection.tsx` | About/bio section | Bio text, skills, experience info |
| `FeaturesSection.tsx` | Features/services section | Service offerings, capabilities |
| `ShowcaseSection.tsx` | 3D card project showcase | Project titles on cards |
| `CTASection.tsx` | Call-to-action section | CTA text, button labels |
| `ContactSection.tsx` | Contact form section | Email, location, availability |
| `Footer.tsx` | Footer with social links | Social URLs, copyright text |
| `LoadingScreen.tsx` | Initial loading animation | Loading text, animation |
| `CustomCursor.tsx` | Custom cursor effect | Cursor style |
| `SmoothScroll.tsx` | Smooth scrolling wrapper | Scroll behavior |
| `GothicCards.tsx` | 3D playing cards in hero | Card designs |

---

## Key Files to Edit

### 1. Project Data (`src/app/project/[id]/page.tsx`)

This file contains ALL project information. Look for the `projectsData` object:

```typescript
const projectsData = {
  "smart-parking": {
    title: "SMART PARKING",
    category: "IOT PLATFORM",
    year: "2023",
    description: "...",
    longDescription: "...",
    overview: "...",
    role: "Lead Developer",
    duration: "8 months",
    team: "4 developers",
    technologies: ["Arduino", "React Native", ...],
    features: [...],
    challenges: [...],
    process: [...],
    results: [...],
    images: [...]
  },
  "fromflow": { ... },
  "activity-tracker": { ... },
  "malayalam-fml": { ... }
}
```

**Project IDs:** `smart-parking`, `fromflow`, `activity-tracker`, `malayalam-fml`

---

### 2. Project Images

Place images in `/public/images/` with these names:

| Project | Image Files |
|---------|-------------|
| Smart Parking | `smart-parking-1.jpg`, `smart-parking-2.jpg`, `smart-parking-3.jpg`, `smart-parking-4.jpg` |
| FromFlow | `fromflow-1.jpg`, `fromflow-2.jpg`, `fromflow-3.jpg`, `fromflow-4.jpg` |
| Activity Tracker | `activity-tracker-1.jpg`, `activity-tracker-2.jpg`, `activity-tracker-3.jpg`, `activity-tracker-4.jpg` |
| Malayalam FML | `malayalam-fml-1.jpg`, `malayalam-fml-2.jpg`, `malayalam-fml-3.jpg`, `malayalam-fml-4.jpg` |

---

### 3. Contact Information (`src/components/ContactSection.tsx`)

```typescript
// Line ~140-150 - Update these:
<a href="mailto:hello@advaith.dev">hello@advaith.dev</a>
<p>Remote / Worldwide</p>
<p>Open for projects</p>
```

---

### 4. Social Links (`src/components/Footer.tsx`)

```typescript
const socialLinks = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Discord", url: "https://discord.com" },
  { name: "GitHub", url: "https://github.com" },
];
```

---

### 5. Brand Name

The brand "ADVAITH" appears in multiple files:
- `src/components/Navbar.tsx` (line ~23)
- `src/components/HeroSection.tsx` (line ~50)
- `src/components/Footer.tsx` (line ~30)
- `src/components/CTASection.tsx` (line ~90)

---

## Quick Reference: Component Locations

| Section on Website | Component File |
|-------------------|----------------|
| Loading screen | `LoadingScreen.tsx` |
| Navigation | `Navbar.tsx` |
| Hero (main title + cards) | `HeroSection.tsx` + `GothicCards.tsx` |
| About section | `AboutSection.tsx` |
| Features/Services | `FeaturesSection.tsx` |
| Project Cards (3D) | `ShowcaseSection.tsx` |
| CTA ("Enter the ADVAITH") | `CTASection.tsx` |
| Contact Form | `ContactSection.tsx` |
| Footer | `Footer.tsx` |

---

## Routes

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/project/smart-parking` | Smart Parking project |
| `/project/fromflow` | FromFlow project |
| `/project/activity-tracker` | Activity Tracker project |
| `/project/malayalam-fml` | Malayalam FML project |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |

---

## Development

```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm run lint    # Run linter
```

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js + React Three Fiber
- **Language:** TypeScript
