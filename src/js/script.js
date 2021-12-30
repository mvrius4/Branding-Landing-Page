const navToggle = document.querySelector(".toggle-nav");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
})