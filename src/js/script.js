const navToggle = document.querySelector(".toggle-nav");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '75px',
    duration: 1250,
    delay: 250
});

scrollReveal.reveal('main');
scrollReveal.reveal('#info')
scrollReveal.reveal('#services', { origin: 'right' });
scrollReveal.reveal('#skills', { origin: 'left' });
scrollReveal.reveal('#team', { origin: 'top' });
scrollReveal.reveal('#contact', { origin: 'bottom' });