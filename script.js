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

function buildPhotoList(rawText) {
  const cleaned = rawText
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^["']|["'],?$/g, ""))
    .filter((line) => line.startsWith("http://") || line.startsWith("https://"));

  return [...new Set(cleaned)];
}

const photos = buildPhotoList(rawPhotoLinks);

// Nasumično meša redosled fotografija (Fisher–Yates)
for (let i = photos.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [photos[i], photos[j]] = [photos[j], photos[i]];
}

// Nasumične varijante uklapanja za vodoravne (landscape) slike
const landscapeLayouts = ["is-wide", "is-medium", "is-shift-left", "is-shift-right"];

// Nasumične varijante uklapanja za vertikalne (portrait) slike
const portraitLayouts = ["is-tall-center", "is-tall-left", "is-tall-right"];

const gallery = document.getElementById("gallery");

function applyOrientationLayout(img, figure) {
  if (!img.naturalWidth || !img.naturalHeight) return;

  figure.classList.remove(
    "is-portrait",
    "is-landscape",
    ...landscapeLayouts,
    ...portraitLayouts
  );

  const isPortrait = img.naturalHeight > img.naturalWidth;

  if (isPortrait) {
    const choice = portraitLayouts[Math.floor(Math.random() * portraitLayouts.length)];
    figure.classList.add("is-portrait", choice);
  } else {
    const choice = landscapeLayouts[Math.floor(Math.random() * landscapeLayouts.length)];
    figure.classList.add("is-landscape", choice);
  }
}

if (gallery) {
  photos.forEach((url) => {
    const figure = document.createElement("figure");
    figure.className = "photo-item";

    const img = document.createElement("img");
    img.src = url;
    img.alt = "Fotografija";
    img.loading = "lazy";

    img.addEventListener("load", () => applyOrientationLayout(img, figure));

    figure.appendChild(img);
    gallery.appendChild(figure);

    if (img.complete) {
      applyOrientationLayout(img, figure);
    }
  });
}
