// JavaScript File

 $('.button').click(function(){
 $('.button').hide();
 $('.cover').hide();
 $('.image').hide();
 newshape();
 });

// HIDING AFTER KEYPRESS
 $(window).keypress( function(event){
    var keycode = event.keyCode;
    $('.shape'+keycode).show();
    $('.shape'+keycode).hide();
});

// ADDING NEW CIRCLES
function newshape(){
    var key = Math.floor(Math.random() * (48 - 90+1 )) + 90;
    var no = String.fromCharCode(key);
    var top = Math.floor(Math.random() * ($(window).height() - 100)) + "px";
    var left = Math.floor(Math.random() * ($(window).width() - 100)) + "px";
    $('body').append('<div class="shape shape'+ key + '" style="left: '+ left +'; top:'+top+'; border-radius:'+'50%'+'; background-color:'+'">'+ no +'</div>');
    setTimeout(newshape, 900);
}


var startDate = new Date();
var startTime = startDate.getTime();

// GETTING TIME SINCE THE PAGE WAS LOADED
function seconds_elapsed () 
{ 
var date_now = new Date (); 
var time_now = date_now.getTime (); 
var time_diff = time_now - startTime; 
var seconds_elapsed = Math.floor ( time_diff / 1000 ); 

return ( seconds_elapsed ); 
} 

// CONVERTING TIME FOR OUTPUT
function time_spent () 
{ 
var secs = seconds_elapsed ();

// CONVERTING SECONDS TO MINUTES AND SECONDS
var mins = Math.floor ( secs / 60 );
secs -= mins * 60;

// CONVERTING MINUTES TO HOURS AND MINUTES
var hour = Math.floor ( mins / 60 );
mins -= hour * 60;

// DISPLAYING THE FINAL OUTPUT 
document.display.timeElapsed.value = pad ( hour ) + ":" + pad ( mins ) + ":" + pad ( secs );

// RE-RUN THE FUNCTION EVERY SECOND
setTimeout( "time_spent ()", 1000 ); 
}

// ADDING A LEADING ZERO (IF NECESSARY) FOR OUTPUT
function pad ( num )
{
return ( ( num > 9 ) ? num : "0" + num );
}