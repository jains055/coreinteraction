// JavaScript File


$(document).ready(function(){
 
 
    $('.house').click(function(){
     $('.house').toggleClass('grayscale','color'); 
     $('.text1').toggleClass('notext'); 
    });
    
    $('.face2').click(function(){
     $('.face2').toggleClass('grayscale','color'); 
     $('.text3').toggleClass('notext'); 

    });
    
    $('.eye2').click(function(){
     $('.eye2').toggleClass('grayscale','color'); 
      $('.text2').toggleClass('notext'); 
    });
    
    $('.wheel').click(function(){
     $('.wheel').toggleClass('grayscale','color');
     $('.text4').toggleClass('notext'); 
    });
    
    $('.vase').click(function(){
     $('.vase').toggleClass('grayscale','color'); 
     $('.text5').toggleClass('notext'); 
    });
    
    $('.hat').click(function(){
     $('.hat').toggleClass('grayscale','color'); 
     $('.text6').toggleClass('notext'); 
    });

});


