$(document).ready(function() {
	$('.timeline__comment').click(function (e) {
		$(this).children('.timeline__commenttext').toggleClass('is-visible');
	});

	$('.waveform__video').click(function (e) {
		$('body').toggleClass('is-visiblevideo')
	});
	$('.rough').click(function (e) {
		$('.rough').toggleClass('is-withleft is-withright')
	});
});