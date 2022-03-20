








$(document).ready(function(){



	// WoW
	new WOW().init();
	

	//mesomary and mixitup active

	$('.project-title li').on('click',function(){
		var selector=$(this).attr('data-filter');
		$('.project-wrap').isotope({
			filter:selector
		});
	});


	//isotope active
	$(".project-wrap").isotope();



	//hero-slider
	
	$('.hero-slider').owlCarousel({
		loop:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:3000,
        smartSpeed:1000,
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
	})
        

	//slider goal


	$('.slide-goal').owlCarousel({
		loop:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:3000,
        smartSpeed:1000,
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
	})



	
	

	//responsive navigation

	$('.responsive-menu-bar').on('click',function(){
		$('.menu').toggleClass('displayblock');
	});

		



	


});



$(window).scroll(function(){
	var ourWindow=$(this).scrollTop();

// menu fixed

if(ourWindow>100){
	$('body').addClass('fixed');
}else{
	$('body').removeClass('fixed');
}


}); 

