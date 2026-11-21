const photos = [
  "OVDE_NALEPI_PRVI_LINK_SA_CLOUDINARYJA",
  "OVDE_NALEPI_DRUGI_LINK_SA_CLOUDINARYJA",
  "OVDE_NALEPI_TRECI_LINK_SA_CLOUDINARYJA"
];

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

photos.forEach((url) => {
  const figure = document.createElement("figure");
  figure.className = "photo-item";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Fotografija";
  img.loading = "lazy";

  // Kad se slika učita, proverava da li je vertikalna ili vodoravna i bira uklapanje
  img.addEventListener("load", () => {
    const isPortrait = img.naturalHeight > img.naturalWidth;

    if (isPortrait) {
      const choice = portraitLayouts[Math.floor(Math.random() * portraitLayouts.length)];
      figure.classList.add("is-portrait", choice);
    } else {
      const choice = landscapeLayouts[Math.floor(Math.random() * landscapeLayouts.length)];
      figure.classList.add("is-landscape", choice);
    }
  });

  figure.appendChild(img);
  gallery.appendChild(figure);
});
