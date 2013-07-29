jQuery(document).ready(function ($) {




var $container = $('#container');
$container.isotope({ layoutMode:'cellsByRow'});

$('#filters a').click(function(){
	
	var selector = $(this).attr('data-filter');
	$container.isotope({filter:selector, layoutMode:'cellsByRow'});
	return false;
	
});


$('.portfolio').on('mouseover', function(){
	$(this).find('.cover').show();

})

$('.portfolio').on('mouseout', function(){
	$(this).find('.cover').hide();

})

	


});