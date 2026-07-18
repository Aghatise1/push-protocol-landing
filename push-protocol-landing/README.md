# Push Protocol — Pre-launch Landing Page

Responsive single-page marketing / waitlist site for **Push Protocol**, a decentralized Web3 job marketplace.

> Status: **In active development — MVP targeted late 2026.**  
> This site does **not** connect wallets, process payments, or claim live users/transactions.

## Stack

- Plain HTML / CSS / JS (no build step)
- [Tailwind CSS](https://tailwindcss.com) via CDN
- Fonts: Space Grotesk + Inter (Google Fonts)

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# PowerShell (from this folder)
python -m http.server 8080
# then open http://localhost:8080
```

Or double-click `index.html`.

## What’s included

| Section | Notes |
|--------|--------|
| Status banner | “In active development — MVP targeted for late 2026” in the hero |
| Problem / Solution | 4×4 mirrored cards |
| How It Works | 6-step job lifecycle |
| Live Preview | Sample jobs + profiles; **Apply** opens Coming Soon modal |
| Comparison table | Push vs Upwork/Fiverr vs recruiter |
| Roadmap | Phase 1–3, honest dates |
| Founder | Placeholder — **fill before publish** |
| FAQ | 6 core questions |
| Waitlist | Segmented Employer / Talent form |
| Footer | X `@push__io`, Discord placeholder, Built on Solana |

## Logo, images & backend

**Full guide:** open [`SETUP.md`](./SETUP.md)

Quick hits:

| Task | Action |
|------|--------|
| Logo | Drop file into `assets/logo.svg` or `logo.png` |
| Images | See `assets/README.md` |
| Backend | Set `FORM_ENDPOINT` in `app.js` (Formspree) |
| Export test signups | Browser console → `pushWaitlist.export()` |

### Fill before publish

1. Founder bio in `#founder` (real, checkable details)
2. Discord invite URL
3. `FORM_ENDPOINT` for real email capture
4. Optional `assets/og.png` for X previews

## Design

- Dark-mode first: near-black (`#0a0b0d`) + electric green accent (`#00e5a8`)
- Mobile-first (optimized for X/Twitter traffic)
- No purple-gradient crypto template look
- No fabricated stats

## Brand

- **Name:** Push Protocol · **X:** [@push__io](https://x.com/push__io)
- **Tagline used:** “Built on trust, not gatekeepers.”
- **One-liner:** Trustless talent discovery for Web3 — post jobs, get paid, build reputation that follows you.
- **Fee:** 12.5% platform / 87.5% worker on approval

## License

© Push Protocol. All rights reserved.
