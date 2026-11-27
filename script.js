const SITE_CONFIG = {
  name: "David Radonjić",
  subtitle: "Analog Photography",
  email: "radonjicdavid1@gmail.com",
  phone: "+381606795566",
  phoneDisplay: "+381 60 679 5566",
  location: "Belgrade, Serbia",
  instagramHandle: "@davidradonjic1",
  instagramUrl: "https://www.instagram.com/davidradonjic1/",
  homePhoto: "https://res.cloudinary.com/zcvep3xs/image/upload/v1795351910/received_493916864107740.jpg"
};

// KAKO SE DODAJU KATEGORIJE:
// Pored linka (posle jednog razmaka) dopiši: people, places ili fragments
// Primer: https://res.cloudinary.com/.../slika.jpg people
// Ako ne dopišeš ništa pored linka, slika se svakako vidi u ALL.

const rawColorLinks = `
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300399/B_20.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300396/B_11.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300396/B_5.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300396/B_9.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300395/B_4.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300285/A_24.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300283/A_17.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300207/f_69_17.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300202/f_69_15.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299940/11640334_473985242767569_1020732956_o.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299940/11539872_473985356100891_461986800_o.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299939/11638915_473987322767361_1090747710_o.jpg people
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300416/B_2.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300416/B_28.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300414/B_8.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300414/B_3.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300413/B_34.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300412/B_1.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300399/B_25.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300394/B_33.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300286/A_26.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300285/A_19.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300284/A_31.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300282/A_27.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300214/f_69_27.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300213/f_69_18.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300212/f_69_12.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300211/f_69_37.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300210/f_69_34.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300206/f_69_16.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300200/f_69_10.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300199/f_69_7.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300199/f_69_3.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300198/f_69_2.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300197/f_69_1.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300197/f_69_38.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299906/000068.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299905/000047.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299904/000056.jpg places
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300216/f_69_33.jpg fragments
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300212/f_69_14.jpg fragments
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300209/f_69_32.jpg fragments
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300209/f_69_31.jpg fragments
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300208/f_69_20.jpg fragments
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300201/f_69_13.jpg fragments
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299906/000067.jpg fragments
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299904/000066.jpg fragments
`;const rawBWLinks = `
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299859/000003.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299859/000046.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299860/000006.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299860/000013.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299862/000035.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299862/000033.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299863/000036.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299862/000031.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299864/000040.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299864/000037.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299864/000038.jpg
`;

// Poseban slot za PORTFOLIO (murale i naručene radove) — punimo u sledećem koraku.
const PORTFOLIO_ITEMS = [];

const PHOTO_CATEGORIES = [
  { id: "all", label: "ALL" },
  { id: "people", label: "PEOPLE" },
  { id: "places", label: "PLACES" },
  { id: "fragments", label: "FRAGMENTS" }
];

const LAYOUT_CONFIG = {
  gap: 22,
  mobileGap: 12,
  desktopRowHeight: 270,
  tabletRowHeight: 215,
  mobileRowHeight: 145,
  maxItemsDesktop: 4,
  maxItemsTablet: 3,
  maxItemsMobile: 2
};

function parsePhotoEntries(rawText) {
  const seen = new Set();
  const entries = [];

  rawText.split(/\r?\n/).forEach((line) => {
    const cleaned = line.trim().replace(/^["']|["'],?$/g, "");
    if (!cleaned) return;

    const parts = cleaned.split(/\s+/);
    const url = parts[0];
    if (!url.startsWith("http://") && !url.startsWith("https://")) return;
    if (seen.has(url)) return;
    seen.add(url);

    const rawTag = (parts[1] || "").toLowerCase();
    const category = ["people", "places", "fragments"].includes(rawTag) ? rawTag : "uncategorized";

    entries.push({ url, category });
  });

  return entries;
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Lightbox
let lightboxEl = null;
let lightboxImg = null;

function createLightbox() {
  if (lightboxEl) return;

  lightboxEl = document.createElement("div");
  lightboxEl.id = "photo-lightbox";
  lightboxEl.className = "lightbox-backdrop";
  lightboxEl.setAttribute("aria-hidden", "true");

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "lightbox-close";
  closeBtn.setAttribute("aria-label", "Zatvori fotografiju");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", closeLightbox);

  lightboxImg = document.createElement("img");
  lightboxImg.className = "lightbox-image";
  lightboxImg.alt = "Uvećana fotografija";
  lightboxImg.addEventListener("click", (e) => e.stopPropagation());

  lightboxEl.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxEl.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  lightboxEl.appendChild(closeBtn);
  lightboxEl.appendChild(lightboxImg);
  document.body.appendChild(lightboxEl);
}

function openLightbox(url) {
  createLightbox();
  lightboxImg.src = url;
  lightboxEl.classList.add("is-open");
  lightboxEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove("is-open");
  lightboxEl.setAttribute("aria-hidden", "true");
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "";
}

// Header i navigacija
let currentSection = "home";
let currentCategory = "all";
let currentSectionEntries = [];
let currentOrderedItems = [];
let isPhotoMenuOpen = false;
let photoGroupEl = null;
let photoToggleBtn = null;
const ratioCache = new Map();
const navButtons = new Map();

function setPhotoMenuOpen(open) {
  isPhotoMenuOpen = open;
  if (photoGroupEl) {
    photoGroupEl.classList.toggle("is-open", open);
  }
  if (photoToggleBtn) {
    photoToggleBtn.setAttribute("aria-expanded", String(open));
  }
}

function setActiveNav(section) {
  navButtons.forEach((btn, key) => {
    btn.classList.toggle("is-active", key === section);
  });

  const isPhotoSub = section === "color" || section === "bw";
  if (photoToggleBtn) {
    photoToggleBtn.classList.toggle("is-active", isPhotoSub || isPhotoMenuOpen);
  }
  if (isPhotoSub) {
    setPhotoMenuOpen(true);
  }
}

function renderHeaderAndShell() {
  let header = document.getElementById("site-header");
  if (!header) {
    header = document.createElement("header");
    header.id = "site-header";
    header.className = "site-header";

    const brandBlock = document.createElement("div");
    brandBlock.className = "brand-block";

    const titleLink = document.createElement("a");
    titleLink.href = "#home";
    titleLink.className = "brand-name";
    titleLink.textContent = SITE_CONFIG.name;
    titleLink.addEventListener("click", (e) => {
      e.preventDefault();
      setPhotoMenuOpen(false);
      navigateTo("home");
    });

    const subtitle = document.createElement("span");
    subtitle.className = "brand-subtitle";
    subtitle.textContent = SITE_CONFIG.subtitle;

    brandBlock.appendChild(titleLink);
    brandBlock.appendChild(subtitle);

    const nav = document.createElement("nav");
    nav.className = "site-nav";
    nav.setAttribute("aria-label", "Glavna navigacija");

    // 1. HOME
    const homeBtn = document.createElement("button");
    homeBtn.type = "button";
    homeBtn.className = "nav-link";
    homeBtn.textContent = "HOME";
    homeBtn.addEventListener("click", () => {
      setPhotoMenuOpen(false);
      navigateTo("home");
    });
    navButtons.set("home", homeBtn);
    nav.appendChild(homeBtn);

    // 2. PORTFOLIO
    const portfolioBtn = document.createElement("button");
    portfolioBtn.type = "button";
    portfolioBtn.className = "nav-link";
    portfolioBtn.textContent = "PORTFOLIO";
    portfolioBtn.addEventListener("click", () => {
      setPhotoMenuOpen(false);
      navigateTo("portfolio");
    });
    navButtons.set("portfolio", portfolioBtn);
    nav.appendChild(portfolioBtn);

    // 3. PHOTOGRAPHY (razvija se na COLOR i B&W)
    photoGroupEl = document.createElement("div");
    photoGroupEl.className = "nav-group";
    photoGroupEl.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        setPhotoMenuOpen(true);
      }
    });
    photoGroupEl.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768 && currentSection !== "color" && currentSection !== "bw") {
        setPhotoMenuOpen(false);
      }
    });

    photoToggleBtn = document.createElement("button");
    photoToggleBtn.type = "button";
    photoToggleBtn.className = "nav-link nav-parent";
    photoToggleBtn.textContent = "PHOTOGRAPHY";
    photoToggleBtn.setAttribute("aria-expanded", "false");
    photoToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const nextState = !isPhotoMenuOpen;
      setPhotoMenuOpen(nextState);
      if (nextState && currentSection !== "color" && currentSection !== "bw") {
        navigateTo("color");
      }
    });

    const subMenu = document.createElement("div");
    subMenu.className = "nav-submenu";

    const colorBtn = document.createElement("button");
    colorBtn.type = "button";
    colorBtn.className = "nav-link nav-sublink";
    colorBtn.textContent = "COLOR";
    colorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setPhotoMenuOpen(true);
      navigateTo("color");
    });
    navButtons.set("color", colorBtn);

    const bwBtn = document.createElement("button");
    bwBtn.type = "button";
    bwBtn.className = "nav-link nav-sublink";
    bwBtn.textContent = "B&W";
    bwBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setPhotoMenuOpen(true);
      navigateTo("bw");
    });
    navButtons.set("bw", bwBtn);

    subMenu.appendChild(colorBtn);
    subMenu.appendChild(bwBtn);
    photoGroupEl.appendChild(photoToggleBtn);
    photoGroupEl.appendChild(subMenu);
    nav.appendChild(photoGroupEl);

    // 4. CONTACT
    const contactBtn = document.createElement("button");
    contactBtn.type = "button";
    contactBtn.className = "nav-link";
    contactBtn.textContent = "CONTACT";
    contactBtn.addEventListener("click", () => {
      setPhotoMenuOpen(false);
      navigateTo("contact");
    });
    navButtons.set("contact", contactBtn);
    nav.appendChild(contactBtn);

    header.appendChild(brandBlock);
    header.appendChild(nav);
    document.body.prepend(header);
  }

  let galleryContainer = document.getElementById("gallery");
  if (!galleryContainer) {
    galleryContainer = document.createElement("main");
    galleryContainer.id = "gallery";
    galleryContainer.className = "page-content";
    document.body.appendChild(galleryContainer);
  } else {
    galleryContainer.classList.add("page-content");
  }

  return galleryContainer;
}

function getViewportSettings() {
  const w = window.innerWidth;
  if (w <= 768) {
    return {
      gap: LAYOUT_CONFIG.mobileGap,
      rowHeight: LAYOUT_CONFIG.mobileRowHeight,
      maxItems: LAYOUT_CONFIG.maxItemsMobile,
      maxPortraitInRow: 2,
      maxLandscapeInRow: 2
    };
  }
  if (w < 1100) {
    return {
      gap: LAYOUT_CONFIG.gap,
      rowHeight: LAYOUT_CONFIG.tabletRowHeight,
      maxItems: LAYOUT_CONFIG.maxItemsTablet,
      maxPortraitInRow: 3,
      maxLandscapeInRow: 2
    };
  }
  return {
    gap: LAYOUT_CONFIG.gap,
    rowHeight: LAYOUT_CONFIG.desktopRowHeight,
    maxItems: LAYOUT_CONFIG.maxItemsDesktop,
    maxPortraitInRow: 4,
    maxLandscapeInRow: 2
  };
}

function buildRows(items, containerWidth, settings) {
  const rows = [];
  let currentRow = [];
  let ratioSum = 0;
  let portraitCount = 0;
  let landscapeCount = 0;

  items.forEach((item, index) => {
    const isPortrait = item.naturalHeight > item.naturalWidth;
    const nextPortraitCount = portraitCount + (isPortrait ? 1 : 0);
    const nextLandscapeCount = landscapeCount + (!isPortrait ? 1 : 0);

    const exceedsTypeLimit =
      currentRow.length >= 1 &&
      ((isPortrait && nextPortraitCount > Math.min(3, settings.maxPortraitInRow)) ||
        (!isPortrait && nextLandscapeCount > settings.maxLandscapeInRow));

    const boost = index % 5 === 2 ? 1.18 : 1;
    const effectiveRatio = item.ratio * boost;
    const nextRatioSum = ratioSum + effectiveRatio;
    const nextCount = currentRow.length + 1;
    const estimatedWidth =
      nextRatioSum * settings.rowHeight + (nextCount - 1) * settings.gap;

    const wouldExceedMaxCount = nextCount > settings.maxItems;
    const reachedFullRow =
      currentRow.length >= 2 && estimatedWidth >= containerWidth * 1.08;

    if (currentRow.length > 0 && (exceedsTypeLimit || wouldExceedMaxCount || reachedFullRow)) {
      rows.push({ items: currentRow, isLastRow: false });
      currentRow = [];
      ratioSum = 0;
      portraitCount = 0;
      landscapeCount = 0;
    }

    const finalBoost = index % 5 === 2 ? 1.18 : 1;
    const finalRatio = item.ratio * finalBoost;
    currentRow.push({ ...item, effectiveRatio: finalRatio, isPortrait });
    ratioSum += finalRatio;
    if (isPortrait) portraitCount += 1;
    else landscapeCount += 1;
  });

  if (currentRow.length > 0) {
    rows.push({ items: currentRow, isLastRow: true });
  }

  return rows;
}

function buildFilterBar(container) {
  const bar = document.createElement("div");
  bar.className = "category-filter-bar";
  bar.setAttribute("role", "tablist");
  bar.setAttribute("aria-label", "Filter kategorija fotografija");

  PHOTO_CATEGORIES.forEach(({ id, label }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "category-chip";
    if (currentCategory === id) {
      btn.classList.add("is-active");
    }
    btn.textContent = label;
    btn.addEventListener("click", () => {
      if (currentCategory === id) return;
      currentCategory = id;
      applyCategoryFilter(container);
    });
    bar.appendChild(btn);
  });

  return bar;
}

function renderMosaic(container, items) {
  const settings = getViewportSettings();
  const containerWidth = container.getBoundingClientRect().width || window.innerWidth - 64;

  container.innerHTML = "";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = `${settings.gap}px`;

  container.appendChild(buildFilterBar(container));

  if (!items.length) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "category-empty-msg";
    emptyMsg.textContent = "Još uvek nema označenih fotografija u ovoj kategoriji.";
    container.appendChild(emptyMsg);
    return;
  }

  const rows = buildRows(items, containerWidth, settings);

  rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "mosaic-row";
    rowEl.style.display = "flex";
    rowEl.style.gap = `${settings.gap}px`;
    rowEl.style.alignItems = "stretch";

    const totalGaps = (row.items.length - 1) * settings.gap;
    const availableWidth = Math.max(containerWidth - totalGaps, 120);
    const sumRatios = row.items.reduce((acc, el) => acc + el.effectiveRatio, 0);

    const idealHeight = availableWidth / sumRatios;
    const rowHeight = row.isLastRow
      ? Math.min(idealHeight, settings.rowHeight * 1.08)
      : Math.max(Math.min(idealHeight, settings.rowHeight * 1.3), settings.rowHeight * 0.8);

    row.items.forEach((entry) => {
      const figure = document.createElement("figure");
      figure.className = "photo-item";
      figure.classList.add(entry.isPortrait ? "is-portrait" : "is-landscape");

      const width = Math.round(rowHeight * entry.effectiveRatio);
      const height = Math.round(rowHeight);

      figure.style.flex = row.isLastRow ? "0 0 auto" : `${entry.effectiveRatio} 0 0`;
      figure.style.width = `${width}px`;
      figure.style.height = `${height}px`;

      const img = document.createElement("img");
      img.src = entry.url;
      img.alt = "Fotografija";

      figure.addEventListener("click", () => openLightbox(entry.url));
      figure.appendChild(img);
      rowEl.appendChild(figure);
    });

    container.appendChild(rowEl);
  });
}

function applyCategoryFilter(container) {
  const filteredEntries =
    currentCategory === "all"
      ? currentSectionEntries
      : currentSectionEntries.filter((entry) => entry.category === currentCategory);

  currentOrderedItems = filteredEntries.map((entry) => ratioCache.get(entry.url));
  renderMosaic(container, currentOrderedItems);
}

function renderHome(container) {
  container.style.display = "block";
  container.innerHTML = `
    <section class="home-hero">
      <figure class="home-hero-figure" id="home-hero-trigger">
        <img src="${SITE_CONFIG.homePhoto}" alt="${SITE_CONFIG.name} — naslovna fotografija" />
      </figure>
    </section>
  `;

  const trigger = document.getElementById("home-hero-trigger");
  if (trigger) {
    trigger.addEventListener("click", () => openLightbox(SITE_CONFIG.homePhoto));
  }
}

function renderPortfolio(container) {
  container.style.display = "block";

  if (!PORTFOLIO_ITEMS.length) {
    container.innerHTML = `
      <section class="portfolio-section">
        <p class="portfolio-empty">Portfolio odeljak je pripremljen za murale i naručene radove.</p>
      </section>
    `;
    return;
  }

  const cardsHtml = PORTFOLIO_ITEMS.map((item, idx) => `
    <article class="portfolio-card">
      ${item.image ? `
        <figure class="portfolio-media" data-portfolio-idx="${idx}">
          <img src="${item.image}" alt="${item.title || "Portfolio rad"}" />
        </figure>
      ` : ""}
      <div class="portfolio-meta">
        <div class="portfolio-header-row">
          <h2 class="portfolio-title">${item.title || ""}</h2>
          ${item.year ? `<span class="portfolio-year">${item.year}</span>` : ""}
        </div>
        ${item.location ? `<p class="portfolio-location">${item.location}</p>` : ""}
        ${item.description ? `<p class="portfolio-description">${item.description}</p>` : ""}
      </div>
    </article>
  `).join("");

  container.innerHTML = `<section class="portfolio-section"><div class="portfolio-grid">${cardsHtml}</div></section>`;

  container.querySelectorAll("[data-portfolio-idx]").forEach((el) => {
    el.addEventListener("click", () => {
      const item = PORTFOLIO_ITEMS[Number(el.dataset.portfolioIdx)];
      if (item && item.image) {
        openLightbox(item.image);
      }
    });
  });
}

function renderContact(container) {
  container.style.display = "block";
  container.innerHTML = `
    <section class="contact-section">
      <p class="contact-location">${SITE_CONFIG.location}</p>

      <ul class="contact-list">
        <li>
          <span class="contact-label">Email</span>
          <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>
        </li>
        <li>
          <span class="contact-label">Phone</span>
          <a href="tel:${SITE_CONFIG.phone}">${SITE_CONFIG.phoneDisplay}</a>
        </li>
        <li>
          <span class="contact-label">Instagram</span>
          <a
            href="${SITE_CONFIG.instagramUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >${SITE_CONFIG.instagramHandle}</a>
        </li>
      </ul>
    </section>
  `;
}

function loadDimensionsAndRender(container, entries) {
  if (!entries.length) {
    container.style.display = "block";
    container.innerHTML = `
      <section class="contact-section">
        <p>Još uvek nema dodatih fotografija u ovoj sekciji.</p>
      </section>
    `;
    return;
  }

  const shuffledEntries = shuffleArray(entries);
  const promises = shuffledEntries.map((entry) => {
    if (ratioCache.has(entry.url)) return Promise.resolve();

    return new Promise((resolve) => {
      const probe = new Image();
      probe.onload = () => {
        const w = probe.naturalWidth || 4;
        const h = probe.naturalHeight || 3;
        ratioCache.set(entry.url, { url: entry.url, ratio: w / h, naturalWidth: w, naturalHeight: h });
        resolve();
      };
      probe.onerror = () => {
        ratioCache.set(entry.url, { url: entry.url, ratio: 4 / 3, naturalWidth: 4, naturalHeight: 3 });
        resolve();
      };
      probe.src = entry.url;
    });
  });

  Promise.all(promises).then(() => {
    currentSectionEntries = shuffledEntries;
    if (currentSection === "color" || currentSection === "bw") {
      applyCategoryFilter(container);
    }
  });
}

function navigateTo(section) {
  currentSection = section;
  currentCategory = "all";
  setActiveNav(section);
  const container = renderHeaderAndShell();

  if (section === "home") {
    renderHome(container);
  } else if (section === "portfolio") {
    renderPortfolio(container);
  } else if (section === "color") {
    loadDimensionsAndRender(container, parsePhotoEntries(rawColorLinks));
  } else if (section === "bw") {
    loadDimensionsAndRender(container, parsePhotoEntries(rawBWLinks));
  } else if (section === "contact") {
    renderContact(container);
  }
}

createLightbox();
navigateTo("home");

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const container = document.getElementById("gallery");
    if (!container) return;
    if ((currentSection === "color" || currentSection === "bw") && currentOrderedItems.length) {
      renderMosaic(container, currentOrderedItems);
    }
  }, 120);
});
