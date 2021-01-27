

if (!(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))) {
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

    $("head").append(
        '<link rel="stylesheet" type="text/css" href="assets/css/notsafari.css">'
    );
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


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);
var radius = canvas.height / 2;

console.log(window.innerWidth);
console.log(radius*2);

if(window.innerWidth < radius*2) {
    radius = window.innerWidth/2;
} 

console.log(radius*2);
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock(0, 0);

function drawClock(hour, minute) {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0 ,radius * 0.95, 0, 2 * Math.PI);
    ctx.fillStyle="#000";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();

    drawNumbers(ctx, radius);
}



function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}






