/**
 * Push Protocol — pre-launch landing page
 * Waitlist: Web3Forms only. Local backup in localStorage.
 */
(function () {
  "use strict";

  // ═══════════════════════════════════════════════════════
  //  WAITLIST BACKEND: Web3Forms (Active)
  // ═══════════════════════════════════════════════════════
  const WEB3FORMS_ACCESS_KEY = "e9019ed0-76a8-4d7e-9987-1acd09ec132c";
  const STORAGE_KEY = "push_waitlist_signups";

  // ── Sample jobs (demo only — diversified roles) ────────
  const SAMPLE_JOBS = [
    {
      title: "Community Manager — Discord + X",
      category: "community",
      pay: "$400 USDC",
      deadline: "30 days",
      tags: ["Discord", "X", "AMAs", "Onboarding"],
    },
    {
      title: "Project Ambassador (Part-time)",
      category: "community",
      pay: "$150 USDC",
      deadline: "Ongoing",
      tags: ["Ambassador", "Events", "Grassroots"],
    },
    {
      title: "Discord / Telegram Moderator",
      category: "community",
      pay: "$200 USDC",
      deadline: "14 days",
      tags: ["Moderation", "Telegram", "Community"],
    },
    {
      title: "Raider Squad Lead — Launch Week",
      category: "community",
      pay: "$175 USDC",
      deadline: "7 days",
      tags: ["Raiding", "X Spaces", "Engagement"],
    },
    {
      title: "Shiller / Grassroots Promoter",
      category: "growth",
      pay: "$120 USDC",
      deadline: "10 days",
      tags: ["Growth", "Content", "Threads"],
    },
    {
      title: "Social Media Manager — Multi-channel",
      category: "growth",
      pay: "$450 USDC",
      deadline: "30 days",
      tags: ["X", "LinkedIn", "Content Calendar"],
    },
    {
      title: "Crypto Content Creator — Threads + Memes",
      category: "growth",
      pay: "$280 USDC",
      deadline: "14 days",
      tags: ["Content", "Memes", "Narrative"],
    },
    {
      title: "Partnerships / BD Lead",
      category: "growth",
      pay: "$800 USDC",
      deadline: "45 days",
      tags: ["BD", "Integrations", "Ecosystem"],
    },
    {
      title: "Head of Growth / CMO (Contract)",
      category: "growth",
      pay: "$1,200 USDC",
      deadline: "60 days",
      tags: ["Growth", "Go-to-market", "Brand"],
    },
    {
      title: "Web3 UI/UX Designer — Job Board",
      category: "design",
      pay: "$550 USDC",
      deadline: "21 days",
      tags: ["Figma", "UI/UX", "Design System"],
    },
    {
      title: "NFT Artist / Illustrator — Collection",
      category: "design",
      pay: "$700 USDC",
      deadline: "28 days",
      tags: ["Illustration", "PFPs", "Brand"],
    },
    {
      title: "Web3 Game Designer — Core Loop",
      category: "design",
      pay: "$650 USDC",
      deadline: "30 days",
      tags: ["Game Design", "Token Utility", "UX"],
    },
    {
      title: "Technical Writer — Protocol Docs",
      category: "growth",
      pay: "$250 USDC",
      deadline: "7 days",
      tags: ["Docs", "MDX", "Dev Audience"],
    },
    {
      title: "Smart Contract Developer — Escrow",
      category: "engineering",
      pay: "$1,000 USDC",
      deadline: "14 days",
      tags: ["Rust", "Anchor", "Solana"],
    },
    {
      title: "Front-End Web3 Developer",
      category: "engineering",
      pay: "$600 USDC",
      deadline: "10 days",
      tags: ["React", "Wallet UX", "TypeScript"],
    },
    {
      title: "Smart Contract Auditor — Escrow Flow",
      category: "engineering",
      pay: "$1,500 USDC",
      deadline: "21 days",
      tags: ["Audit", "Security", "Solana"],
    },
    {
      title: "Tokenomics Designer / Economist",
      category: "ops",
      pay: "$750 USDC",
      deadline: "21 days",
      tags: ["Tokenomics", "Emissions", "Research"],
    },
    {
      title: "DeFi Strategist / Research Analyst",
      category: "ops",
      pay: "$600 USDC",
      deadline: "14 days",
      tags: ["Research", "DeFi", "Reports"],
    },
    {
      title: "DAO Contributor — Governance Ops",
      category: "ops",
      pay: "$320 USDC",
      deadline: "Ongoing",
      tags: ["DAO", "Governance", "Ops"],
    },
    {
      title: "Treasury Manager (Part-time)",
      category: "ops",
      pay: "$500 USDC",
      deadline: "30 days",
      tags: ["Treasury", "Multisig", "Reporting"],
    },
    {
      title: "Web3 Legal Counsel — Review",
      category: "ops",
      pay: "$900 USDC",
      deadline: "14 days",
      tags: ["Legal", "Terms", "Compliance"],
    },
    {
      title: "Node Operator / Validator Setup",
      category: "engineering",
      pay: "$380 USDC",
      deadline: "10 days",
      tags: ["Nodes", "DevOps", "Monitoring"],
    },
    {
      title: "Product Manager — Marketplace MVP",
      category: "ops",
      pay: "$700 USDC",
      deadline: "45 days",
      tags: ["Product", "Roadmap", "Specs"],
    },
    {
      title: "Developer Relations (DevRel)",
      category: "growth",
      pay: "$620 USDC",
      deadline: "30 days",
      tags: ["DevRel", "Talks", "SDKs"],
    },
  ];

  const ROLE_OPTIONS = [
    "Community Manager",
    "Project Ambassador",
    "Raider",
    "Shiller / Grassroots Promoter",
    "Discord/Telegram Moderator",
    "DAO Contributor",
    "Bounty Hunter",
    "Smart Contract Developer",
    "Front-End Web3 Developer",
    "Core Blockchain Engineer",
    "Smart Contract Auditor",
    "Web3 DevOps Engineer",
    "Data/Subgraph Engineer",
    "Developer Relations (DevRel)",
    "Head of Growth / CMO",
    "Tokenomics Designer / Economist",
    "Partnerships / Business Development Lead",
    "Social Media Manager",
    "Crypto Content Creator",
    "Technical Writer",
    "Web3 UI/UX Designer",
    "Product Manager",
    "NFT Artist / Illustrator",
    "Metaverse Architect",
    "Web3 Game Designer",
    "Protocol Co-Founder",
    "Treasury Manager",
    "DeFi Strategist / Research Analyst",
    "Web3 Legal Counsel",
    "Node Operator / Validator",
  ];

  // ── Year ────────────────────────────────────────────────
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ── Custom media (from media-config.js) ──────────────────
  const MEDIA = window.PUSH_MEDIA || {};
  const ANIMS = window.PUSH_ANIMATIONS || {};

  function tryLoadImage(src) {
    return new Promise((resolve) => {
      if (!src || typeof src !== "string" || !src.trim()) {
        resolve(false);
        return;
      }
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src.trim();
    });
  }

  async function applyMedia() {
    // Logos
    if (MEDIA.logo) {
      document.querySelectorAll('[data-media="logo"]').forEach((el) => {
        el.src = MEDIA.logo;
      });
    }

    // Favicon
    if (MEDIA.favicon) {
      const link = document.getElementById("favicon-link");
      if (link) link.href = MEDIA.favicon;
    }

    // Image slots (hero, banners, founder, etc.)
    const slots = document.querySelectorAll("[data-media-slot]");
    for (const slot of slots) {
      const key = slot.getAttribute("data-media-slot");
      const src = MEDIA[key];
      const img = slot.querySelector("img");
      if (!img || !src) continue;

      const ok = await tryLoadImage(src);
      if (ok) {
        img.src = src;
        slot.classList.add("is-loaded");
        // Optional float animation on hero (toggle in media-config.js)
        const floatKey = slot.getAttribute("data-anim-float");
        if (floatKey && ANIMS[floatKey] !== false) {
          slot.classList.add("anim-float");
        }
      } else {
        slot.classList.remove("is-loaded");
        // Missing file → slot stays hidden (no broken image icon)
      }
    }
  }

  function applyAnimations() {
    // Gradient headline
    const headline = document.getElementById("hero-headline");
    if (headline && ANIMS.gradientHeadline) {
      headline.classList.add("anim-gradient-text");
    }

    // Button glow (remove if disabled)
    if (ANIMS.buttonGlow === false) {
      document.querySelectorAll(".anim-btn-glow").forEach((el) => {
        el.classList.remove("anim-btn-glow");
      });
    }

    // Lifecycle pulse
    document.querySelectorAll('[data-anim="lifecyclePulse"]').forEach((el) => {
      if (ANIMS.lifecyclePulse !== false) {
        el.classList.add("anim-pulse-soft");
      }
    });

    // Status shimmer
    if (ANIMS.statusShimmer) {
      document.querySelectorAll(".status-banner").forEach((el) => {
        el.classList.add("anim-shimmer");
      });
    }
  }

  applyMedia();
  applyAnimations();

  // ── Theme toggle (light white+blue / dark) ──────────────
  const themeToggle = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");
  const metaTheme = document.getElementById("meta-theme-color");

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("push_theme", theme);
    } catch (_) {}
    if (iconSun && iconMoon) {
      // Show sun icon in dark mode (click to go light), moon in light mode
      iconSun.classList.toggle("hidden", theme !== "dark");
      iconMoon.classList.toggle("hidden", theme === "dark");
    }
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "dark" ? "#0a0f1a" : "#eef4fc");
    }
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  applyTheme(getTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(getTheme() === "dark" ? "light" : "dark");
    });
  }

  // ── Sticky navbar ───────────────────────────────────────
  const navbar = document.getElementById("navbar");
  function updateNav() {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  }
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  // ── Mobile menu ─────────────────────────────────────────
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  function setMenuOpen(open) {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.classList.toggle("hidden", !open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (iconOpen) iconOpen.classList.toggle("hidden", open);
    if (iconClose) iconClose.classList.toggle("hidden", !open);
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });
  }

  // ── Coming Soon modal ───────────────────────────────────
  const modal = document.getElementById("modal");
  let lastFocus = null;

  function openModal() {
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.hidden = false;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function bindComingSoon() {
    document.querySelectorAll("[data-coming-soon]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
      });
    });
  }

  if (modal) {
    modal.querySelectorAll("[data-close-modal]").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (el.tagName === "A" && el.getAttribute("href") === "#waitlist") {
          closeModal();
          return;
        }
        e.preventDefault();
        closeModal();
      });
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  const discordLink = document.getElementById("discord-link");
  if (discordLink) {
    discordLink.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // ── Render sample jobs + filters ────────────────────────
  const jobsGrid = document.getElementById("jobs-grid");
  const jobsEmpty = document.getElementById("jobs-empty");
  let activeFilter = "all";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderJobs(filter) {
    if (!jobsGrid) return;
    activeFilter = filter;
    const list =
      filter === "all"
        ? SAMPLE_JOBS
        : SAMPLE_JOBS.filter((j) => j.category === filter);

    if (jobsEmpty) {
      jobsEmpty.classList.toggle("hidden", list.length > 0);
    }

    jobsGrid.innerHTML = list
      .map((job, i) => {
        const tags = job.tags
          .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
          .join("");
        const delay = i % 4 === 0 ? "" : ` reveal-delay-${i % 4}`;
        return `
          <article class="job-card reveal${delay} visible" data-category="${escapeHtml(job.category)}">
            <div class="flex items-start justify-between gap-3">
              <div>
                <span class="job-cat">${escapeHtml(job.category)}</span>
                <h4 class="font-display font-semibold text-lg leading-snug mt-1">${escapeHtml(job.title)}</h4>
              </div>
              <span class="pay-pill shrink-0">${escapeHtml(job.pay)}</span>
            </div>
            <div class="mt-3 flex flex-wrap gap-1.5">${tags}</div>
            <div class="mt-4 flex items-center justify-between gap-3">
              <span class="text-xs text-muted">Deadline: ${escapeHtml(job.deadline)}</span>
              <button type="button" class="btn-demo" data-coming-soon>Apply</button>
            </div>
          </article>
        `;
      })
      .join("");

    bindComingSoon();
  }

  document.querySelectorAll("#job-filters .filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#job-filters .filter-chip").forEach((c) => {
        c.classList.remove("active");
      });
      chip.classList.add("active");
      renderJobs(chip.dataset.filter || "all");
    });
  });

  renderJobs("all");

  // ── Role chips on waitlist ──────────────────────────────
  const roleChips = document.getElementById("role-chips");
  const rolesField = document.getElementById("roles-field");
  const selectedRoles = new Set();

  function syncRolesField() {
    if (rolesField) rolesField.value = Array.from(selectedRoles).join(", ");
  }

  if (roleChips) {
    // Show a curated first batch + "more" for the rest to avoid clutter
    const primary = ROLE_OPTIONS.slice(0, 12);
    const rest = ROLE_OPTIONS.slice(12);

    function makeChip(label) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "role-chip";
      btn.textContent = label;
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => {
        if (selectedRoles.has(label)) {
          selectedRoles.delete(label);
          btn.classList.remove("active");
          btn.setAttribute("aria-pressed", "false");
        } else {
          selectedRoles.add(label);
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");
        }
        syncRolesField();
      });
      return btn;
    }

    primary.forEach((r) => roleChips.appendChild(makeChip(r)));

    if (rest.length) {
      const moreBtn = document.createElement("button");
      moreBtn.type = "button";
      moreBtn.className = "role-chip role-chip-more";
      moreBtn.textContent = `+ ${rest.length} more roles`;
      moreBtn.addEventListener("click", () => {
        moreBtn.remove();
        rest.forEach((r) => roleChips.appendChild(makeChip(r)));
      });
      roleChips.appendChild(moreBtn);
    }
  }

  // ── Waitlist segments ───────────────────────────────────
  const segments = document.querySelectorAll(".segment");
  const segmentField = document.getElementById("segment-field");
  const fieldEmployer = document.getElementById("field-employer");
  const fieldTalent = document.getElementById("field-talent");
  const fieldInvestor = document.getElementById("field-investor");

  function setSegment(name) {
    segments.forEach((btn) => {
      const active = btn.dataset.segment === name;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    if (segmentField) segmentField.value = name;
    if (fieldEmployer) fieldEmployer.classList.toggle("hidden", name !== "employer");
    if (fieldTalent) fieldTalent.classList.toggle("hidden", name !== "talent");
    if (fieldInvestor) fieldInvestor.classList.toggle("hidden", name !== "investor");
  }

  segments.forEach((btn) => {
    btn.addEventListener("click", () => setSegment(btn.dataset.segment || "employer"));
  });

  document.querySelectorAll("[data-role]").forEach((cta) => {
    cta.addEventListener("click", () => {
      const role = cta.getAttribute("data-role");
      if (role === "employer" || role === "talent" || role === "investor") {
        setTimeout(() => setSegment(role), 0);
      }
    });
  });

  // ── localStorage waitlist backup ────────────────────────
  function loadSignups() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function saveSignupLocal(data) {
    const list = loadSignups();
    list.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return list.length;
  }

  // Expose helpers for you in DevTools:
  //   pushWaitlist.export()  → download JSON of all local signups
  //   pushWaitlist.list()    → print signups in console
  //   pushWaitlist.clear()   → wipe local signups
  window.pushWaitlist = {
    list() {
      const list = loadSignups();
      console.table(list);
      return list;
    },
    export() {
      const blob = new Blob([JSON.stringify(loadSignups(), null, 2)], {
        type: "application/json",
      });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `push-waitlist-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    },
    clear() {
      localStorage.removeItem(STORAGE_KEY);
      console.info("[Push] Local waitlist cleared.");
    },
  };

  // ── Waitlist form submit ────────────────────────────────
  const form = document.getElementById("waitlist-form");
  const formMessage = document.getElementById("form-message");
  const submitBtn = document.getElementById("submit-btn");
  const emailInput = document.getElementById("email");

  function showMessage(text, type) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.classList.remove("hidden", "success", "error");
    formMessage.classList.add(type);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = ((emailInput && emailInput.value) || "").trim();
      if (!email || !isValidEmail(email)) {
        if (emailInput) emailInput.classList.add("field-error");
        showMessage("Please enter a valid email address.", "error");
        if (emailInput) emailInput.focus();
        return;
      }
      if (emailInput) emailInput.classList.remove("field-error");

      // Wallet is optional. If they don't connect, we send a clear empty value.
      const wallet =
        (walletAddressInput && walletAddressInput.value) ||
        connectedWallet ||
        "Not provided";
      if (walletError) walletError.classList.add("hidden");

      const segment = segmentField ? segmentField.value : "employer";
      const data = {
        email: email,
        _replyto: email,
        _subject: `Push waitlist | ${segment} | ${email}`,
        segment: segment,
        wallet_address: wallet,
        roles: rolesField ? rolesField.value : "",
        hiring_needs: (document.getElementById("hiring-needs") || {}).value || "",
        skills: (document.getElementById("skills") || {}).value || "",
        investor_notes: (document.getElementById("investor-notes") || {}).value || "",
        source: "push-protocol-landing",
        submitted_at: new Date().toISOString(),
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting…";
      }

      // Always keep a local copy as backup
      saveSignupLocal(data);

      try {
        if (!WEB3FORMS_ACCESS_KEY) {
          throw new Error("Web3Forms Access Key is missing in app.js.");
        }

        // 1. Build the exact payload Web3Forms expects
        const payload = {
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: data._subject || "Push Protocol Waitlist",
          from_name: "Push Waitlist",
          email: data.email,
          message: [
            "Segment: " + (data.segment || ""),
            "Wallet: " + (data.wallet_address || "Not provided"),
            "Roles: " + (data.roles || ""),
            "Hiring Needs: " + (data.hiring_needs || ""),
            "Skills: " + (data.skills || ""),
            "Investor Notes: " + (data.investor_notes || ""),
            "Submitted: " + (data.submitted_at || ""),
          ].join("\n"),
          // Send hidden dashboard fields
          segment: data.segment,
          wallet_address: data.wallet_address || "Not provided",
          roles: data.roles,
          hiring_needs: data.hiring_needs,
          skills: data.skills,
          investor_notes: data.investor_notes,
          submitted_at: data.submitted_at,
        };

        // 2. Fire the request directly to Web3Forms
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        let body = {};
        try {
          body = await res.json();
        } catch (_) {}

        // 3. Handle errors securely
        if (!res.ok) {
          const errMsg = body.message || "Could not submit. Please try again.";
          throw new Error(typeof errMsg === "string" ? errMsg : "Could not submit. Please try again.");
        }

        if (body && body.success === false) {
          throw new Error(body.message || "Submit failed.");
        }

        // 4. Success state UI updates
        showMessage("You're on the list. We'll be in touch when early access opens.", "success");

        form.reset();
        // Keep wallet connected in UI if they linked it
        if (walletAddressInput && connectedWallet) {
          walletAddressInput.value = connectedWallet;
        }
        selectedRoles.clear();
        if (roleChips) {
          roleChips.querySelectorAll(".role-chip.active").forEach((c) => {
            c.classList.remove("active");
            c.setAttribute("aria-pressed", "false");
          });
        }
        syncRolesField();
        setSegment(segment);
      } catch (err) {
        console.error(err);
        showMessage(
          ((err && err.message) || "Submit failed.") + " Saved on this device as backup.",
          "error"
        );
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Join the waitlist";
        }
      }
    });

    if (emailInput) {
      emailInput.addEventListener("input", () => {
        emailInput.classList.remove("field-error");
      });
    }
  }

  // ════════════════════════════════════════════════════════
  //  WEB3 LOGIC BLOCK
  //  1) Dashboard counters  2) Profile scanner  3) Phantom
  // ════════════════════════════════════════════════════════

  let connectedWallet = "";

  // ── 1. Live Dashboard Counters ────────────────────────────
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const runCounters = () => {
    counters.forEach((counter) => {
      if (counter.dataset.counted === "1") return;
      counter.dataset.counted = "1";
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger counters when scrolled into view
  if ("IntersectionObserver" in window) {
    const statObserver = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].isIntersecting) {
        runCounters();
        statObserver.disconnect();
      }
    });
    const dashboard = document.querySelector(".dashboard-card");
    if (dashboard) statObserver.observe(dashboard);
  } else {
    runCounters();
  }

  // ── 2. Phantom Wallet Integration ─────────────────────────
  const navWalletBtn = document.getElementById("nav-wallet-btn");
  const navWalletText = document.getElementById("nav-wallet-text");
  const navWalletAvatar = document.getElementById("nav-wallet-avatar");
  const formWalletBtn = document.getElementById("form-wallet-btn");
  const walletAddressInput = document.getElementById("wallet-address");
  const walletBox = document.getElementById("wallet-box");
  const walletError = document.getElementById("wallet-error");

  const phantomIconHtml =
    '<svg width="18" height="18" viewBox="0 0 128 128" fill="none" aria-hidden="true"><path d="M102.5 35.8c-7.9-18.4-25.2-29.4-44.5-29.4C30.2 6.4 7.6 29.1 7.6 57v52.3c0 6.6 5.4 12 12 12h2.2c4.1 0 7.8-2 10.1-5.3l5.5-7.8c1.6-2.2 4.1-3.6 6.8-3.6h1.2c2.7 0 5.2 1.3 6.8 3.6l5.5 7.8c2.2 3.2 5.9 5.3 10.1 5.3h2.2c4.1 0 7.8-2 10.1-5.3l5.5-7.8c1.6-2.2 4.1-3.6 6.8-3.6h1.2c2.7 0 5.2 1.3 6.8 3.6l5.5 7.8c2.2 3.2 5.9 5.3 10.1 5.3h2.2c6.6 0 12-5.4 12-12V69.7c0-2-.3-4.1-.9-6.1l-10-33.8z" fill="#AB9FF2"/><circle cx="44.2" cy="46.7" r="8.2" fill="#fff"/><circle cx="72.2" cy="46.7" r="8.2" fill="#fff"/></svg>';

  // Format address (e.g. 7xFa...3k9q)
  const truncateAddress = (address) => {
    if (!address || address.length < 8) return address || "";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const updateUIForConnectedWallet = (address) => {
    connectedWallet = address || "";
    const short = truncateAddress(address);

    // Update Navbar
    if (navWalletText) navWalletText.textContent = short;
    if (navWalletAvatar) navWalletAvatar.classList.remove("hidden");
    if (navWalletBtn) navWalletBtn.classList.add("wallet-connected-btn", "is-connected");

    // Update Form
    if (walletAddressInput) walletAddressInput.value = address;
    if (formWalletBtn) {
      formWalletBtn.innerHTML = `✓ Connected: ${short}`;
      formWalletBtn.classList.add("wallet-connected-btn", "is-connected");
    }
    if (walletBox) walletBox.classList.add("wallet-connected-box", "is-connected");
    if (walletError) walletError.classList.add("hidden");
  };

  // Helper function to robustly detect Phantom
  const getPhantomProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom && window.phantom.solana;
      if (provider && provider.isPhantom) {
        return provider;
      }
    }
    // Fallback for older extensions
    if (window.solana && window.solana.isPhantom) {
      return window.solana;
    }
    return null;
  };

  const connectPhantom = async () => {
    const provider = getPhantomProvider();

    if (provider) {
      try {
        if (formWalletBtn && !(walletAddressInput && walletAddressInput.value)) {
          formWalletBtn.textContent = "Connecting...";
        }
        if (navWalletText && !connectedWallet) {
          navWalletText.textContent = "Connecting...";
        }
        // Use the detected provider to connect
        const resp = await provider.connect();
        const address = resp.publicKey.toString();
        updateUIForConnectedWallet(address);
      } catch (err) {
        console.error("User rejected request", err);
        if (formWalletBtn && !(walletAddressInput && walletAddressInput.value)) {
          formWalletBtn.innerHTML = `${phantomIconHtml} Connect Phantom Wallet`;
        }
        if (navWalletText && !connectedWallet) {
          navWalletText.textContent = "Connect Wallet";
        }
        if (walletError) {
          walletError.textContent = "Wallet connection cancelled or failed.";
          walletError.classList.remove("hidden");
        }
      }
    } else {
      // Catch the local file error explicitly
      if (window.location.protocol === "file:") {
        alert(
          "Wallet extension blocked! You are viewing this as a local file. Please run a local server (e.g., python -m http.server 8080) to connect your wallet."
        );
      } else {
        window.open("https://phantom.app/", "_blank");
      }
    }
  };

  if (navWalletBtn) navWalletBtn.addEventListener("click", connectPhantom);
  if (formWalletBtn) {
    formWalletBtn.addEventListener("click", () => {
      if (!walletAddressInput || !walletAddressInput.value) connectPhantom();
    });
  }

  // Handle account change event from Phantom
  const phantomProvider = getPhantomProvider();
  if (phantomProvider && typeof phantomProvider.on === "function") {
    phantomProvider.on("accountChanged", (publicKey) => {
      if (publicKey) {
        updateUIForConnectedWallet(publicKey.toString());
      } else {
        // User disconnected / switched to no account
        connectedWallet = "";
        if (walletAddressInput) walletAddressInput.value = "";
        if (navWalletText) navWalletText.textContent = "Connect Wallet";
        if (navWalletAvatar) navWalletAvatar.classList.add("hidden");
        if (navWalletBtn) navWalletBtn.classList.remove("wallet-connected-btn", "is-connected");
        if (formWalletBtn) {
          formWalletBtn.innerHTML = `${phantomIconHtml} Connect Phantom Wallet`;
          formWalletBtn.classList.remove("wallet-connected-btn", "is-connected");
        }
        if (walletBox) walletBox.classList.remove("wallet-connected-box", "is-connected");
      }
    });
  }

  // Restore if already connected this session
  if (phantomProvider && phantomProvider.isConnected && phantomProvider.publicKey) {
    updateUIForConnectedWallet(phantomProvider.publicKey.toString());
  }

  // ── Scroll reveal ───────────────────────────────────────
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach((el) => {
      if (!el.closest("#jobs-grid")) io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }
})();
