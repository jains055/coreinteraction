//function loop() {
  //  $('.bouncer').animate({'top': '500'}, {
    //    duration: 1500, 
      //  complete: function() {
        //    $('.bouncer').animate({top: 0}, {
          //      duration: 1000, 
            //    complete: loop});
    //    }});
//}
//loop();

//$(".bouncer").animate({top:"900px"},5000,function(){$(".bouncer").css({"top":"-280px"});});


$(function() {
  function loop(){
   $(".i1")
   .animate({top:"800px"},10000)
    $(".i1").css({"top":"-200px"})
    .animate({top:"800px"},loop);
  }
  loop(); // call this wherever you want
}); 

$(function() {
  function loop(){
   $(".i2")
   .animate({top:"800px"},10000)
    $(".i2").css({"top":"-200px"})
    .animate({top:"800px"},loop);
  }
  loop(); // call this wherever you want
}); 

$('.o').click(function(){
    $('.info').toggleClass('none'); 
    $('.info2').toggleClass('none'); 
    $('.i2').toggleClass('none'); 
    $('.k1').toggleClass('none'); 
    $('.k2').toggleClass('none'); 
     $('.i1').toggleClass('none'); 
    });
    
    $('.i1').click(function(){
    $('.books').toggleClass('none'); 
    $('.i2').toggleClass('none'); 
    $('.k1').toggleClass('none'); 
    $('.k2').toggleClass('none'); 
     $('.o').toggleClass('none'); 
      $('.tanaka').toggleClass('none'); 
    });
    
    $('.i2').click(function(){
    $('.posters').toggleClass('none'); 
    $('.i1').toggleClass('none'); 
    $('.k1').toggleClass('none'); 
    $('.k2').toggleClass('none'); 
     $('.o').toggleClass('none'); 
      $('.tanaka').toggleClass('none'); 
    });
    
      $('.k1').click(function(){
    $('.type').toggleClass('none'); 
    $('.i1').toggleClass('none'); 
    $('.i2').toggleClass('none'); 
    $('.k2').toggleClass('none'); 
     $('.o').toggleClass('none'); 
      $('.tanaka').toggleClass('none'); 
    });
    
         $('.k2').click(function(){
    $('.design').toggleClass('none'); 
    $('.i1').toggleClass('none'); 
    $('.i2').toggleClass('none'); 
    $('.k1').toggleClass('none'); 
     $('.o').toggleClass('none'); 
      $('.tanaka').toggleClass('none'); 
    });

