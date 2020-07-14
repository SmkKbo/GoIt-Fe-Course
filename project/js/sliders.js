$(document).ready(function() {
	
	//v1
	//----------------------------------------------
	// let container1 = $(".carusel-container1");
	// let slides_number = $(".carusel-element").size();
	// let circles = $(".circles-container");

	// for (let i = 0; i < slides_number; i++) {
	// 	circles.append("<li><div class=\"circle " + i + "-button\"></div></li>");
	// 	$("." + i +"-button").on("click", function() {
	// 		container1.css("transform", "translateX(" + i * -100 + "%)");
	// 	});
	// }

	//v2
	//----------------------------------------------
	// let sliders = {

	// 	mainFeatureSlider: {

	// 		slide: function(translate_percentage) {
	// 			return function() {
	// 				$(".carusel-container1").css("transform", "translateX(" + translate_percentage + "%)");
	// 			};
	// 		},

	// 		createCircles: function() {
	// 			for (let i = 0; i < $(".carusel-element").size(); i++) {
	// 				let that = this;
	// 				$(".circles-container").append("<li><div class=\"circle " + i + "-button\"></div></li>");
	// 				$("." + i +"-button").on("click", that.slide(i * -100));
	// 			}
	// 		},
	// 	},

	// 	featuredProducts: {

	// 	},
	// };

	// sliders.mainFeatureSlider.createCircles();

	//v3
	//----------------------------------------------

	(function mainSlider() {
		function slide(translate_percentage) {
			return function() {
				$(".carusel-container1").css("transform", "translate3d(" + translate_percentage + "%, 0, 0)");
			};
		}

		for (let i = 0; i < $(".carusel-element").size(); i++) {
			$(".circles-container").append("<li><div class=\"circle " + i + "-button\"></div></li>");
			$("." + i +"-button").on("click", slide(i * -100));
		}
	})();

	(function categoriesSlider() {
		let numberOfSlides = Math.ceil($('.category').size() / 3);
		let translate_percentage = 0;
		let iterator = 0;

		$('.right-arrow').on('click', toLeft());
		$('.left-arrow').on('click', toRight());
		
		function toLeft() {
			return function() {
				iterator += 1;

				if (iterator < numberOfSlides) {
					translate_percentage -= 100;
					$(".carusel-container2").css("transform", "translate3d(" + translate_percentage + "%, 0, 0)");
				} else {
					iterator = numberOfSlides - 1;
				}
			};
		}

		function toRight() {
			return function() {
				iterator -= 1;

				if (iterator >= 0) {
					translate_percentage += 100;
					$(".carusel-container2").css("transform", "translate3d(" + translate_percentage + "%, 0, 0)");
				} else {
					iterator = 0;
				}
			};
		}
	})();
});