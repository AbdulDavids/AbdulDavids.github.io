// Smooth scrolling
$(document).ready(function() {
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
});

// Toggle menu
$(document).ready(function() {
	$('.menu-toggle').on('click', function() {
		$('.menu').toggleClass('open');
	});
});

// Form submission
$(document).ready(function() {
	$('form').on('submit', function(event) {
		event.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
		alert('Thank you for your message, ' + name + '! We will get back to you soon.');
		$('form')[0].reset();
	});
});
