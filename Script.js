const photos = [
  "OVDE_NALEPI_LINK_SA_CLOUDINARYJA"
];

const gallery = document.getElementById("gallery");

photos.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Fotografija";
  img.loading = "lazy";
  gallery.appendChild(img);
});
