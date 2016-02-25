// JavaScript File
//var show = false;

//function checkWin() {
 //  if (show == true ) { 
  //   $(".text1").show();
  //  }
//}


$(document).ready(function(){
 
    $(".text1").hide();
    $(".text2").hide();
 
    $('.wing').click(function(){
     $('.wing').toggleClass('grayscale','color'); 
  //  show = true;
  //  checkWin();
      if ($('.wing').hasClass('.color')) {
     $('.text1').show;
     }
    });
    
    $('.glove').click(function(){
     $('.glove').toggleClass('grayscale','color'); 
     if ($('.glove').hasClass('.color')) {
     $('.text2').show;
     }
    });
    
    $('.hook').click(function(){
     $('.hook').toggleClass('grayscale','color'); 
    });
    
    $('.righteye').click(function(){
     $('.righteye').toggleClass('grayscale','color');
    });
    
    $('.lefteye').click(function(){
     $('.lefteye').toggleClass('grayscale','color'); 
    });
    
    $('.face').click(function(){
     $('.face').toggleClass('grayscale','color'); 
    });

});
