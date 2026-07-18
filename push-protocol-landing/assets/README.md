# Custom images & animations

You control almost everything from **one file**:

`push-protocol-landing/media-config.js`

---

## A) Add images (easiest way)

### Step 1 — Drop files into `assets/`

| File name | Shows where | Size tip |
|-----------|-------------|----------|
| `logo.svg.png` or `logo.png` | Navbar + footer | Square 128×128+ |
| `favicon.svg.png` | Browser tab | 32–64 px |
| `hero.png` | Under hero buttons | ~1200×600 |
| `roles-banner.png` | Top of Roles section | ~1200×300 |
| `how-it-works.png` | How It Works section | ~1200×400 |
| `founder.jpg` | Founder photo | Square ~400×400 |
| `og.png` | X/Twitter share (after hosting) | **1200×630** |

### Step 2 — Point to the file in `media-config.js`

```js
window.PUSH_MEDIA = {
  logo: "assets/logo.svg.png",   // ← your logo (already set)
  favicon: "assets/favicon.svg.png",
  hero: "assets/hero.png",       // ← put hero.png in assets/
  rolesBanner: "assets/roles-banner.png",
  howItWorks: "assets/how-it-works.png",
  founder: "assets/founder.jpg",
  og: "assets/og.png",
};
```

### Step 3 — Save + hard refresh

**Ctrl + F5** in the browser.

- If the file **exists** → it appears automatically  
- If the file is **missing** → that slot stays hidden (no broken image)

Leave a path as `""` to force-hide a slot:

```js
hero: "",
```

---

## B) Turn animations on / off

Same file: `media-config.js`

```js
window.PUSH_ANIMATIONS = {
  heroFloat: true,         // hero image gently floats
  buttonGlow: true,        // "I'm Hiring" button glows
  gradientHeadline: false, // animated blue gradient on title (try true)
  lifecyclePulse: true,    // Escrow / Pay chips pulse
  statusShimmer: false,    // shiny sweep on status banner
};
```

Set any value to `true` or `false`, save, **Ctrl + F5**.

---

## C) Add animations to any element yourself

In `index.html`, add a class to any tag:

| Class | Effect |
|-------|--------|
| `anim-float` | Slow up/down float |
| `anim-bob` | Small bounce |
| `anim-pulse-glow` | Soft blue glow pulse |
| `anim-shimmer` | Light sweep across |
| `anim-gradient-text` | Moving gradient text |
| `anim-btn-glow` | Button glow |
| `reveal` | Fade up when scrolled into view |
| `reveal-left` | Slide in from left |
| `reveal-right` | Slide in from right |
| `reveal-scale` | Zoom in slightly |
| `reveal-delay-1` … `5` | Stagger timing |

**Example:**

```html
<div class="card reveal reveal-left">
  ...
</div>

<img src="assets/hero.png" class="hero-img anim-float" alt="..." />
```

All animation styles live in `animations.css` — edit that file to change speed/style.

---

## D) Your logo right now

Your files are:

- `assets/logo.svg.png`
- `assets/favicon.svg.png`

Those are already wired in `media-config.js`.  
If you rename to `logo.png`, update:

```js
logo: "assets/logo.png",
```

---

## E) Add a brand-new image slot (advanced)

1. Put file in `assets/my-pic.png`
2. In `media-config.js` add:
   ```js
   myPic: "assets/my-pic.png",
   ```
3. In `index.html` where you want it:
   ```html
   <div class="media-slot media-slot--banner reveal" data-media-slot="myPic">
     <img alt="Description" loading="lazy" />
   </div>
   ```
4. Refresh — if the file loads, it shows.

---

## Tips

- Prefer **PNG** or **JPG** (not PDF)
- No spaces in file names → `my-hero.png` not `my hero.png`
- Always **Ctrl + F5** after changes
- Keep images under ~1MB so the site stays fast
