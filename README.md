# FindMyCar — Guided Car Recommendation Wizard

A short, opinionated questionnaire that takes confused car buyers from "I have no idea" to "here are my top 5 cars and why" in under 60 seconds.

Live demo: https://cardekho-findmycar.vercel.app/

---

## What I Built & Why

Car buyers in India face 100+ models across dozens of brands. Filters don't help when you don't know what to filter by, and chatbots are unreliable in a small window. I built a **4-step guided wizard** that:

1. Collects budget range (slider)
2. Asks primary use cases (multi-select cards)
3. Picks top 2 priorities (safety, mileage, performance, comfort, resale)
4. Fuel preference (radio)

Then runs a **scoring engine** server-side against a database of ~100 real Indian-market cars and returns ranked results with human-readable "why this fits you" explanations. Users can also select 2 cars for a **real-time side-by-side comparison** that appears inline.

## What I Deliberately Cut

- **Auth / user accounts** — unnecessary for a recommendation tool MVP
- **Image assets** — would need CDN/hosting; focused on data and logic instead
- **Detailed car pages** — results give enough info to shortlist; deep dives can come later
- **Mobile-first responsive polish** — layout works but didn't spend time on breakpoint fine-tuning
- **Search / free-text filters** — the whole point is the guided flow replaces the need for manual filtering
- **Analytics / tracking** — would add post-launch

---

## Tech Stack & Why

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js (App Router) | Server Actions for the scoring engine, no separate API layer |
| Database | Turso (libSQL) | SQLite-compatible, works on Vercel's edge, free tier |
| ORM | Drizzle | Type-safe, lightweight, great DX with SQLite |
| Styling | Tailwind CSS + shadcn/ui | Fast iteration, consistent components |
| Deployment | Vercel | Zero-config for Next.js, environment variables for Turso |

Started with local SQLite + better-sqlite3 for fast iteration, then swapped to Turso for production compatibility in the final stretch.

---

## AI Tools: What I Delegated vs. Did Manually

**Delegated to AI (GitHub Copilot / Claude):**
- Scaffolding: project setup, dependency installation, boilerplate generation
- Schema definition and seed data generation (~100 realistic Indian cars with accurate specs)
- Component structure for each wizard step (repetitive card/button patterns)
- Scoring engine implementation from my pseudocode spec
- Drizzle ↔ Turso migration (client swap, config updates)

**Done manually / directed by me:**
- Product decisions (what to build, user flow, what to cut)
- Scoring weights and algorithm design
- UX decisions (multi-select vs single, comparison layout, state preservation on back-navigation)
- Bug identification and fix direction (slider label alignment, overlapping elements)
- Architecture choices (server actions vs API routes, split layout for compare)

**Where AI helped most:**
- Generating 100 rows of realistic seed data with accurate Indian car specs — would have taken 30+ minutes manually
- Boilerplate reduction on repetitive UI components (5 wizard steps with similar patterns)
- Quick type-safe refactors across multiple files simultaneously

**Where it got in the way:**
- Sometimes over-engineered solutions 
- Initial slider component had type mismatches with the shadcn/base-ui API 
- Had to explicitly direct the comparison UX multiple times to get the inline split-panel behavior I wanted vs. the default "navigate to a new page" pattern it suggested

---

## If I Had Another 4 Hours

1. **Landing page** — hero section with "Find your car in 60 seconds" CTA, brief social proof
2. **Mobile responsive polish** — the compare panel should stack vertically on mobile
3. **Car images** — pull from a CDN or use placeholder illustrations
4. **Share results** — generate a shareable URL with encoded preferences
5. **"Why NOT this car"** — show trade-offs (e.g., "lower mileage than your top pick")
6. **Weighted re-ranking** — let users drag priorities to fine-tune after seeing results
7. **More cars** — expand to 300+ with variant-level data

---

## Getting Started

```bash
npm install
```

Set environment variables in `.env.local`:
```
TURSO_DATABASE_URL=libsql://your-db.turso.io
TURSO_AUTH_TOKEN=your-token
```

Run locally:
```bash
npm run dev
```

Seed the database (after Turso is set up):
```bash
npx tsx src/db/seed.ts
```

Or import the SQL dump directly:
```bash
turso db shell your-db-name < turso-export.sql
```
