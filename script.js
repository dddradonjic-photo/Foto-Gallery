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
`;

const MOSAIC_CONFIG = {
  gap: 6,                 // usklađeno sa gap u style.css
  mobileGap: 4,           // razmak na ekranima do 640px
  desktopRowHeight: 215,  // visina reda na velikim ekranima (više fotografija u redu)
  tabletRowHeight: 175,   // visina reda na manjim ekranima / tabletima
  mobileRowHeight: 115,   // kompaktna visina reda na telefonu
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
    // Blaga dinamična razlika u veličini (poneka fotka malo veća, ali bez preteranog širenja)
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

      figure.appendChild(img);
      rowEl.appendChild(figure);
    });

    gallery.appendChild(rowEl);
  });
}

function initGallery() {
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
