// JavaScript File

$( document ).ready(function() {
 
 newshape();

});


// ADDING NEW CIRCLES


function newshape(){
    var color = "#" + Math.floor(Math.random()*16777215).toString(16);
    var top = Math.floor(Math.random() * ($(window).height() - 200)) + "px";
    var left = Math.floor(Math.random() * ($(window).width() - 200)) + "px";
    var newPad = Math.floor(Math.random()*100 + "px");
    $('body').append('<div class="shape shape'+'" style="left: '+ left +'; top:'+top+'; padding:'+newPad+'; border-radius:'+'50%'+'; background-color:'+color+'">'+'</div>');
   // $("shape").css({height:newSize, width:newSize, top:top, left:left})
    //setTimeout(newshape, 900);
    setTimeout(function(){
  $('.shape').remove();
}, 7000);
setTimeout(newshape, 8000);
}
