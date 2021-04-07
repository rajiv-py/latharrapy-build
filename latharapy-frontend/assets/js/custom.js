$('.services-carousel').owlCarousel({
	loop:true,
	nav: true,
	dots: false,
	autoplay:false,
	autoplayTimeout:3000,
	autoplayHoverPause:false,
	margin:10,
	navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
	responsiveClass:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
});

$('.news-carousel').owlCarousel({
	loop:true,
	nav: true,
	dots: true,
	autoplay:false,
	autoplayTimeout:3000,
	autoplayHoverPause:false,
	margin:30,
	navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
	responsiveClass:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:3
		}
	}
});