$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

// <div class="menu">
// 	<a href="#one">One</a>
// 	<a href="#two">Two</a>
// </div>

// <hr>

// <div id="one">First Element</div>

// <hr>

// <div id="two">Second Element</div>

// <hr>
