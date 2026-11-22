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

// Ovde nalepi linkove za COLOR fotografije — svaki u novi red (bez navodnika i zareza).
const rawColorLinks = `
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300416/B_2.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300416/B_28.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300414/B_8.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300414/B_3.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300413/B_34.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300412/B_1.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300399/B_20.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300399/B_25.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300397/B_16.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300396/B_11.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300396/B_5.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300396/B_9.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300395/B_4.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300394/B_33.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300286/A_26.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300285/A_24.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300285/A_19.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300284/A_31.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300283/A_17.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300282/A_27.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300216/f_69_33.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300215/f_69_28.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300214/f_69_27.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300213/f_69_18.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300212/f_69_14.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300212/f_69_12.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300211/f_69_37.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300210/f_69_34.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300209/f_69_32.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300209/f_69_31.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300208/f_69_20.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300207/f_69_17.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300206/f_69_16.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300202/f_69_15.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300201/f_69_13.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300200/f_69_10.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300199/f_69_7.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300199/f_69_3.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300198/f_69_2.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300197/f_69_1.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795300197/f_69_38.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299940/11640334_473985242767569_1020732956_o.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299940/11539872_473985356100891_461986800_o.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299939/11638915_473987322767361_1090747710_o.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299906/000068.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299906/000067.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299905/000047.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299904/000056.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299904/000066.jpg
`;

// Ovde nalepi linkove za B&W (crno-bele) fotografije — svaki u novi red.
const rawBWLinks = `
`;

const LAYOUT_CONFIG = {
  gap: 22,                // veći razmak / belina na desktopu
  mobileGap: 12,          // razmak na telefonu
  desktopRowHeight: 270,  // veće slike na desktopu da se lepo vide
  tabletRowHeight: 215,
  mobileRowHeight: 145,
  maxItemsDesktop: 4,     // maksimalno 4 fotografije u jednom redu na desktopu
  maxItemsTablet: 3,
  maxItemsMobile: 2
};

function buildPhotoList(rawText) {
  const cleaned = rawText
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^["']|["'],?$/g, ""))
    .filter((line) => line.startsWith("http://") || line.startsWith("https://"));

  return [...new Set(cleaned)];
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
let currentOrderedItems = [];
const ratioCache = new Map();
const navButtons = new Map();

function setActiveNav(section) {
  navButtons.forEach((btn, key) => {
    btn.classList.toggle("is-active", key === section);
  });
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

    const sections = [
      { id: "home", label: "HOME" },
      { id: "color", label: "COLOR" },
      { id: "bw", label: "B&W" },
      { id: "contact", label: "CONTACT" }
    ];

    sections.forEach(({ id, label }) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nav-link";
      btn.textContent = label;
      btn.addEventListener("click", () => navigateTo(id));
      navButtons.set(id, btn);
      nav.appendChild(btn);
    });

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
    maxPortraitInRow: 4, // max 4 u redu; uspravne ograničavamo na 3 u redu kad je gusto
    maxLandscapeInRow: 2 // najviše 2 horizontalne u redu da ostanu krupnije
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

    // Ako bi sledeća slika probila limit uspravnih/horizontalnih u redu i red već ima makar 1 fotku, zatvori red
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

function renderMosaic(container, items) {
  const settings = getViewportSettings();
  const containerWidth = container.getBoundingClientRect().width || window.innerWidth - 64;
  const rows = buildRows(items, containerWidth, settings);

  container.innerHTML = "";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = `${settings.gap}px`;

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

function renderContact(container) {
  container.style.display = "block";
  container.innerHTML = `
    <section class="contact-section">
      <div class="contact-header">
        <p class="contact-name">${SITE_CONFIG.name}</p>
        <p class="contact-role">${SITE_CONFIG.subtitle}</p>
        <p class="contact-location">${SITE_CONFIG.location}</p>
      </div>

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
            class="instagram-link"
          >
            <svg
              class="instagram-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4.2"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
            <span>${SITE_CONFIG.instagramHandle}</span>
          </a>
        </li>
      </ul>
    </section>
  `;
}

function loadDimensionsAndRender(container, urls) {
  if (!urls.length) {
    container.style.display = "block";
    container.innerHTML = `
      <section class="contact-section">
        <p>Još uvek nema dodatih fotografija u ovoj sekciji.</p>
      </section>
    `;
    return;
  }

  const shuffledUrls = shuffleArray(urls);
  const promises = shuffledUrls.map((url) => {
    if (ratioCache.has(url)) return Promise.resolve();

    return new Promise((resolve) => {
      const probe = new Image();
      probe.onload = () => {
        const w = probe.naturalWidth || 4;
        const h = probe.naturalHeight || 3;
        ratioCache.set(url, { url, ratio: w / h, naturalWidth: w, naturalHeight: h });
        resolve();
      };
      probe.onerror = () => {
        ratioCache.set(url, { url, ratio: 4 / 3, naturalWidth: 4, naturalHeight: 3 });
        resolve();
      };
      probe.src = url;
    });
  });

  Promise.all(promises).then(() => {
    currentOrderedItems = shuffledUrls.map((url) => ratioCache.get(url));
    if (currentSection === "color" || currentSection === "bw") {
      renderMosaic(container, currentOrderedItems);
    }
  });
}

function navigateTo(section) {
  currentSection = section;
  setActiveNav(section);
  const container = renderHeaderAndShell();

  if (section === "home") {
    renderHome(container);
  } else if (section === "color") {
    loadDimensionsAndRender(container, buildPhotoList(rawColorLinks));
  } else if (section === "bw") {
    loadDimensionsAndRender(container, buildPhotoList(rawBWLinks));
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
