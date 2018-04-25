jQuery(function(){
	var $ = jQuery;

	$.cookiesDirective({
		explicitConsent: false,
		position: 'bottom',
		duration: 9999,							
		limit: 0,
		message: $('input[name=cookieData]').attr('data-cookie-text'),	
		fontFamily:	'Arial',		
		fontColor: '#424a4d',
		fontSize: '13px',
		backgroundColor: '#eaeff1',
		backgroundOpacity: '80',
	});

	$('.cookieText').find('a').css({"color": "#424a4d", "text-decoration": "underline"});
	$('input[name=cookieData]').remove();
})
