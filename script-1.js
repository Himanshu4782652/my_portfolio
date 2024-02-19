//navigation bar effects on scroll 
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//services section - modal 
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

const modal = function (modalClick) { serviceModals[modalClick].classList.add("active"); }

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//portfolio section modal 
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCard = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

const portfolioModal = function (modalClick) { portfolioModals[modalClick].classList.add("active"); }

imgCard.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtns) => { portfolioCloseBtns.addEventListener("click", () => { portfolioModals.forEach((portfolioModalView) => { portfolioModalView.classList.remove("active"); }); }); });

//our client's swiper 
var swiper = new Swiper(".client-swiper", { slidesPerView: 1, spaceBetween: 30, loop: true, pagination: { el: ".swiper-pagination", clickable: true, }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", }, });

//website dark light theme 
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme"); themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme()); localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light"; const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme"); const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) { document.body.classListsavedTheme === "dark" ? "add" : "remove"; themeBtn.classListsavedIcon === "sun" ? "add" : "remove"; }

//scroll to top button 
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () { scrollTopBtn.classList.toggle("active", this.window.scrollY > 500); });

scrollTopBtn.addEventListener("click", () => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; });
const navItems = document.querySelectorAll(".nav-items a");

const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });

    // remove active class from all links
    navItems.forEach((item) => item.classList.remove("active"));

    // add active class to the current link
    event.currentTarget.classList.add("active");
};

navItems.forEach((item) => item.addEventListener("click", scrollToSection));

// handle active class on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const id = current.getAttribute("id");
        const navItem = document.querySelector(".nav-items a[href*=" + id + "]");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // remove active class from all links
            navItems.forEach((item) => item.classList.remove("active"));

            // add active class to the current link
            navItem.classList.add("active");
        }
    });
});