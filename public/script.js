const navBtn = document.querySelector(".navbar");
const navbar = document.querySelector(".navbar_nav");
const navBtnInt = document.querySelector(".nav_div");
const overlay = document.querySelector(".header-overlay");

navBtn.addEventListener("click", () => {
  navbar.classList.add("open");
  overlay.classList.add("open");
});
navBtnInt.addEventListener("click", () => {
  navbar.classList.remove("open");
  overlay.classList.remove("open");
});
overlay.addEventListener("click", () => {
  navbar.classList.remove("open");
  overlay.classList.remove("open");
});
