
$(document).ready(function() {
	var hddm = $('.hidden_menu');
	var menu = $('.nav');
	$(hddm).on('click', function() {
		menu.slideToggle();
	});
	$(window).resize(function() {
		var wid = $(window).width();
		if(wid > 992) {
			menu.removeAttr('style');
		}
	});

	$('.partner-carousel').owlCarousel({
		loop: true,
		slideSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});

	$('.sdr-slider').owlCarousel({
		loop: true,
		slideSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	$('.fotorama').fotorama();

	$('.item-slider').magnificPopup({
		type: 'image',
	});
	$('.item-gallery').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.flex-center div > a, .menu a').each(function () {
		var location = window.location.href;
		var link = this.href; 
		if(location == link) {
			$(this).addClass('active');
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.to-top').addClass('active');
		} else $('.to-top').removeClass('active');	
	});
	$('.to-top').on('click', function() {
		$('html, body').stop().animate({scrollTop: 0}, '800');
	});

});


$(window).on('load', function() {
	$('.preloader').delay(100).fadeOut('slow')
});
