$(document).ready(function() {

	//Initialization of site scroll
	$('#fullpage').fullpage({
		anchors: ['top', 'products', '', 'projects', 'rok', 'services', 'rocks', '', 'contacts'],
		menu: '#nav',
		scrollOverflow: true,
		slidesNavigation: false,
		controlArrows: false,
		onLeave: function (index, nextIndex, direction) {
			var numberOfSections = $('#fullpage .section').length;
			var contacts = $('.contacts-hidden');
			var arrowUp = $('.arrow-up');
			if(nextIndex === numberOfSections && direction =='down') {
				console.log('last section');
				contacts.addClass('hide');
				arrowUp.removeClass('hidden');
			} else if (index === numberOfSections && direction == 'up') {
				console.log('leave last section');
				contacts.removeClass('hide');
				arrowUp.addClass('hidden');
			}
		}, 
		afterRender: function () {
			$('.container__inner').removeClass('hide');
			$('.contacts__inner').removeClass('hide');
		},
		afterResize: function () {
			map.container.fitToViewport();
		}
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

	$('.callback-link').magnificPopup({
		type: 'inline',
		midClick: true,
		mainClass: 'mfp-fade',
		removalDelay: 300
	});

	function goToCategory(e) {
		var currentCategory = $(e.currentTarget).closest('.product-category');
		var targetCategoryIndex = $(e.currentTarget).attr('data-category') || 'home';
		var targetCategory = $('#category-' + targetCategoryIndex);
		var allCategories = $('.product-category');

		targetCategory.addClass('top');
		currentCategory.animate(
				{
					'left': '-' + currentCategory.outerWidth() + 'px',
					'right': currentCategory.outerWidth() + 'px'
				}, 800, 'swing',
				function () {
					currentCategory.removeClass('active').css({left: 0, right: 0});
					targetCategory.addClass('active');
					allCategories.removeClass('top');
				}
		);
	}

	$('.product-link').on('click', function(e) {
		e.preventDefault();
		console.log(e);
		goToCategory(e);
	});

	$('.go-home-link').on('click', function (e) {
		e.preventDefault();
		goToCategory(e);
	})
});


// Яндекс карта
ymaps.ready(init);
var map;

function init() {
	map = new ymaps.Map('map', {
		center: [59.900946, 30.353367],
		zoom: 17,
		controls: []
	});

	var balloonLayout = ymaps.templateLayoutFactory.createClass(
			'<div class="map__balloon-wrapper">' +
			'<div class="map__balloon">' +
			'<span class="map__balloon-title">Головной офис</span>' +
			'<p class="map__balloon-address">г. Санкт-Петербург, <br>' +
			'Камчатская улица, д. 13А</p>' +
			'</div>' +
			'<div class="map__balloon-triangle"></div>' +
			'</div>'
	);

	var placemark = new ymaps.Placemark([59.900556, 30.350434], {}, {
		hideIconOnBalloonOpen: true,
		balloonLayout: balloonLayout,
		balloonOffset: [-40, -140]
	});

	map.geoObjects.add(placemark);
	map.behaviors.disable('scrollZoom');
	placemark.balloon.open();
}
