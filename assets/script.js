
$(document).ready(function() {


var lastScrollTop = 0;



$(window).scroll(function () {

var st = $(this).scrollTop();

		
        if ( (st < lastScrollTop && ($(window).scrollTop() + $(window).height() < $(document).height())) ||  ($(this).scrollTop()==0)   ){
            $(".header").fadeIn(1000);
        } 


        else if (st >0 || ($(window).scrollTop() + $(window).height() == $(document).height()) ){
          	$(".header").fadeOut("slow");
        }
        lastScrollTop = st;
  });


//CONTACT PAGE!!!



$(".link").click(function() {
		$("#modal-container").show();
		});


$("#submit-btn").click(function() {
		$("#modal-container").hide();
		});


$("#cancel-btn").click(function() {
		$("#modal-container").hide();	
		});

$("#modal-overlay").click(function() {
		$("#modal-container").hide();	
		});
	


$(".link").click(function(){
  $(".link").text("Thank you!");
});








$("li").hover(function() {
  $(this).stop().animate({
    width: "50%",
    height: "50%",

  });
}

, function() {
  $(this).stop().animate({
    width: "25%",
    height: "25%",
    
  });
}



);





});















