const SITE_CONFIG = {
  name: "David Radonjić",
  subtitle: "ARTIST / PHOTOGRAPHER",
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
`;

const rawBWLinks = `
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

// PORTFOLIO PROJEKTI (type: "commissions" ili "assistance")
const PORTFOLIO_ITEMS = [
  {
    id: "life-ivona-pleskonja-2020",
    type: "assistance",
    title: "LIFE — Ivona Pleskonja, 2020",
    hoverText: "LIFE — Ivona Pleskonja, 2020",
    description:
      "Large-scale outdoor mural located at the entrance of the Skyline Belgrade complex (Sarajevska Street). Inspired by nature, human resilience, and organic energy, the work brings expressive figurative and botanical motifs into the public space. Assisted the lead artist with wall preparation and painting execution.",
    mainImage: "https://res.cloudinary.com/zcvep3xs/image/upload/v1795864545/DSC_0305.jpg",
    galleryImages: [
      "https://res.cloudinary.com/zcvep3xs/image/upload/v1795864549/DSC_0288.jpg",
      "https://res.cloudinary.com/zcvep3xs/image/upload/v1795864547/DSC_0283.jpg",
      "https://res.cloudinary.com/zcvep3xs/image/upload/v1795864546/DSC_0310.jpg",
      "https://res.cloudinary.com/zcvep3xs/image/upload/v1795864673/DSC_0281.jpg"
    ],
    vimeoUrl: ""
  }
];

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

// Pretvara Cloudinary link u manju optimizovanu verziju za prikaz u galeriji/karticama
function getThumbUrl(originalUrl, maxWidth = 900) {
  if (!originalUrl || typeof originalUrl !== "string") return originalUrl;
  const marker = "/image/upload/";
  const idx = originalUrl.indexOf(marker);
  if (idx === -1) return originalUrl;

  const afterUpload = originalUrl.slice(idx + marker.length);
  // Ako već ima transformacije posle /upload/, ne dupliramo
  if (/^(w_|c_|f_|q_|ar_|g_)/.test(afterUpload)) {
    return originalUrl;
  }

  return `${originalUrl.slice(0, idx + marker.length)}w_${maxWidth},c_limit,f_auto,q_auto/${afterUpload}`;
}

// Za lightbox se uvek koristi puni originalni URL
function getFullUrl(originalUrl) {
  return originalUrl;
}

function getVimeoEmbedUrl(vimeoUrl) {
  if (!vimeoUrl || typeof vimeoUrl !== "string") return "";
  const trimmed = vimeoUrl.trim();
  if (!trimmed) return "";
  if (trimmed.includes("player.vimeo.com/video/")) return trimmed;

  const match = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (match && match[1]) {
    return `https://player.vimeo.com/video/${match[1]}`;
  }
  return "";
}

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

// Lightbox (otvara punu rezoluciju fotografije)
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

function openLightbox(originalUrl) {
  createLightbox();
  lightboxImg.src = getFullUrl(originalUrl);
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

// Header i padajući meniji na dole
let currentSection = "home";
let currentCategory = "all";
let currentSectionEntries = [];
let currentOrderedItems = [];
let activeProjectDetail = null;
let openDropdownGroup = null; // "portfolio" | "photography" | null
const dropdownGroups = new Map();
const ratioCache = new Map();
const navButtons = new Map();

function setOpenDropdown(groupName) {
  openDropdownGroup = groupName;
  dropdownGroups.forEach((groupEl, name) => {
    const isOpen = name === groupName;
    groupEl.classList.toggle("is-open", isOpen);
    const toggleBtn = groupEl.querySelector(".nav-parent");
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    }
  });
}

function setActiveNav(section) {
  navButtons.forEach((btn, key) => {
    btn.classList.toggle("is-active", key === section);
  });

  const portfolioToggle = dropdownGroups.get("portfolio")?.querySelector(".nav-parent");
  if (portfolioToggle) {
    portfolioToggle.classList.toggle(
      "is-active",
      section === "commissions" || section === "assistance" || openDropdownGroup === "portfolio"
    );
  }

  const photoToggle = dropdownGroups.get("photography")?.querySelector(".nav-parent");
  if (photoToggle) {
    photoToggle.classList.toggle(
      "is-active",
      section === "color" || section === "bw" || openDropdownGroup === "photography"
    );
  }
}

function createDropdownGroup(groupName, labelText, subItems) {
  const groupEl = document.createElement("div");
  groupEl.className = "nav-group";
  groupEl.dataset.group = groupName;

  groupEl.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      setOpenDropdown(groupName);
      setActiveNav(currentSection);
    }
  });

  groupEl.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768 && openDropdownGroup === groupName) {
      const activeSubkeys = subItems.map((s) => s.key);
      if (!activeSubkeys.includes(currentSection)) {
        setOpenDropdown(null);
        setActiveNav(currentSection);
      }
    }
  });

  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.className = "nav-link nav-parent";
  toggleBtn.textContent = labelText;
  toggleBtn.setAttribute("aria-expanded", "false");
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isAlreadyOpen = openDropdownGroup === groupName;
    const nextState = !isAlreadyOpen;
    setOpenDropdown(nextState ? groupName : null);
    setActiveNav(currentSection);

    if (nextState && subItems.length && !subItems.some((s) => s.key === currentSection)) {
      navigateTo(subItems[0].key, { keepDropdownOpen: true });
    }
  });

  const subMenu = document.createElement("div");
  subMenu.className = "nav-submenu";

  subItems.forEach(({ key, label }) => {
    const subBtn = document.createElement("button");
    subBtn.type = "button";
    subBtn.className = "nav-link nav-sublink";
    subBtn.textContent = label;
    subBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateTo(key, { keepDropdownOpen: true });
    });
    navButtons.set(key, subBtn);
    subMenu.appendChild(subBtn);
  });

  groupEl.appendChild(toggleBtn);
  groupEl.appendChild(subMenu);
  dropdownGroups.set(groupName, groupEl);
  return groupEl;
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
      navigateTo("home");
    });
    navButtons.set("home", homeBtn);
    nav.appendChild(homeBtn);

    // 2. PORTFOLIO (klizi na dole: COMMISSIONS / ASSISTANCE)
    const portfolioGroup = createDropdownGroup("portfolio", "PORTFOLIO", [
      { key: "commissions", label: "COMMISSIONS" },
      { key: "assistance", label: "ASSISTANCE" }
    ]);
    nav.appendChild(portfolioGroup);

    // 3. PHOTOGRAPHY (klizi na dole: COLOR / B&W)
    const photoGroup = createDropdownGroup("photography", "PHOTOGRAPHY", [
      { key: "color", label: "COLOR" },
      { key: "bw", label: "B&W" }
    ]);
    nav.appendChild(photoGroup);

    // 4. CONTACT
    const contactBtn = document.createElement("button");
    contactBtn.type = "button";
    contactBtn.className = "nav-link";
    contactBtn.textContent = "CONTACT";
    contactBtn.addEventListener("click", () => {
      navigateTo("contact");
    });
    navButtons.set("contact", contactBtn);
    nav.appendChild(contactBtn);

    header.appendChild(brandBlock);
    header.appendChild(nav);
    document.body.prepend(header);

    document.addEventListener("click", (e) => {
      if (openDropdownGroup && !header.contains(e.target)) {
        const activeSubkeys =
          openDropdownGroup === "portfolio"
            ? ["commissions", "assistance"]
            : openDropdownGroup === "photography"
            ? ["color", "bw"]
            : [];
        if (!activeSubkeys.includes(currentSection)) {
          setOpenDropdown(null);
          setActiveNav(currentSection);
        }
      }
    });
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
      maxLandscapeInRow: 2,
      thumbWidth: 640
    };
  }
  if (w < 1100) {
    return {
      gap: LAYOUT_CONFIG.gap,
      rowHeight: LAYOUT_CONFIG.tabletRowHeight,
      maxItems: LAYOUT_CONFIG.maxItemsTablet,
      maxPortraitInRow: 3,
      maxLandscapeInRow: 2,
      thumbWidth: 800
    };
  }
  return {
    gap: LAYOUT_CONFIG.gap,
    rowHeight: LAYOUT_CONFIG.desktopRowHeight,
    maxItems: LAYOUT_CONFIG.maxItemsDesktop,
    maxPortraitInRow: 4,
    maxLandscapeInRow: 2,
    thumbWidth: 900
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

function renderMosaicGridInto(targetEl, items) {
  const settings = getViewportSettings();
  const containerWidth = targetEl.getBoundingClientRect().width || window.innerWidth - 64;

  targetEl.innerHTML = "";
  targetEl.style.display = "flex";
  targetEl.style.flexDirection = "column";
  targetEl.style.gap = `${settings.gap}px`;

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
      img.src = getThumbUrl(entry.url, settings.thumbWidth);
      img.alt = "Fotografija";
      img.loading = "lazy";
      img.decoding = "async";

      figure.addEventListener("click", () => openLightbox(entry.url));
      figure.appendChild(img);
      rowEl.appendChild(figure);
    });

    targetEl.appendChild(rowEl);
  });
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

  const gridWrap = document.createElement("div");
  gridWrap.className = "mosaic-grid-wrap";
  container.appendChild(gridWrap);
  renderMosaicGridInto(gridWrap, items);
}

function applyCategoryFilter(container) {
  const filteredEntries =
    currentCategory === "all"
      ? currentSectionEntries
      : currentSectionEntries.filter((entry) => entry.category === currentCategory);

  currentOrderedItems = filteredEntries
    .map((entry) => ratioCache.get(entry.url))
    .filter(Boolean);

  renderMosaic(container, currentOrderedItems);
}

function renderHome(container) {
  container.style.display = "block";
  container.innerHTML = `
    <section class="home-hero">
      <figure class="home-hero-figure" id="home-hero-trigger">
        <img
          src="${getThumbUrl(SITE_CONFIG.homePhoto, 1200)}"
          alt="${SITE_CONFIG.name} — naslovna fotografija"
          decoding="async"
        />
      </figure>
    </section>
  `;

  const trigger = document.getElementById("home-hero-trigger");
  if (trigger) {
    trigger.addEventListener("click", () => openLightbox(SITE_CONFIG.homePhoto));
  }
}

function probeImageRatios(urls, thumbWidth) {
  return Promise.all(
    urls.map((url) => {
      if (ratioCache.has(url)) {
        return Promise.resolve(ratioCache.get(url));
      }
      return new Promise((resolve) => {
        const probe = new Image();
        probe.decoding = "async";
        probe.onload = () => {
          const w = probe.naturalWidth || 4;
          const h = probe.naturalHeight || 3;
          const record = { url, ratio: w / h, naturalWidth: w, naturalHeight: h };
          ratioCache.set(url, record);
          resolve(record);
        };
        probe.onerror = () => {
          const record = { url, ratio: 4 / 3, naturalWidth: 4, naturalHeight: 3 };
          ratioCache.set(url, record);
          resolve(record);
        };
        probe.src = getThumbUrl(url, thumbWidth);
      });
    })
  );
}

function renderProjectDetail(container, project) {
  activeProjectDetail = project;
  container.style.display = "block";
  const backLabel = project.type === "commissions" ? "COMMISSIONS" : "ASSISTANCE";
  const embedUrl = getVimeoEmbedUrl(project.vimeoUrl);

  container.innerHTML = `
    <section class="project-detail-section">
      <button type="button" class="project-back-btn" id="project-back-trigger">
        &larr; BACK TO ${backLabel}
      </button>

      <div class="project-detail-hero">
        <figure class="project-detail-main-photo" id="project-detail-main-trigger">
          <img
            src="${getThumbUrl(project.mainImage, 1400)}"
            alt="${project.title}"
            decoding="async"
          />
        </figure>

        <div class="project-detail-info">
          <span class="project-role-tag">${backLabel}</span>
          <h1 class="project-detail-title">${project.title}</h1>
          <p class="project-detail-description">${project.description}</p>
        </div>
      </div>

      ${embedUrl ? `
        <div class="project-video-wrap">
          <iframe
            src="${embedUrl}"
            title="${project.title} — video"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ` : ""}

      ${Array.isArray(project.galleryImages) && project.galleryImages.length ? `
        <div class="project-detail-mosaic" id="project-detail-mosaic"></div>
      ` : ""}
    </section>
  `;

  const backBtn = document.getElementById("project-back-trigger");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      activeProjectDetail = null;
      navigateTo(project.type, { keepDropdownOpen: true });
    });
  }

  const mainTrigger = document.getElementById("project-detail-main-trigger");
  if (mainTrigger && project.mainImage) {
    mainTrigger.addEventListener("click", () => openLightbox(project.mainImage));
  }

  const mosaicTarget = document.getElementById("project-detail-mosaic");
  if (mosaicTarget && Array.isArray(project.galleryImages) && project.galleryImages.length) {
    const settings = getViewportSettings();
    probeImageRatios(project.galleryImages, settings.thumbWidth).then((records) => {
      if (activeProjectDetail && activeProjectDetail.id === project.id) {
        renderMosaicGridInto(mosaicTarget, records);
      }
    });
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPortfolioSection(container, mode) {
  activeProjectDetail = null;
  container.style.display = "block";
  const label = mode === "commissions" ? "COMMISSIONS" : "ASSISTANCE";
  const items = PORTFOLIO_ITEMS.filter((item) => item.type === mode);

  if (!items.length) {
    container.innerHTML = `
      <section class="portfolio-section">
        <div class="portfolio-section-head">
          <h1 class="portfolio-heading">${label}</h1>
        </div>
        <p class="portfolio-empty">Projekti za ${label} će biti dodati uskoro.</p>
      </section>
    `;
    return;
  }

  const cardsHtml = items.map((item) => `
    <article class="portfolio-front-card" data-project-id="${item.id}">
      <figure class="portfolio-front-figure">
        <img
          src="${getThumbUrl(item.mainImage, 1200)}"
          alt="${item.title}"
          loading="lazy"
          decoding="async"
        />
        <figcaption class="portfolio-front-overlay">
          <span class="portfolio-front-hover-text">${item.hoverText || item.title}</span>
        </figcaption>
      </figure>
    </article>
  `).join("");

  container.innerHTML = `
    <section class="portfolio-section">
      <div class="portfolio-section-head">
        <h1 class="portfolio-heading">${label}</h1>
      </div>
      <div class="portfolio-front-grid">${cardsHtml}</div>
    </section>
  `;

  container.querySelectorAll("[data-project-id]").forEach((cardEl) => {
    cardEl.addEventListener("click", () => {
      const found = items.find((p) => p.id === cardEl.dataset.projectId);
      if (found) {
        renderProjectDetail(container, found);
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
  currentSectionEntries = shuffledEntries;

  // Prikaži odmah ono što već imamo u kešu, a za ostale učitaj dimenzije preko male slike
  const settings = getViewportSettings();
  let renderedOnce = false;
  let loadedCount = 0;

  const maybeRenderProgress = () => {
    const readyItems = shuffledEntries
      .map((entry) => ratioCache.get(entry.url))
      .filter(Boolean);

    if (!readyItems.length) return;

    if (!renderedOnce && (loadedCount >= Math.min(4, shuffledEntries.length) || loadedCount === shuffledEntries.length)) {
      renderedOnce = true;
      currentOrderedItems = readyItems;
      renderMosaic(container, currentOrderedItems);
    } else if (renderedOnce && loadedCount === shuffledEntries.length) {
      applyCategoryFilter(container);
    }
  };

  maybeRenderProgress();

  shuffledEntries.forEach((entry) => {
    if (ratioCache.has(entry.url)) {
      loadedCount += 1;
      maybeRenderProgress();
      return;
    }

    const probe = new Image();
    probe.decoding = "async";
    probe.onload = () => {
      const w = probe.naturalWidth || 4;
      const h = probe.naturalHeight || 3;
      ratioCache.set(entry.url, { url: entry.url, ratio: w / h, naturalWidth: w, naturalHeight: h });
      loadedCount += 1;
      if (currentSection === "color" || currentSection === "bw") {
        maybeRenderProgress();
      }
    };
    probe.onerror = () => {
      ratioCache.set(entry.url, { url: entry.url, ratio: 4 / 3, naturalWidth: 4, naturalHeight: 3 });
      loadedCount += 1;
      if (currentSection === "color" || currentSection === "bw") {
        maybeRenderProgress();
      }
    };
    // Dimenzije merimo na manjoj slici da telefon ne povuče ceo 5+ MB fajl samo zbog merenja
    probe.src = getThumbUrl(entry.url, settings.thumbWidth);
  });
}

function navigateTo(section, options = {}) {
  const { keepDropdownOpen = false } = options;
  currentSection = section;
  currentCategory = "all";
  activeProjectDetail = null;

  if (!keepDropdownOpen) {
    setOpenDropdown(null);
  }

  setActiveNav(section);
  const container = renderHeaderAndShell();

  if (section === "home") {
    renderHome(container);
  } else if (section === "commissions") {
    renderPortfolioSection(container, "commissions");
  } else if (section === "assistance") {
    renderPortfolioSection(container, "assistance");
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
    } else if (activeProjectDetail) {
      const mosaicTarget = document.getElementById("project-detail-mosaic");
      if (mosaicTarget && Array.isArray(activeProjectDetail.galleryImages)) {
        const records = activeProjectDetail.galleryImages
          .map((u) => ratioCache.get(u))
          .filter(Boolean);
        if (records.length) {
          renderMosaicGridInto(mosaicTarget, records);
        }
      }
    }
  }, 120);
});
