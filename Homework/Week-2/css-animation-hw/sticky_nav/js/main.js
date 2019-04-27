$(window).on('scroll', function () {
// 	// Step 1: Google $(window).scrollTop();
	let distanceScrolled = $(window).scrollTop();
	let navbar = $(".sticky-nav-wrapper");
	if(distanceScrolled > navbar.offset().top) {
		navbar.addClass("scrolled");
	} else {
		navbar.removeClass("scrolled");
	}
	// console.log('The distance scrolled is: ' + distanceScrolled);
// 	// Step 2: Write Rest of JS here
});
