(function($) {

	var logoAnimation = null;

	function createAnimation() {
		logoAnimation = new TimelineMax();
		logoAnimation.add(TweenMax.to('#desktop_logo', .5, {opacity: 0}));
		logoAnimation.add(TweenMax.set('.dl-animated-logo', {display: 'block'}));
		logoAnimation.add(TweenMax.to('.letzte-dreieck-seite', .3, {opacity: 1}));
		logoAnimation.add(TweenMax.from('.dreieck-seite', 1, {drawSVG: 0}, 1));
		logoAnimation.add(TweenMax.to('.kopf-svg', .5, {opacity: 1}), '-=.5');
	}

	$( document ).ready(function() {

		$('#desktop_logo/*, #mobile-header-sticky .col-mobile-logo */').after(
			'<div class="dl-animated-logo">' +
				dreieckKomplettSvg +
				kopfSvg +
			'</div>');

		$(window).scroll(function() {
			var position = $(window).scrollTop();
			if (position > 500 && $('.dl-animated-logo').css('display') === 'none') {
				if (logoAnimation === null) createAnimation();
				logoAnimation.play();
			}
			if (position === 500) {
				if (logoAnimation === null) createAnimation();
				logoAnimation.pause();
			}
			if (position < 500 && $('.dl-animated-logo').css('display') === 'block') {
				if (logoAnimation === null) createAnimation();
				logoAnimation.reverse();
			}
		})
	});

	var dreieckKomplettSvg =
		'svgCode';

	var kopfSvg =
		'svgCode';
})(jQuery);
