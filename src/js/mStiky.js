import $ from 'jquery'

$(document).ready(function () {
	var pantalla = $('.mSticky').offset().top;


	$(window).on('scroll',function () {
		if ($(window).scrollTop()>pantalla) {
			$('.mSticky').addClass('fixed-top');
		}else {
			$('.mSticky').removeClass('fixed-top');
		}
	})
})