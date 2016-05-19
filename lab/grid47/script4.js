// JavaScript File


$( document ).ready(function() {

$(".a,.b,.c,.d,.e,.f,.h,.i,.g,.j,.k,.l,.m,.n,.o,.p,.q,.r,.s,.t,.u,.v,.w,.x,.y,.x,.z,.a2,.b2,.c2,.d2,.e2,.f2,.g2,.h2,.i2,.j2,.k2,.l2,.m2,.n2,.o2,.p2,.q2,.r2,.s2,.t2,.u2,.v2,.w2,.last").hide();

$('.re').click(function() {
    location.reload(true);
});


$('.last').delay(1000).fadeIn();


(function(){
   setTimeout(function(){
     window.location.href="html.html";
   },3500); /* 1000 = 1 second*/
})();

});

