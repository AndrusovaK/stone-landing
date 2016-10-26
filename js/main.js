$(document).ready(function() {

	//Initialization of site scroll
	$('#fullpage').fullpage({
		anchors: ['top', 'products', '', 'projects', 'rok', 'services', 'rocks', '', 'contacts'],
		menu: '#nav',
		scrollOverflow:true
	});

	//Slider initialization

	$('.projects__slider').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false
	});

	$('.services__slider').slick({
		prevArrow: $('.services__prev'),
		nextArrow: $('.services__next'),
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false
	});

	// Image popup
	$('.slider__content').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 300
	});

	$('.rocks__image').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 300
	});




});