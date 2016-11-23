$(document).ready(function(){

	

	if($(window).width() > 600){
		$(window).on("scroll", function(){

			revealOnScroll();

			var nav = $("nav"),
				navH = nav.height(),
				wScroll = $(this).scrollTop();
			if(wScroll > navH){
				nav.addClass("active");
			}else{
				nav.removeClass("active");
			}	
		});
	}

	$("nav").scrollspy({
		animate: true
	});

	var menu_btn = $(".hamburger"),
		menu_list = $(".page-nav");

	menu_btn.on("click", function(){
		menu_list.toggleClass("active");
	})	




});


function revealOnScroll(){

var $window = $(window),
	scrolled = $window.scrollTop(), 
	win_height_padded = $window.height() * 1.1;

	$('.revealOnScroll:not(.animated)').each(function(){
		var $this = $(this), offsetTop = $this.offset().top;
		if(scrolled + win_height_padded > offsetTop){
			if($this.data('timeout')){
				window.setTimeout(function(){
					$this.addClass('animated ' + $this.data('animation'));
				}, parseInt($this.data('timeout'), 10));
			}else{
				$this.addClass('animated ' + $this.data('animation'));
			}
		}
	});
	$('.revealOnScroll.animated').each(function(index){
		var $this = $(this), offsetTop = $this.offset().top;
		if(scrolled + win_height_padded < offsetTop){
			$(this).removeClass('animated fadeIn fadeInUp tada slideInRight slideInLeft slideInUp');
		}
	})
}	