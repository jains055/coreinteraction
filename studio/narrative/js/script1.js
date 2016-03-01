


$(document).ready(function(){
 
 
    $('.wing').click(function(){
     $('.wing').toggleClass('grayscale','color'); 
     $('.text1').toggleClass('notext'); 
    });
    
    $('.glove').click(function(){
     $('.glove').toggleClass('grayscale','color'); 
     $('.text2').toggleClass('notext'); 

    });
    
    $('.hook').click(function(){
     $('.hook').toggleClass('grayscale','color'); 
      $('.text3').toggleClass('notext'); 
    });
    
    $('.righteye').click(function(){
     $('.righteye').toggleClass('grayscale','color');
     $('.text4').toggleClass('notext'); 
    });
    
    $('.lefteye').click(function(){
     $('.lefteye').toggleClass('grayscale','color'); 
     $('.text5').toggleClass('notext'); 
    });
    
    $('.face').click(function(){
     $('.face').toggleClass('grayscale','color'); 
     $('.text6').toggleClass('notext'); 
    });

});
