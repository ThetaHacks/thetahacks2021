var hamburger = document.querySelector(".hamburger");
var dropdown = document.querySelector(".dropdown_menu");
var body = document.querySelector("#top");
var a = 0;

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

hamburger.addEventListener("click", function() {
    if(a < 2) {
        a += 1;
    }
    hamburger.classList.toggle("is-active");
    dropdown.classList.toggle("dropdown_menu--animated");
    dropdown.classList.toggle("dropdown_menu-6");
    if(a > 1) {
        dropdown.classList.toggle("dropdown_menu-8");
    }
});

function reportWindowSize() {
    if(getWidth() > 1100) {
        if(dropdown.classList.contains("dropdown_menu-8")) {
            dropdown.classList.toggle("dropdown_menu-8");
            a = 0;
        }
    }
}

window.addEventListener('resize', reportWindowSize);