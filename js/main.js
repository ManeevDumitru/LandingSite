$(document).ready(function(){
    audioSound();
    translateWhenScrollKojima();
    scrollToEllement();
    scrollToMG();
    scrollToSnatcher();
    scrollToMGS5TPP();
});

function audioSound (){
    $('audio').prop("volume",0.1);  
}

/*function translateWhenScrollKojima(){
    var scroll = $(window).scrollTop();
    $('.sectionHideoKojima').css({
        transform: 'translate3d(-50px, 0)'
    });
}

function scrollToMG() {
    $("#MG").click(function (){
        var audio = document.getElementById('mG1987');
        $('html, body').animate({
            scrollTop: $(".sectionMG1987").offset().top
        },1);
        audio.play();
        setTimeout(function() {
            var audio = document.getElementById("mG1987"); 
            $('audio').prop("volume",0.02);  
        },8000);
    });
}

function scrollToSnatcher() {
    $("#Sn").click(function (){
        var audio = document.getElementById('sNatcher');
        $('html, body').animate({
            scrollTop: $(".sectionSnatcher").offset().top
        },1);
        audio.play();
        setTimeout(function() {
            var Audio = document.getElementById("narutoo"); 
            Audio.pause();
        },2200);
    });
}

function scrollToMGS5TPP() {
    $("#MGS5TPP").click(function (){
        var audio = document.getElementById('mGS5TPP');
        $('html, body').animate({
            scrollTop: $(".sectionMGS5TPP").offset().top
        },1);
        audio.play();
    });
}*/

/* ///////////////////////////// */

document.getElementById('button').addEventListener("click", goAway);
function goAway() {
    $('.startupSection').fadeOut(300);
    $('body').css({
        'overflow':'visible'
    });
    /*let audio = document.getElementById('mGS5TPP');
    audio.play();*/
}

