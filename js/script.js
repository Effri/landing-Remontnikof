$(document).ready(function(){
    var HeaderTop = $('#header').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
			$('#header').addClass('fixed');
			$('#col-tom-item2').addClass('col-md-3_5');
			$('#col-tom-item3').addClass('col-md-4_5');
			$('header').addClass('header-top');
        } else {
			$('#header').removeClass('fixed');
			$('#col-tom-item2').removeClass('col-md-3_5');
			$('#col-tom-item3').removeClass('col-md-4_5');
			$('header').removeClass('header-top');
        }
    });
});

$(document).ready(function(){
$(".date").click(function(e) {
	e.preventDefault();
	$(".date").removeClass('button active');
	$(this).addClass('button active');
  });
});

$(document).ready(function() {

	$('input[name="phone"]').mask('+7 (999) 999-99-99');

	for (var i = 0; i < $('.step-slide').length - 1; i++) {
		$('.step__extender').append('<div class="step__extender-item"></div>');
	};

	var progress = {
		current: ( 100 / ($('.step-slide').length - 1) ),
		total: $('.step-slide').length,
		width: ( 100 / ($('.step-slide').length - 1) ),
		process: doProgress
	};

	function doProgress () {}

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
			// первоначальные стили
			$('.main-progress__text').eq(currentIndex).addClass('main-progress__text_active');
			$('.step__extender-item').eq(currentIndex).addClass('step__extender-item_active');
			$('.main-progress__extender').css('width', progress.width + '%');

		},
		onSlideAfter: function (slideElement, oldIndex, newIndex) {
			// активация кнопок
			$('.btn-next-container').removeClass('btn-next-container_active');
			$('.btn-next').removeClass('btn-next_active btn-shine');

			// изменение полосы загрузки
			progress.current += progress.width;
			console.log($('.main-progress').css('width'));
			console.log($('.main-progress__extender').css('width'));
			// $('.main-progress__extender').css('width', 100 +'%');
			
			if ( $('.main-progress').css('width') == $('.main-progress__extender').css('width')){
				$('.main-progress__extender').css('width', progress.current + '%');
				$('.main-progress__extender').css('border-bottom-right-radius', 0 + 'px');
			}
			else {
				$('.main-progress__extender').css('border-bottom-right-radius', 10 + 'px');
				$('.main-progress__extender').css('width', progress.current + '%');
			}
			// console.log(progress);
			// изменение шага
			$('.step__extender-item').eq(newIndex).addClass('step__extender-item_active');
			$('.step__text span').html(newIndex + 1);

			// изменение заголовка в полосе загрузки
			if ( $('.main-progress__text').eq(newIndex).length != 0 ) {
				$('.main-progress__text').eq(oldIndex).removeClass('main-progress__text_active');
				$('.main-progress__text').eq(newIndex).addClass('main-progress__text_active');
			};

		}
		
	});

	$('.pick-item__input').on('change', function(event) {
		event.preventDefault();
		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active');
		$('.btn-next').disabled = false;
	});

	$('.datepicker-here').click(function(event) {
        event.preventDefault();
        $('.btn-next-container').addClass('btn-next-container_active');
        $('.btn-next').addClass('btn-next_active');
        $('.btn-next').disabled = false;
      });



	$('form').each(function(index, el) {
		$(el).validate({
			rules:{
				"phone":{ required:true }
			},
			submitHandler: function(form){
				$(form).ajaxSubmit({
					type: 'POST',
					url: 'mail.php',
					success: function() {
						testSlider.goToSlide( $('.step-slide').length - 1 );
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