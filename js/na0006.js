window.onscroll = function() {myFunction()};
function myFunction() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

  if (window.pageYOffset <= sticky) {
    
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky");
  }
}
$( document ).ready(function() {
	$('.variable-width').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
  		autoplaySpeed: 5000,
  		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    	prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
	});
	$('.home-gallery .multiple-items').slick({
		dots: false,
		infinite: true,
		fade: false,
		slidesToShow: 3,
  		slidesToScroll:1,
  		autoplaySpeed: 5000,
  		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    	prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    	 responsive: [
    	 {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
    	 	}
    	 }
    	 ]
	});

	$('.menu-mobile').click(function(){
		$(this).parents().find('.menu').toggleClass('is-open');
	});
	$('.menu-top').click(function(){
		$(this).parents().find('.header-top').toggleClass('is-open');
	});
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#goTop').fadeIn(); 
        } else { 
            $('#goTop').fadeOut(); 
        } 
    }); 
    $('#goTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
});