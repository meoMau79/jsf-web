jQuery(document).ready(function ($) {

  /* Use this js doc for all application specific JS */

 
$('.info').hide();
$('.infofuzz').hide();

/*
$(".infofuzz").rotate({bind:{
      mouseover: function(){
//	alert('clicked');
    $(this).rotate({
	duration: 5000,
            angle: 0, 
            animateTo:180
          })
      }
  }
});*/



$('.portfolio').on("mouseover", function (){

	$(this).closest('.infofuzz').fadeToggle();
	
$(this).closest('.portfolio-item').find('.infofuzz').rotate({
	duration:8000,
	angle: 0,
	animateTo: 300
})

}).on('click', function (){
	
$(this).closest('.portfolio-item').find('.info').slideToggle();
	
}).on('mouseleave', function(){
$(this).closest('.portfolio-item').find('.info').slideToggle();
$('.infofuzz').fadeToggle();
});





  /* ALERT BOXES ------------ */
  $(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
    $(this).closest(".alert-box").fadeOut(function(event){
      $(this).remove();
    });
  });

  /* PLACEHOLDER FOR FORMS ------------- */
  /* Remove this and jquery.placeholder.min.js if you don't need :) */
  $('input, textarea').placeholder();

  /* TOOLTIPS ------------ */
  $(this).tooltips();

  /* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
  //  $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
  //  $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
  //  $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
  //  $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});


  /* DROPDOWN NAV ------------- */

  var lockNavBar = false;
  /* Windows Phone, sadly, does not register touch events :( */
  if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
    $('.nav-bar a.flyout-toggle').on('click.fndtn touchstart.fndtn', function(e) {
      e.preventDefault();
      var flyout = $(this).siblings('.flyout').first();
      if (lockNavBar === false) {
        $('.nav-bar .flyout').not(flyout).slideUp(500);
        flyout.slideToggle(500, function(){
          lockNavBar = false;
        });
      }
      lockNavBar = true;
    });
    $('.nav-bar>li.has-flyout').addClass('is-touch');
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').show();
    }, function() {
      $(this).children('.flyout').hide();
    });
  }

  /* DISABLED BUTTONS ------------- */
  /* Gives elements with a class of 'disabled' a return: false; */
  $('.button.disabled').on('click.fndtn', function (event) {
    event.preventDefault();
  });
  

  /* SPLIT BUTTONS/DROPDOWNS */
  $('.button.dropdown > ul').addClass('no-hover');

  $('.button.dropdown').on('click.fndtn touchstart.fndtn', function (e) {
    e.stopPropagation();
  });
  $('.button.dropdown.split span').on('click.fndtn touchstart.fndtn', function (e) {
    e.preventDefault();
    $('.button.dropdown').not($(this).parent()).children('ul').removeClass('show-dropdown');
    $(this).siblings('ul').toggleClass('show-dropdown');
  });
  $('.button.dropdown').not('.split').on('click.fndtn touchstart.fndtn', function (e) {
    $('.button.dropdown').not(this).children('ul').removeClass('show-dropdown');
    $(this).children('ul').toggleClass('show-dropdown');
  });
  $('body, html').on('click.fndtn touchstart.fndtn', function () {
    $('.button.dropdown ul').removeClass('show-dropdown');
  });

  // Positioning the Flyout List
  var normalButtonHeight  = $('.button.dropdown:not(.large):not(.small):not(.tiny)').outerHeight() - 1,
      largeButtonHeight   = $('.button.large.dropdown').outerHeight() - 1,
      smallButtonHeight   = $('.button.small.dropdown').outerHeight() - 1,
      tinyButtonHeight    = $('.button.tiny.dropdown').outerHeight() - 1;

  $('.button.dropdown:not(.large):not(.small):not(.tiny) > ul').css('top', normalButtonHeight);
  $('.button.dropdown.large > ul').css('top', largeButtonHeight);
  $('.button.dropdown.small > ul').css('top', smallButtonHeight);
  $('.button.dropdown.tiny > ul').css('top', tinyButtonHeight);
  
  $('.button.dropdown.up:not(.large):not(.small):not(.tiny) > ul').css('top', 'auto').css('bottom', normalButtonHeight - 2);
  $('.button.dropdown.up.large > ul').css('top', 'auto').css('bottom', largeButtonHeight - 2);
  $('.button.dropdown.up.small > ul').css('top', 'auto').css('bottom', smallButtonHeight - 2);
  $('.button.dropdown.up.tiny > ul').css('top', 'auto').css('bottom', tinyButtonHeight - 2);

  /* CUSTOM FORMS */
  $.foundation.customForms.appendCustomMarkup();

});