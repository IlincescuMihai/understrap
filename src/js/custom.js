jQuery('body').scrollspy({
    target: '.site-navigation',
    offset: 60
});


	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = jQuery('#wrapper-navbar').outerHeight();

	jQuery(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = jQuery(this).scrollTop();
		
		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;
		
		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			jQuery('#wrapper-navbar').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if(st + jQuery(window).height() < jQuery(document).height()) {
				jQuery('#wrapper-navbar').removeClass('nav-up').addClass('nav-down');
			}
		}
		
		lastScrollTop = st;
	}