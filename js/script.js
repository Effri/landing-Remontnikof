$(document).ready(function () {
	var HeaderTop = $('#header').offset().top;
	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$('#header').addClass('fixed');
			$('.nav-menu').addClass('fixed-nav');
			$('#col-tom-item2').addClass('col-md-3_5');
			$('#col-tom-item3').addClass('col-md-4_5');
			$('header').addClass('header-top');
		} else {
			$('#header').removeClass('fixed');
			$('.nav-menu').removeClass('fixed-nav');
			$('#col-tom-item2').removeClass('col-md-3_5');
			$('#col-tom-item3').removeClass('col-md-4_5');
			$('header').removeClass('header-top');
		}
	});
});



$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$('#header .collapse').removeClass("show");
			$(this).removeClass('active');
		})
		$('#header .collapse').removeClass("show");
		$(this).addClass('active');

		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			// 'scrollTop': $target.offset().top+2
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	$('#header a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr('href=#'));
		if (refElement.scrollTop() > 100 <= scrollPos && refElement.scrollTop() > 100 + refElement.height() > scrollPos) {
			$('#navbarNav ul li a').removeClass("active");
			$('#header .collapse').removeClass("show");
			currLink.addClass("active");
		} else {
			$('#header .collapse').removeClass("show");
			currLink.removeClass("active");
		}
	});
}

$(document).ready(function () {
	$(document).mouseup(function (e) {
		var div = $("#navbarNav ul li");
		if (!div.is(e.target) &&
			div.has(e.target).length === 0) {}
	});
});

$(document).ready(function () {
	$(".date").click(function (e) {
		e.preventDefault();
		$(".date").removeClass('button active');
		$(this).addClass('button active');
	});
});

$(document).ready(function () {

	$('input[name="phone"]').mask('+7 (999) 999-99-99');

	for (var i = 0; i < $('.step-slide').length - 1; i++) {
		$('.step__extender').append('<div class="step__extender-item"></div>');
	};

	var progress = {
		current: (100 / ($('.step-slide').length - 1)),
		total: $('.step-slide').length,
		width: (100 / ($('.step-slide').length - 1)),
		process: doProgress
	};

	function doProgress() {}

	var testSlider = $('.test-slider').bxSlider({
		mode: 'fade',
		infiniteLoop: false,
		speed: 0,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 0,
		touchEnabled: false,
		pager: false,
		nextSelector: '.btn-next-container',
		nextText: '<div class="btn-next"><button class="btn btn-danger"><span>Следующий вопрос</span></button></div>',
		onSliderLoad: function (currentIndex) {
			$('.main-progress__text').eq(currentIndex).addClass('main-progress__text_active');
			$('.step__extender-item').eq(currentIndex).addClass('step__extender-item_active');
			$('.main-progress__extender').css('width', progress.width + '%');

		},
		onSlideAfter: function (slideElement, oldIndex, newIndex) {
			$('.btn-next-container').removeClass('btn-next-container_active');
			$('.btn-next').removeClass('btn-next_active btn-shine');

			progress.current += progress.width;
			console.log($('.main-progress').css('width'));
			console.log($('.main-progress__extender').css('width'));

			if ($('.main-progress').css('width') == $('.main-progress__extender').css('width')) {
				$('.main-progress__extender').css('width', progress.current + '%');
				$('.main-progress__extender').css('border-bottom-right-radius', 0 + 'px');
			} else {
				$('.main-progress__extender').css('border-bottom-right-radius', 10 + 'px');
				$('.main-progress__extender').css('width', progress.current + '%');
			}
			$('.step__extender-item').eq(newIndex).addClass('step__extender-item_active');
			$('.step__text span').html(newIndex + 1);

			if ($('.main-progress__text').eq(newIndex).length != 0) {
				$('.main-progress__text').eq(oldIndex).removeClass('main-progress__text_active');
				$('.main-progress__text').eq(newIndex).addClass('main-progress__text_active');
			};

		}

	});

	$('.pick-item__input').on('change', function (event) {
		event.preventDefault();
		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active');
		$('.btn-next').disabled = false;
	});

	$('.datepicker-here').click(function (event) {
		event.preventDefault();
		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active');
		$('.btn-next').disabled = false;
	});



	$('form').each(function (index, el) {
		$(el).validate({
			rules: {
				"phone": {
					required: true
				}
			},
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					type: 'POST',
					url: 'mail.php',
					success: function () {
						testSlider.goToSlide($('.step-slide').length - 1);
						$('.header-line').slideUp(300);
						$('.progress-line').slideUp(300);
					}
				});
			}
		});
	});
});

$(".pick-item__label").hover(function () {

	$(this).next(".pick-item__label-problem").animate({
		opacity: "1"
	}, {
		queue: false
	});
}, function () {
	$(this).next(".pick-item__label-problem").animate({
		opacity: "0"
	}, {
		queue: false
	});
});

$(document).ready(function () {
	var galleryThumbs = new Swiper(".gallery-thumbs", {
		spaceBetween: 30,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			320: {
				spaceBetween: 10,
				slidesPerView: 2,
				height: 15,
			},
			768: {
				spaceBetween: 30,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			},
		},
	});
	var galleryTop = new Swiper(".gallery-top", {
		spaceBetween: 60,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
});

$(function () {
	$("#phone").mask("+7 (999) 999-99-99");
	$("#phone-second").mask("+7 (999) 999-99-99");
	$("#phone-third").mask("+7 (999) 999-99-99");
	$("#phone-four").mask("+7 (999) 999-99-99");
	$("#phone-quiz").mask("+7 (999) 999-99-99");
});

new WOW().init();
$(".datepicker-here").datepicker({
	minDate: "11.08.2020",
});