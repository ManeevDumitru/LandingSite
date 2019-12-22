$(document).ready(function () {
    audioSound();
    ticking();
    timeUntilRelease();
    moveLabel();
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