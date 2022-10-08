// hamburger
const hamburger = document.querySelector("#hamburger");
const kotak = document.querySelector("#kotak");
const kotak2 = document.querySelector("#kotak2");
const x = document.querySelector("#x");
//navMenu
const navMenu = document.querySelector("#nav-menu");

//navbarfixed
window.onscroll = function () {
  const header = document.querySelector("nav");

  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

hamburger.addEventListener("click", function () {
  kotak.classList.toggle("hidden");
  x.classList.toggle("hidden");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger && e.target != kotak && e.target != kotak2) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
    x.classList.add("hidden");
    kotak.classList.remove("hidden");
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: "3",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
