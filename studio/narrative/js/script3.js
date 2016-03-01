// JavaScript File



$(document).ready(function(){
 
 
    $('.house').click(function(){
     $('.house').toggleClass('grayscale','color'); 
     $('.text1').toggleClass('notext'); 
    });
    
    $('.horn').click(function(){
     $('.horn').toggleClass('grayscale','color'); 
     $('.text2').toggleClass('notext'); 

    });
    
    $('.car').click(function(){
     $('.car').toggleClass('grayscale','color'); 
      $('.text3').toggleClass('notext'); 
    });
    
    $('.face2').click(function(){
     $('.face2').toggleClass('grayscale','color');
     $('.text4').toggleClass('notext'); 
    });
    
    $('.plate').click(function(){
     $('.plate').toggleClass('grayscale','color'); 
     $('.text5').toggleClass('notext'); 
    });
    
    $('.face1').click(function(){
     $('.face1').toggleClass('grayscale','color'); 
     $('.text6').toggleClass('notext'); 
    });

});
