(function($){
		  
	$(document).ready(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////						   
		
		// -------------------------------------------------------------------------------------------------------
		// DD_belated - IE6 png transparency fix
		// -------------------------------------------------------------------------------------------------------
		
		if ( $.browser.msie ){
			if ( $.browser.version == 6 ){ // only apply the png transparency fix for Internet Explorer 6
				
				DD_belatedPNG.fix('#container, #logo a, #lighten, #social ul li a img');
				
			}
		}
			
		// -------------------------------------------------------------------------------------------------------
		// Fancybox - lightbox jQuery plugin
		// -------------------------------------------------------------------------------------------------------
		
		$("a.lightbox").fancybox({
			'overlayOpacity': 0.7,
			'overlayColor'	: '#111'
		});
		
		
		// -------------------------------------------------------------------------------------------------------
		// LocalScroll
		// -------------------------------------------------------------------------------------------------------
		
		$("#nav li a").click(function(){
			$("#nav li a").removeClass("active");		// Remove any "active" class
			$(this).addClass("active");					// Add "active" class to selected tab	
			return false;
		});
		
		$.localScroll.defaults.axis = 'y';
		$.localScroll({
			target:  '#container-inner',
			queue:    true,
			margin:   true,
			//hash:  	  true,							// Uncommenting this line adds #id-name's to the url
			//easing:  'elasout',						// Uncommenting this line adds a easing effect at the end of the scroll
			duration: 700
	
		});
	
		$.easing.elasout = function (x, t, b, c, d) {	// This function makes the easing effect if you have uncommented easing:  'elasout',
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				var s = p / 4;
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		};
		
		
		// -------------------------------------------------------------------------------------------------------
		// Slider
		// -------------------------------------------------------------------------------------------------------
		
		$("#slider").easySlider({					// ! do not change these settings
				auto: false,
				continuous: false,
				numeric: true
			});
		
		// -------------------------------------------------------------------------------------------------------
		// Social media icons animation
		// -------------------------------------------------------------------------------------------------------
		
		$('#social a').hover(function () {
			$('img', this).stop().animate({
				'marginLeft': 5
			},
			250);
		},
		
		function () {
			$('img', this).stop().animate({
				'marginLeft': 15
			},
			250);
		}).find('img').css('marginLeft', 10);
		
		// -------------------------------------------------------------------------------------------------------
		// Contact Form
		// -------------------------------------------------------------------------------------------------------
		
		$("#contact-form").submit(function(){
			var str = $(this).serialize();
			$.ajax({
			   type: "POST",
			   url: "_layout/php/send.php",
			   data: str,
			   success: function(msg)
			   {
					$("#formstatus").ajaxComplete(function(event, request, settings){
						if(msg == 'OK'){ // Message Sent? Show the 'Thank You' message and hide the form
							result = '<div class="formstatusok">Your message has been sent. Thank you!</div>';
							$("#fields").hide();
						}
						else{
							result = msg;
						}
						$(this).html(result);
					});
				}
			
			 });
			return false;
		});
		
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	});

})(window.jQuery);

// non jQuery plugins below

