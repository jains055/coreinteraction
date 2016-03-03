
var a = false;
var b = false;
var c = false;
var d = false;
var q = false;
var f = false;
var g = false;
var h = false;
var i = false;
var j = false;
var k = false;
var l = false;
var m = false;
var n = false;
var o = false;
var p = false;
var r = false;
var s = false;
var t = false;
var u = false;
var v = false;
var w = false;
var x = false;
var y = false;


function checkWin() {
    if (a == true && b ==true && c==true && d==true && q==true && f==true && g==true &&h==true) { 
     $(".sub3").show();
    }
}

function checkWin2() {
    if (i == true && j ==true && k==true && l==true && m==true && n==true && o==true &&p==true) { 
     $(".sub2").show();
    }
}

function checkWin3() {
    if (r == true && s ==true && t==true && u==true && v==true && w==true && x==true && y==true) { 
     $(".sub1").show();
    }
}


$(document).ready(function(){
    
    
    $(".sub1").hide();
    $(".sub2").hide();
    $(".sub3").hide();
   
    $(".a").click(function(e){
        $(".a").removeClass("flip");
        a = true;
         checkWin();
    });
    $(".b").click(function(e){
        $(".b").removeClass("flip");
        b = true;
         checkWin();
    });
    $(".c").click(function(e){
        $(".c").removeClass("flip");
        c = true;
         checkWin();
    });
    $(".d").click(function(e){
        $(".d").removeClass("flip");
        d = true;
         checkWin();
    });
    $(".q").click(function(e){
        $(".q").removeClass("flip");
        q = true;
         checkWin();
    });
    $(".f").click(function(e){
        $(".f").removeClass("flip");
        f = true;
         checkWin();
    });
    $(".g").click(function(e){
        $(".g").removeClass("flip");
        g = true;
         checkWin();
    });
    $(".h").click(function(e){
        $(".h").removeClass("flip");
        h = true;
         checkWin();
    });
      $(".i").click(function(e){
        $(".i").removeClass("flip");
        i = true;
         checkWin2();
    });
    $(".j").click(function(e){
        $(".j").removeClass("flip");
        j = true;
         checkWin2();
    });
    $(".k").click(function(e){
        $(".k").removeClass("flip");
        k = true;
         checkWin2();
    });
    $(".l").click(function(e){
        $(".l").removeClass("flip");
        l = true;
         checkWin2();
    });
    $(".m").click(function(e){
        $(".m").removeClass("flip");
        m = true;
         checkWin2();
    });
    $(".n").click(function(e){
        $(".n").removeClass("flip");
        n = true;
         checkWin2();
    });
    $(".o").click(function(e){
        $(".o").removeClass("flip");
        o = true;
         checkWin2();
    });
    $(".p").click(function(e){
        $(".p").removeClass("flip");
        p = true;
         checkWin2();
    });

      $(".r").click(function(e){
        $(".r").removeClass("flip");
        r = true;
         checkWin3();
    });
    $(".s").click(function(e){
        $(".s").removeClass("flip");
        s = true;
         checkWin3();
    });
    $(".t").click(function(e){
        $(".t").removeClass("flip");
        t = true;
         checkWin3();
    });
    $(".u").click(function(e){
        $(".u").removeClass("flip");
        u = true;
         checkWin3();
    });
    $(".v").click(function(e){
        $(".v").removeClass("flip");
        v = true;
         checkWin3();
    });
    $(".w").click(function(e){
        $(".w").removeClass("flip");
        w = true;
         checkWin3();
    });
    $(".x").click(function(e){
        $(".x").removeClass("flip");
        x = true;
         checkWin3();
    });
    $(".y").click(function(e){
        $(".y").removeClass("flip");
        y = true;
         checkWin3();
    });
    
});

