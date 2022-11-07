const navSlide = () => {
  const burger = document.querySelector(".mobile_menu");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav .dropdown");
  const mobile_icon = document.querySelector(".mobile_icon");
  const close = document.querySelector(".close");

  burger.addEventListener("click", () => {
    mobile_icon.style.display = "flex";
    nav.classList.add("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.add("toggle");
  });

  close.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
};
navSlide();


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}