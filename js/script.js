// mobile menu
const menu = document.querySelector("#mobile-menu");
const navList = document.querySelector(".nav-list");

menu.addEventListener(
    'click', function() {
        menu.classList.toggle("is-active");
        navList.classList.toggle("active");
})

//go to top btn
const goTopBtn = document.querySelector("#back-to-top");
goTopBtn.addEventListener(
    'click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
})