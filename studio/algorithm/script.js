// JavaScript File

 $('.button').click(function(){
 $('.button').hide();
  $('.cover').hide();
   $('.image').hide();
 newshape();
 });
 

 $(window).keypress( function(event){
    var keycode = event.keyCode;
    $('.shape'+keycode).show();
    $('.shape'+keycode).hide();
});

function newshape(){
    var key = Math.floor(Math.random() * (48 - 90+1 )) + 90;
    var no = String.fromCharCode(key);
    var top = Math.floor(Math.random() * ($(window).height() - 200)) + "px";
    var left = Math.floor(Math.random() * ($(window).width() - 200)) + "px";
    $('body').append('<div class="shape shape'+ key + '" style="left: '+ left +'; top:'+top+'; border-radius:'+'50%'+'; background-color:'+'">'+ no +'</div>');
    setTimeout(newshape, 900);
}


// THESE TWO VARIABLES STORE THE TIME AND DATE WHEN THE PAGE IS LOADED
var startDate = new Date();
var startTime = startDate.getTime();

// THIS FUNCTION CALCULATES THE SECONDS ELAPSED SINCE THE PAGE WAS LOADED
function seconds_elapsed () 
{ 
var date_now = new Date (); 
var time_now = date_now.getTime (); 
var time_diff = time_now - startTime; 
var seconds_elapsed = Math.floor ( time_diff / 1000 ); 

return ( seconds_elapsed ); 
} 

// THIS FUNCTION TAKES THE SECONDS ELAPSED AND CONVERTS THEM FOR OUTPUT
function time_spent () 
{ 
// TAKE THE SECONDS ELAPSED
var secs = seconds_elapsed ();

// CONVERT SECONDS TO MINUTES AND SECONDS
var mins = Math.floor ( secs / 60 );
secs -= mins * 60;

// CONVERT MINUTES TO HOURS AND MINUTES
var hour = Math.floor ( mins / 60 );
mins -= hour * 60;

// DISPLAY THE FINAL OUTPUT TIME STRING
document.display.timeElapsed.value = pad ( hour ) + ":" + pad ( mins ) + ":" + pad ( secs );

// RECURSIVELY RE-RUN THE FUNCTION EVERY SECOND
setTimeout( "time_spent ()", 1000 ); 
}

// THIS FUNCTION INSERTS A LEADING ZERO (IF NECESSARY) TO PROVIDE UNIFORM OUTPUT
function pad ( num )
{
return ( ( num > 9 ) ? num : "0" + num );
}