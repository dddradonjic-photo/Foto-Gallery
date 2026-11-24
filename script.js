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
const PORTFOLIO_ITEMS = [
  // Primer strukture za kasnije:
  // {
  //   title: "Naziv murala ili rada",
  //   year: "2026",
  //   location: "Beograd",
  //   description: "Kratak opis rada ili narudžbine.",
  //   image: "https://..."
  // }
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

    // 2. PORTFOLIO (poseban slot)
    const portfolioBtn = document.createElement("button");
    portfolioBtn.type = "button";
    portfolioBtn.className = "nav-link";
    portfolioBtn.textContent = "PORTFOLIO";
    portfolioBtn.addEventListener("click", () => {
      setPhotoMenuOpen(false);
      navigateTo("portfolio");
    });
    nav
