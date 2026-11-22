// Ovde samo nalepi čiste linkove (URL-ove) — svaki u novi red.
// Bez navodnika, bez zareza i bez brige ako ostane neki prazan red ili duplikat.
const rawPhotoLinks = `
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
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299864/000038.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299864/000037.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299864/000040.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299862/000031.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299863/000036.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299862/000033.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299862/000035.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299860/000013.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299860/000006.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299859/000046.jpg
https://res.cloudinary.com/zcvep3xs/image/upload/v1795299859/000003.jpg
`;

const SITE_INFO = {
  name: "David Radonjić",
  email: "radonjicdavid1@gmail.com"
};

const MOSAIC_CONFIG = {
  gap: 6,
  mobileGap: 4,
  desktopRowHeight: 215,
  tabletRowHeight: 175,
  mobileRowHeight: 115,
  minItemsPerRow: 3,
  maxItemsPerRow: 6
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

function renderTopHeader() {
  if (document.getElementById("site-header")) return;

  const header = document.createElement("header");
  header.id = "site-header";
  header.className = "site-header";

  const left = document.createElement("div");
  left.className = "header-left";

  const mailLink = document.createElement("a");
  mailLink.href = `mailto:${SITE_INFO.email}`;
  mailLink.textContent = SITE_INFO.email;
  mailLink.className = "header-email";
  left.appendChild(mailLink);

  const center = document.createElement("div");
  center.className = "header-center";
  center.textContent = SITE_INFO.name;

  const right = document.createElement("div");
  right.className = "header-right";

  header.appendChild(left);
  header.appendChild(center);
  header.appendChild(right);

  document.body.prepend(header);
}

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

  // Sprečava zatvaranje kad se klikne direktno na samu sliku; klik sa strane zatvara
  lightboxImg.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Klik bilo gde po tamnoj pozadini sa strane vraća na glavnu stranicu
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

const gallery = document.getElementById("gallery");
const photos = shuffleArray(buildPhotoList(rawPhotoLinks));
const ratioMap = new Map();

function isMobileViewport() {
  return window.innerWidth <= 640;
}

function getCurrentGap() {
  return isMobileViewport() ? MOSAIC_CONFIG.mobileGap : MOSAIC_CONFIG.gap;
}

function getRowHeightTarget() {
  const w = window.innerWidth;
  if (w <= 640) return MOSAIC_CONFIG.mobileRowHeight;
  if (w < 1100) return MOSAIC_CONFIG.tabletRowHeight;
  return MOSAIC_CONFIG.desktopRowHeight;
}

function getMaxItemsInRow() {
  return isMobileViewport() ? 3 : MOSAIC_CONFIG.maxItemsPerRow;
}

function buildRows(items, containerWidth) {
  const rows = [];
  let currentRow = [];
  let ratioSum = 0;
  const gap = getCurrentGap();
  const targetHeight = getRowHeightTarget();
  const maxItems = getMaxItemsInRow();
  const maxWidthForTarget = containerWidth * (isMobileViewport() ? 1.05 : 1.15);

  items.forEach((item, index) => {
    const boost = !isMobileViewport() && index % 6 === 3 ? 1.18 : 1;
    const effectiveRatio = item.ratio * boost;

    currentRow.push({ ...item, effectiveRatio });
    ratioSum += effectiveRatio;

    const estimatedWidthAtTarget =
      ratioSum * targetHeight + (currentRow.length - 1) * gap;
    const reachedMaxCount = currentRow.length >= maxItems;
    const hasEnoughItems =
      currentRow.length >= (isMobileViewport() ? 2 : MOSAIC_CONFIG.minItemsPerRow);

    if (reachedMaxCount || (hasEnoughItems && estimatedWidthAtTarget >= maxWidthForTarget)) {
      rows.push({ items: currentRow, isLastRow: false });
      currentRow = [];
      ratioSum = 0;
    }
  });

  if (currentRow.length > 0) {
    rows.push({ items: currentRow, isLastRow: true });
  }

  return rows;
}

function renderMosaic(items) {
  if (!gallery || !items.length) return;

  const gap = getCurrentGap();
  const containerWidth = gallery.getBoundingClientRect().width || window.innerWidth;
  const rows = buildRows(items, containerWidth);
  const targetHeight = getRowHeightTarget();

  gallery.innerHTML = "";
  gallery.style.display = "flex";
  gallery.style.flexDirection = "column";
  gallery.style.gap = `${gap}px`;

  rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "mosaic-row";
    rowEl.style.display = "flex";
    rowEl.style.gap = `${gap}px`;
    rowEl.style.alignItems = "stretch";

    const totalGaps = (row.items.length - 1) * gap;
    const availableWidth = Math.max(containerWidth - totalGaps, 100);
    const sumRatios = row.items.reduce((acc, el) => acc + el.effectiveRatio, 0);

    const idealHeight = availableWidth / sumRatios;
    const rowHeight = row.isLastRow
      ? Math.min(idealHeight, targetHeight * 1.1)
      : Math.max(Math.min(idealHeight, targetHeight * 1.35), targetHeight * 0.75);

    row.items.forEach((entry) => {
      const figure = document.createElement("figure");
      figure.className = "photo-item";

      const isPortrait = entry.naturalHeight > entry.naturalWidth;
      figure.classList.add(isPortrait ? "is-portrait" : "is-landscape");

      const width = Math.round(rowHeight * entry.effectiveRatio);
      const height = Math.round(rowHeight);

      figure.style.flex = row.isLastRow ? "0 0 auto" : `${entry.effectiveRatio} 0 0`;
      figure.style.width = `${width}px`;
      figure.style.height = `${height}px`;
      figure.style.margin = "0";
      figure.style.overflow = "hidden";

      const img = document.createElement("img");
      img.src = entry.url;
      img.alt = "Fotografija";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.style.display = "block";

      figure.addEventListener("click", () => openLightbox(entry.url));

      figure.appendChild(img);
      rowEl.appendChild(figure);
    });

    gallery.appendChild(rowEl);
  });
}

function initGallery() {
  renderTopHeader();
  createLightbox();

  if (!gallery || !photos.length) return;

  const loadPromises = photos.map((url) => {
    return new Promise((resolve) => {
      const probe = new Image();
      probe.onload = () => {
        const w = probe.naturalWidth || 4;
        const h = probe.naturalHeight || 3;
        const ratio = w / h;
        ratioMap.set(url, { url, ratio, naturalWidth: w, naturalHeight: h });
        resolve();
      };
      probe.onerror = () => {
        ratioMap.set(url, { url, ratio: 4 / 3, naturalWidth: 4, naturalHeight: 3 });
        resolve();
      };
      probe.src = url;
    });
  });

  Promise.all(loadPromises).then(() => {
    const orderedItems = photos.map((url) => ratioMap.get(url));
    renderMosaic(orderedItems);

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => renderMosaic(orderedItems), 120);
    });
  });
}

initGallery();
