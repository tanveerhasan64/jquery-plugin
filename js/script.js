$(document).ready(function(){

	
	// init Isotope start
	var $grid = $('.item-details').isotope({
  	// options
	});
	// filter items on button click
	$('.item-menu').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
	});
	// Isotope end


	// counter up

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// wow js
	new WOW().init();

	// slick slider
	$('.autoplay').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	});

	// owl carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

	// lightbox start

	$("#lightgallery").lightGallery();

	// lightbox end


	// magnific start

	$('.image').magnificPopup({
		type:'image'
	});

	// magnific end

});