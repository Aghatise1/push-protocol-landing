/**
 * ═══════════════════════════════════════════════════════════
 * CUSTOM IMAGES — edit this file only
 * ═══════════════════════════════════════════════════════════
 *
 * How to add an image:
 * 1. Put the file in the assets/ folder (e.g. assets/hero.png)
 * 2. Set the path below (keep the quotes)
 * 3. Save + hard-refresh browser (Ctrl + F5)
 *
 * Leave a value as "" (empty) to hide that slot.
 * Tip: file names with spaces break paths — use my-photo.jpg not "my photo.jpg"
 */
window.PUSH_MEDIA = {
  // Navbar + footer logo (you already have logo.svg.png)
  logo: "assets/logo.svg.png",

  // Browser tab icon
  favicon: "assets/favicon.svg.png",

  // Big image under the hero buttons (recommended: 1200×600 PNG/JPG)
  hero: "assets/hero.png",

  // Optional strip image above the Roles section
  // (your file is currently named roles-banner.png.jpg)
  rolesBanner: "assets/roles-banner.png.jpg",

  // Optional image beside How It Works
  howItWorks: "assets/how-it-works.png",

  // Founder photo (square works best)
  // (your file is currently named founder.jpg.jpg)
  founder: "assets/founder.jpg.jpg",

  // Open Graph / X share image (when you host the site: 1200×630)
  // Also set the full https URL in index.html meta tags after hosting
  og: "assets/og.png",
};

/**
 * CUSTOM ANIMATIONS — turn features on/off
 * true = on, false = off
 */
window.PUSH_ANIMATIONS = {
  // Soft float on hero media
  heroFloat: true,
  // Glowing primary buttons
  buttonGlow: true,
  // Animated gradient on main headline
  gradientHeadline: false,
  // Pulse on lifecycle "Escrow" / "Pay + Badge" chips
  lifecyclePulse: true,
  // Shimmer on status banner
  statusShimmer: false,
};
