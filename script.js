//Siden er loadet
window.addEventListener("load", siteLoaded);


function siteLoaded() {
	console.log("siteLoaded");

	// Lyt efter klik på burgermenu
	document.querySelector("#burgermenu").addEventListener("click", toggleMenu);
}

function toggleMenu() {
	console.log("toggleMenu");

	document.querySelector("#menupunkter").classList.toggle("toggle");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
