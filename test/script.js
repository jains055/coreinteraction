// JavaScript File
$( document ).ready(function() {
    console.log( "ready!" );
    $(".block1").hide();
    $(".block2").hide();
    $(".block3").hide();
    $(".block4").hide();
    $(".block5").hide();
    $(".block6").hide();
    $(".block7").hide();
    
    
// Get a reference to the <path>
var path = document.querySelector('#line-path');

// Get length of path
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  console.log(scrollPercentage)
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
  

if (scrollPercentage > 0.0 && scrollPercentage <= 0.115 ) { // && scrollPercentage <= 0.05
$( ".block1" ).fadeIn( "slow", function() {
  });
} else {
  $(".block1").hide();
}

if (scrollPercentage > 0.115 && scrollPercentage <= 0.34 ) { // && scrollPercentage <= 0.05
$( ".block2" ).fadeIn( "slow", function() {
  });
} else {
  $(".block2").hide();
}

if (scrollPercentage > 0.34 && scrollPercentage <= 0.44 ) { // && scrollPercentage <= 0.05
$( ".block3" ).fadeIn( "slow", function() {
  });
} else {
  $(".block3").hide();
}

if (scrollPercentage > 0.45 && scrollPercentage <= 0.55 ) { // && scrollPercentage <= 0.05
$( ".block4" ).fadeIn( "slow", function() {
  });
} else {
  $(".block4").hide();
}

if (scrollPercentage > 0.55 && scrollPercentage <= 0.66 ) { // && scrollPercentage <= 0.05
$( ".block5" ).fadeIn( "slow", function() {
  });
} else {
  $(".block5").hide();
}

if (scrollPercentage > 0.66 && scrollPercentage <= 0.87 ) { // && scrollPercentage <= 0.05
$( ".block6" ).fadeIn( "slow", function() {
  });
} else {
  $(".block6").hide();
}

if (scrollPercentage > 0.88 && scrollPercentage <= 0.99 ) { // && scrollPercentage <= 0.05
$( ".block7" ).fadeIn( "slow", function() {
  });
} else {
  $(".block7").hide();
}

if (scrollPercentage <= 0 && scrollPercentage > 0.99 ) { // && scrollPercentage <= 0.05
$( ".instruction" ).show();
} else {
  $(".instruction").hide();
}

});

 $('.circle').click(function(){
    $('.info').toggleClass('none'); 
    $('.cover').toggleClass('none'); 
    });

});
