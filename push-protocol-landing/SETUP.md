# Push Protocol — How to add logo, images & backend

## Design

- **Default:** white background + blue accent (`#2563eb`)
- **Dark mode:** moon/sun button in the navbar (saves your choice)
- Waitlist: **email + roles only** (wallet field removed)

## 1. Add your logo

1. Put your file in the `assets` folder:
   - Best: `assets/logo.svg`
   - Or: `assets/logo.png` (square, at least 64×64)
2. If you use PNG, open `index.html` and change every:
   ```html
   src="assets/logo.svg"
   ```
   to:
   ```html
   src="assets/logo.png"
   ```
3. Hard-refresh the browser: **Ctrl + F5**

Same idea for the tab icon: replace `assets/favicon.svg`.

**Full image guide (founder photo, hero, OG):** see `assets/README.md`.

---

## 2. Add images / avatars

| What | Where | How |
|------|--------|-----|
| Logo | `assets/logo.svg` or `.png` | Already linked in navbar + footer |
| Favicon | `assets/favicon.svg` | Linked in `<head>` |
| Share image (X) | `assets/og.png` (1200×630) | Uncomment `og:image` meta tags after hosting |
| Founder photo | `assets/avatars/founder.jpg` | Replace the letter avatar in `#founder` |
| Hero art | `assets/hero.png` | Optional — insert an `<img>` under the hero CTAs |

**Founder photo example** (replace the green letter box):

```html
<img src="assets/avatars/founder.jpg" alt="Aghatise" class="avatar-img avatar-lg" width="64" height="64" />
```

---

## 3. Connect a real backend (waitlist)

Right now, every signup is saved **on this browser** (`localStorage`). That works for testing, but not for collecting emails from the public.

### Option A — Web3Forms (Active)

Already wired in `app.js`. No backend server required.

1. Open `app.js` and ensure `WAITLIST_PROVIDER = "web3forms";`
2. Insert your free Access Key from web3forms.com into the `WEB3FORMS_ACCESS_KEY` variable.
3. Submit the waitlist on the live site. Submissions will go straight to your email.

### Option B — Tally

1. Create a form at [https://tally.so](https://tally.so)
2. Use their webhook / form endpoint (or embed)
3. Paste the webhook URL into `FORM_ENDPOINT` in `app.js`

### Option C — Google Sheet (free, slightly more steps)

1. Create a Google Sheet with headers:  
   `segment | email | roles | hiring_needs | skills | wallet | submitted_at`
2. Extensions → Apps Script → paste a `doPost` that appends a row
3. Deploy → Web app → “Anyone” can access → copy URL
4. Set that URL as `FORM_ENDPOINT` in `app.js`

### Export local test signups

While testing (even without Formspree):

1. Open the site
2. Press **F12** → Console
3. Run:
   ```js
   pushWaitlist.list()     // see signups
   pushWaitlist.export()   // download JSON file
   pushWaitlist.clear()    // wipe local data
   ```

---

## 4. Host the website (go public)

| Host | How |
|------|-----|
| **Netlify Drop** | Drag the `push-protocol-landing` folder to [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | Import folder / GitHub repo |
| **GitHub Pages** | Push repo → Settings → Pages → root |

After hosting, set your real domain in Open Graph image URLs.

---

## 5. Make it better (checklist)

- [ ] Replace logo + favicon with brand assets  
- [ ] Fill founder bio with real, checkable details  
- [ ] Connect `FORM_ENDPOINT` (Formspree / Sheet)  
- [ ] Add Discord invite URL in the footer  
- [ ] Add `og.png` for X previews  
- [ ] Host on Netlify/Vercel and share `https://…`  
- [ ] Optional: custom domain (`push.io` or similar when ready)

---

## What’s already improved on the site

- **Roles section** — full Web3 stack (community, growth, design, engineering, ops/legal)
- **24 sample jobs** — not just coding; filter by category
- **Diverse talent cards** — CM, content, design, BD, art, engineering
- **Waitlist role chips** — all 30 roles selectable
- **Local signup backup** + optional remote endpoint
