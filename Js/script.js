const navSlide = () => {
  const burger = document.querySelector(".mobile_menu");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav .dropdown");
  const mobile_icon = document.querySelector(".mobile_icon");
  const close = document.querySelector(".close");
  const last = document.querySelector(".last");
  const bg = document.querySelector(".bg");
  burger.addEventListener("click", () => {
    document.body.style.overflow="hidden"
    mobile_icon.style.display = "flex";
    bg.style.display = "block";
    nav.classList.add("nav-active");
    navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    });
    last.style.animation = `navLinkFade 0.5s ease forwards ${5 / 7 + 0.5}s`;
    burger.classList.add("toggle");
  });

  close.addEventListener("click", () => {
    bg.style.display = "none";
    document.body.style.overflow="auto"
    navLinks.forEach((link, index) => {
      link.style.animation = "";
    });
    last.style.animation = "";
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
};


navSlide();

let navbar = document.querySelector("nav");
let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  let scrollPos = window.scrollY;
  if (scrollPos > 200) {
    navbar.style.top = "-100px";
  }
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  }
  prevScrollpos = currentScrollPos;
});

let mobile_header = document.querySelector(".mobile_header");
let prevScrollpos2 = window.pageYOffset;
window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  let scrollPos = window.scrollY;
  if (scrollPos > 200) {
    mobile_header.style.top = "-100px";
  }
  if (prevScrollpos2 > currentScrollPos) {
    mobile_header.style.top = "0";
  }
  prevScrollpos2 = currentScrollPos;
});
