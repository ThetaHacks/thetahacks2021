const uA = navigator.userAgent;
const vendor = navigator.vendor;

if ((!(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))) || (/Safari/i.test(uA) && /Apple Computer/.test(vendor) && !/Mobi|Android/i.test(uA))) {
    var lastScrollTop = 0;
    var scrolled = false;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st >= lastScrollTop && !scrolled){
            if ($(document).scrollTop() < $(window).height() && !scrolled) {
                scrolled = true;
                console.log($(document).scrollTop());
            $([document.documentElement, document.body]).animate({
                scrollTop: $(window).height()
            }, 300, function () { scrolled = false;});
        }
        }
        lastScrollTop = st;
    });
}


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

function scrollToTop() {
    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 300);
}




function goto(i) {
    document.getElementById("schedule").style.display = "none";
    document.getElementById("prizes").style.display = "none";
    document.getElementById("sponsors").style.display = "none";
    document.getElementById("people").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("home").style.display = "none";

    document.getElementById(i).style.display = "block";
}