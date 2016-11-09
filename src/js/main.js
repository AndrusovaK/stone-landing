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
		var targetCategoryIndex = $(e.currentTarget).attr('data-category');
		var targetCategory = $('#category-' + targetCategoryIndex);


		targetCategory.addClass('top');
		currentCategory.animate(
				{
					'left': '-' + currentCategory.outerWidth() + 'px',
					'right': currentCategory.outerWidth() + 'px'
				}, 800, 'swing'
		);
	}

	$('.product-link').on('click', function(e) {
		e.preventDefault();
		goToCategory(e);
	});

	$('.go-home-link').on('click', function (e) {
		e.preventDefault();
		var allCategories = $('.product-category');
		$('#category-home').animate({
				'left': '0px',
				'right': '0px'
			}, 800, 'swing', function () {
			allCategories.removeClass('top');
			}
		);
	});


	// POPUPS

	var productsData = [
		{
			id: 'product1',
			productName: 'Брусчатка',
			description: 'Мы объединили более 20 производственных площадок ' +
			'в 5 регионах России и распределяем на них заказы от типовой облицовочной ' +
			'продукции до эксклюзивных высокохудожественных изделий в зависимости от ' +
			'профиля завода.',
			photoUrl_img: 'img/product-details/product-detail1.jpg',
		}
	];

	// пригодится для пхп
	/*var addEventListenerToForms = function () {
		$('.js-form').on('submit', function (e) {
			e.preventDefault();

			var form = $(this);
			form.find(':submit').removeAttr('disabled');

			var params = {};

			params.phone = form.find('input[name="phone"]').val();
			params.formName = form.attr('data-source');

			if(form.find('input[name="email"]').val()) {
				params.email = form.find('input[name="email"]').val();
			}

			$.ajax({
				type: "POST",
				dataType: 'json',
				url: $(form).attr('action'),
				data: params,
				beforeSend: function(data) { // сoбытиe дo oтпрaвки
					form.find('input[type="submit"]').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
				},
				success: function (data) {
					if (data.SUCCESS == 'Y') {
						$.magnificPopup.open({
							key: 'success-popup',
							items: {
								src: '#success-send-popup',
								type: 'inline'
							},
							mainClass: 'mfp-fade',
							removalDelay: 300
						});

						form.find('input[name="phone"]').val(null);
						form.find('input[name="email"]').val(null);

						setTimeout(autoClosePopup, 2000);

					} else {
						if(data.ERROR !== ""){
							openErrorPopup();
						}
					}
					form.find(':submit').removeAttr('disabled');
				},
				error: function (data) {
					openErrorPopup();
				}
			});
		});
	};*/

	function openProductModal (event) {
		$('.js-form').off('submit');

		var productInfo = productsData.filter(function (elem) {
			return elem.id === event.currentTarget.getAttribute('data-id');
		});

		var popupMarkup = $('#product-popup-markup').html();

		$.magnificPopup.open({
			items: productInfo,
			type: 'inline',
			inline: {
				markup: popupMarkup
			},
			mainClass: 'mfp-fade',
			removalDelay: 300,
			fixedContentPos: true,
			fixedBgPos: true
		});

		//addEventListenerToForms();

		// prevent click handler for touch screens
		event.preventDefault();
	}

	$('.detailed-product').on('click', openProductModal);
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
