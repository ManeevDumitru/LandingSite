$(document).ready(function () {
    audioSound();
    ticking();
    timeUntilRelease();
    moveLabel();
    verifyCompleing();
    switchSlide();
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
    if (x > 0)  {
        element.classList.remove('position');
    }
    if  (x === 0) {
        element.classList.add('position');
    } 
}

/*function verifyCompleing() {
    let input = document.getElementById('inputEmail');
    let checkbox = document.getElementById('inputCheckbox');
    console.log(input + ' ' + checkbox);
}*/

function switchSlide() {
    let box1 = document.getElementById('sliderBox1');
    let box2 = document.getElementById('sliderBox2');
    let box3 = document.getElementById('sliderBox3');
    let button1 = document.getElementById('r23');
    let button2 = document.getElementById('r24');
    let button3 = document.getElementById('r25');
    button1.addEventListener("click", function() {
        box1.style.display = "grid";
        box2.style.display = "none";
        box3.style.display = "none";
    });
    button2.addEventListener("click", function() {
        box1.style.display = "none";
        box2.style.display = "grid";
        box3.style.display = "none";
    });
    button3.addEventListener("click", function() {
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "grid";
    })
}

