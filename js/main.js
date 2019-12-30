$(document).ready(function () {
    audioSound();
    ticking();
    timeUntilRelease();
    moveLabel();
    verifyCompleing();
});

function audioSound() {
    $('audio').prop("volume", 0.1);
}

/* ///////////////////////////// */

function ticking() {
    let intervalBegin = window.setInterval(beepingIn, 750);
    let intervalEnd = window.setInterval(beepingOut, 1000);
    let item = document.getElementById('beepingItem');
    function beepingIn() {
        item.style.display = "none";
    }
    function beepingOut() {
        item.style.display = "block"
    }
    intervalBegin;
    intervalEnd;
}
function timeUntilRelease() {
    let dateCurrent = new Date();
    let dateRelease = new Date("04/16/2020");
    let Difference = dateRelease.getTime() - dateCurrent.getTime();
    let Result = Math.floor(Difference / (1000 * 3600 * 24));
    console.log(Result);
    document.getElementById('releaseDate').innerHTML = Result;
}

function moveLabel() {
    let input = document.getElementById('inputEmail');
    let element = document.getElementById('move');
    let x = input.value.length;
    if (x > 0) {
        element.classList.remove('position');
    }
    else {
        element.classList.add('position');
    }
}

function switchSlide() {
    let box1 = document.getElementById('sgsBox1');
    let box2 = document.getElementById('sgsBox2');
    let box3 = document.getElementById('sgsBox3');
    let button1 = document.getElementById('r23');
    let button2 = document.getElementById('r24');
    let button3 = document.getElementById('r25');
    box1.style.display = "block";
        box2.style.display = "none";
        box3.style.display = "none";
    button1.addEventListener("click", function () {
        box1.style.display = "block";
        box2.style.display = "none";
        box3.style.display = "none";
    });
    button2.addEventListener("click", function () {
        box1.style.display = "none";
        box2.style.display = "block";
        box3.style.display = "none";
    });
    button3.addEventListener("click", function () {
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "block";
    })
}

function slider() {
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // direction
        loop: true, // infinite scrolling
        speed: 200,
        allowTouchMove: false,
        effect: 'fade',
        navigation: {  // nav buttons
            nextEl: '.buttonNext',
            prevEl: '.buttonPrev',
        },
    })
}
