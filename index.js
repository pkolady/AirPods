$(document).ready(function() {
    $("#res").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#research").offset().top
                }, 800);
    });
});

$(document).ready(function() {
    $("#ser").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#service").offset().top
                }, 800);
    });
});

$(document).ready(function() {
    $("#com").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#community").offset().top
                }, 800);
    });
});

$(document).ready(function() {
 	 $("#sec4carrot").click(function(event) {
	event.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
	  });
	});

$(document).ready(function() {
    $("#sec1carrot").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#storysec2").offset().top
                }, 600);
    });
});

$(document).ready(function() {
    $("#sec2carrot").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#storysec3").offset().top
                }, 600);
    });
});

$(document).ready(function() {
    $("#sec3carrot").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#storysec4").offset().top
                }, 600);
    });
});

$(document).ready(function() {
    $("#mentorlink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#mentorborder").offset().top
                }, 800);
    });
});

$(document).ready(function() {
    $("#officerlink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#officerborder").offset().top
                }, 800);
    });
});

$(document).ready(function() {
    $("#memberlink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#memberborder").offset().top
                }, 800);
    });
});

$(document).ready(function(){
                $("#abt").hover(function(){
                    $("#dropdown-content").fadeToggle("fast");
                });
            });

$(document).ready(function(){
                $("#getin").hover(function(){
                    $("#dropdown-content2").fadeToggle("fast");
                });
            });

$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);

    if(scrollTop > 100) {
        document.getElementById("nav").style.boxShadow = "5px 5px 20px #555";
        document.getElementById("nav").style.opacity = "0.95";
    } 
    else if (scrollTop <= 100) {
      document.getElementById("nav").style.boxShadow = "0px 0px 0px #999";
      document.getElementById("nav").style.opacity = "1";
    }
  });  
});



function slide() {
	document.getElementById("right").style.opacity = "0";
	document.getElementById("left").style.opacity = "1";
	document.getElementById("video").style.opacity = "1";
	document.getElementById("video").style.width = "40%";
	document.getElementById("headercontainer").style.width = "100%";
	document.getElementById("headercontainer").style.opacity = "0.5";
    document.getElementById("headercontainer").style.paddingLeft = "0";
    document.getElementById("headercontainer").style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
	document.getElemenyById("headertext").style.width = "84%";
}

function slideback() {
	document.getElementById("right").style.opacity = "1";
	document.getElementById("left").style.opacity = "0";
	document.getElementById("video").style.opacity = "0";
	document.getElementById("video").style.width = "0%";
	document.getElementById("headercontainer").style.width = "55%";
    document.getElementById("headercontainer").style.clipPath = "polygon(0 0, 100% 0, 90% 100%, 0 100%)";
	document.getElementById("headercontainer").style.opacity = "0.9";
    document.getElementById("headercontainer").style.paddingLeft = "70px";
	document.getElemenyById("headertext").style.width = "43%";
}

function plus() {
	document.getElementById("plus").style.transform = "scale(0)";
	document.getElementById("minus").style.transform = "scale(1)";
}

function minus() {
	document.getElementById("plus").style.transform = "scale(1)";
	document.getElementById("minus").style.transform = "scale(0)";
}

$(document).ready(function(){
                $("#plus").click(function(){
                    $("#info").slideUp("fast");
                });
            });

$(document).ready(function(){
                $("#plus").click(function(){
                    $("#united").slideDown("fast");
                });
            });


$(document).ready(function(){
                $("#minus").click(function(){
                    $("#info").slideDown("fast");
                });
            });

$(document).ready(function(){
                $("#minus").click(function(){
                    $("#united").slideUp("fast");
                });
            });

$(document).ready(function(){
                $("#mentor1").hover(function(){
                    $("#mentortext1").slideToggle("fast");
                });
            });

$(document).ready(function(){
                $("#mentor2").hover(function(){
                    $("#mentortext2").slideToggle("fast");
                });
            });

$(document).ready(function(){
                $("#mentor3").hover(function(){
                    $("#mentortext3").slideToggle("fast");
                });
            });


function rotate(x) {
    x.classList.toggle("change");
}


$(document).ready(function(){
                $("#open").click(function(){
                    $("#expand").slideToggle("slow");
                });
            });

var slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}



function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block";

}

//Second carousel

var slideIndex2 = 1;

function plusDivs2(o) {
    showDivs2(slideIndex2 += o);
}

function showDivs2(o) {
    var j;
    var y = document.getElementsByClassName("mySlides2");
    if (o > y.length) {slideIndex2 = 1} 
    if (o < 1) {slideIndex2 = y.length} ;
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none"; 
    }
    y[slideIndex2-1].style.display = "block";
}

$(document).ready(function(){
                $("#about5").click(function(){
                    $("#dropdown-content3").slideToggle("fast");
                });
            });

$(document).ready(function(){
                $("#getin5").click(function(){
                    $("#dropdown-content4").slideToggle("fast");
                });
            });

$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

$(window).scroll(function() {
    $("#workcol1").css({
    'margin-top' : 70 - ($(this).scrollTop())/13
    });
    $("#workcol2").css({
    'margin-top' : 140 - ($(this).scrollTop())/9
    });
    $("#gal1").css({
    'margin-top' : ($(this).scrollTop())/20
    });
    $("#gal2").css({
    'margin-top' : ($(this).scrollTop())/40 - 20
    });
    $("#paraimg").css({
    'margin-top' : ($(this).scrollTop())/4
    });
    $("#headerimg").css({
    'margin-top' : ($(this).scrollTop())/3
    });
    $("#workimg").css({
    'margin-top' : ($(this).scrollTop())/4
    });
    $(".getinborder").css({
    'width': 80 - ($(this).scrollTop())/5 + "%"
    });
    $(".getinborder").css({
    'margin': "0% " + (100-(80 - ($(this).scrollTop())/5))/2 + "%"
    });
    if ($(window).width() < 1050) {
        $("#workcol1").css({
        'margin-top' : '0px'
        });
        $("#workcol2").css({
        'margin-top' : '0px'
        });
        $("#gal1").css({
        'margin-top' : '20px'
        });
        $("#gal2").css({
        'margin-top' : '20px'
        });
        $(".parallax-holder3").css({
        'opacity' : ($(this).scrollTop())/450 - 2
        });
        $("#headerimg").css({
        'margin-top': ($(this).scrollTop())/5
        });
        $("#workimg").css({
        'margin-top' : ($(this).scrollTop())/7
        });
    }
});

