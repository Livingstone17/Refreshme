

var slideIndex = 0;

carousel();


function carousel() {
	var i;
	// get the array of sliders
	var slides = document.getElementsByClassName("carousel-item");
	
	// get the array of indicators
	var dots = document.getElementsByClassName("indicators");

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// increase by 1 global variable
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active"," ");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active ";
	// change the image every 2 seconds
	setTimeout(carousel, 5000);
}


var myIndex = 1;
showSlides(myIndex);
function plusSlides(n) {
	showSlides(myIndex += n);
}
function currentSlide(n) {
	showSlides(myIndex = n);
}
function showSlides(n) {
	var i;
	var ourSlides = document.getElementsByClassName("mySlides");
	var dot = document.getElementsByClassName("dot");
	if (n > ourSlides.length) {myIndex = 1}
	if (n < 1) { myIndex = ourSlides.length }
	for (i = 0; i < ourSlides.length; i++) {
		ourSlides[i].style.display = "none";
	}
	// myIndex++;
	for (i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace("active", "");
	}
	ourSlides[myIndex - 1].style.display = "block";
	dot[myIndex - 1].className += " active";
	setTimeout(showSlides, 5000);
}




(function ($) {
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function (event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});

})(jQuery);
	
// fc1ef7f0d8ba45688bfe39be80c4aa58
