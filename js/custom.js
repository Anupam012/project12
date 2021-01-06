

/* Product Slider Js */
$('.gallery_slider').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 5,
	arrows: false,
	autoplay: true,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	]
});
/* Product Slider Js */



$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $("body").toggleClass("open");
    });
	
	$('ul.navbar-nav li a').on('click', function(){
      $('.navbar-collapse').removeClass('show');
      $('body').removeClass('open');
    });
});





/* Sticky header Js */
$(window).scroll(function(){
	if ($(window).scrollTop() >= 120) {
	   $('.header').addClass('sticky');
	   $('body').addClass('add');
	}
	else {
	   $('.header').removeClass('sticky');
	   $('body').removeClass('add');
	}
});
/* Sticky header Js */






/* On scroll Js */
AOS.init();
AOS.init({disable: 'mobile'});

/* On scroll Js */



