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


const slides = Array.from(document.getElementsByClassName('slideshow'))
slides.forEach(function (slide) {
	initSlideshow(slide)
})

function initSlideshow(element) {
	let slideIndex = 1;
	updateSlides();

	function updateSlides() {
		var i;
		var slides = element.getElementsByClassName("slides");
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		if (slideIndex < 1) {
			slideIndex = slides.length
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[slideIndex - 1].style.display = "block";
	}

	const nextButton = element.querySelector('.next')
	const prevButton = element.querySelector('.prev')

	nextButton.addEventListener('click', function () {
		slideIndex++
		updateSlides();
	})

	prevButton.addEventListener('click', function () {
		slideIndex--
		updateSlides();
	})

}
