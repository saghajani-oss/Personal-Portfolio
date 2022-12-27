const hamburger = document.querySelector(".hamburger");
const menuSection = document.querySelector(".menu-section");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuSection.classList.toggle("active");
  body.classList.toggle("active");
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuSection.classList.remove("active");
  })
);
