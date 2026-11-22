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
  gap: 8,                 // mali razmak između fotografija u pikselima (smanji na 4–6 za još gušći mozaik)
  targetRowHeight: 230, // osnovna visina reda na desktopu (manja vrednost = više slika po redu)
  minItemsPerRow: 3,    // najmanje slika u punom redu
  maxItemsPerRow: 6     // najviše slika u punom redu
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

// Čuva prirodan odnos stranica čim se učita
const ratioMap = new Map();

function getRowHeightTarget() {
  const w = window.innerWidth;
  if (w < 600) return 135;
  if (w < 1024) return 185;
  return MOSAIC_CONFIG.targetRowHeight;
}

function buildRows(items, containerWidth) {
  const rows = [];
  let currentRow = [];
  let ratioSum = 0;
  const targetHeight = getRowHeightTarget();
  const maxWidthForTarget = containerWidth * 1.12;

  items.forEach((item, index) => {
    // Povremeno (otprilike na svakoj 5. slici) dajemo malo veći "tezinski" udeo da bude dinamičnije
    const boost = index % 5 === 2 ? 1.25 : 1;
    const effectiveRatio = item.ratio * boost;

    currentRow.push({ ...item, effectiveRatio });
    ratioSum += effectiveRatio;

    const estimatedWidthAtTarget = ratioSum * targetHeight + (currentRow.length - 1) * MOSAIC_CONFIG.gap;
    const reachedMaxCount = currentRow.length >= MOSAIC_CONFIG.maxItemsPerRow;
    const hasEnoughItems = currentRow.length >= MOSAIC_CONFIG.minItemsPerRow;

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

  const containerWidth = gallery.clientWidth || window.innerWidth - 32;
  const rows = buildRows(items, containerWidth);
  const targetHeight = getRowHeightTarget();

  gallery.innerHTML = "";
  gallery.style.display = "flex";
  gallery.style.flexDirection = "column";
  gallery.style.gap = `${MOSAIC_CONFIG.gap}px`;

  rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "mosaic-row";
    rowEl.style.display = "flex";
    rowEl.style.gap = `${MOSAIC_CONFIG.gap}px`;
    rowEl.style.alignItems = "stretch";

    const totalGaps = (row.items.length - 1) * MOSAIC_CONFIG.gap;
    const availableWidth = Math.max(containerWidth - totalGaps, 100);
    const sumRatios = row.items.reduce((acc, el) => acc + el.effectiveRatio, 0);

    // Punimo ceo red da nema velike praznine na desnoj strani (osim ako je poslednji red baš kratak)
    const idealHeight = availableWidth / sumRatios;
    const rowHeight = row.isLastRow
      ? Math.min(idealHeight, targetHeight * 1.15)
      : Math.max(Math.min(idealHeight, targetHeight * 1.45), targetHeight * 0.72);

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

  // Učitavamo dimenzije svih slika da mozaik odmah zna tačne proporcije bez "skakanja"
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
