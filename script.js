const photos = [
  "https://res.cloudinary.com/zcvep3xs/image/upload/f_auto,q_auto/IMG_2331"
];

const gallery = document.getElementById("gallery");

photos.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Fotografija";
  img.loading = "lazy";
  gallery.appendChild(img);
});
