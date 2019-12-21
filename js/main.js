$(document).ready(function () {
    audioSound();
    ticking();
    testing();
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
function testing() {
    let dateCurrent = new Date();
    let dateRelease = new Date("04/16/2020");
    let Difference = dateRelease.getTime() - dateCurrent.getTime();
    let Result = Math.floor(Difference / (1000 * 3600 * 24));
    console.log(Result);
    document.getElementById('releaseDate').innerHTML = Result;
}