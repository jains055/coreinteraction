// JavaScript File


$( document ).ready(function() {

$(".a,.b,.c,.d,.e,.f,.h,.i,.g,.j,.k,.l,.m,.n,.o,.p,.q,.r,.s,.t,.u,.v,.w,.x,.y,.x,.z,.a2,.b2,.c2,.d2,.e2,.f2,.g2,.h2,.i2,.j2,.k2,.l2,.m2,.n2,.o2,.p2,.q2,.r2,.s2,.t2,.u2,.v2,.w2,.last").hide();

$('.re').click(function() {
    location.reload(true);
});


$('.o').delay(1000).fadeIn();
$('.r').delay(2000).fadeIn();
$('.a2').delay(3000).fadeIn();
$('.y').delay(5000).fadeIn();
$('.x').delay(6000).fadeIn();
$('.q').delay(7000).fadeIn();

$('.b2').delay(8000).fadeIn();
$('.s').delay(9000).fadeIn();
$('.z').delay(9500).fadeIn();
$('.u').delay(10000).fadeIn();
$('.p').delay(10500).fadeIn();
$('.v').delay(12000).fadeIn();
$('.c2').delay(13000).fadeIn();
$('.w').delay(14400).fadeIn();
$('.d2').delay(15000).fadeIn();

(function(){
   setTimeout(function(){
     window.location.href="pg3.html";
   },17500); /* 1000 = 1 second*/
})();

});

