// JavaScript Document
jQuery(window).scroll(function() {    
  var scroll = jQuery(window).scrollTop();

  if (scroll >= 10) {
      jQuery("header").addClass("Fixed");
  } else {
      jQuery("header").removeClass("Fixed");
  }
});

jQuery(document).ready(function(){
//click scroll

$('#sec-btn').on('click', function(evt) {
  evt.preventDefault();
  const targetDivSelecter = '#' + $(this).data('target');
  // console.log(targetDivSelecter);
  
  $('html,body').stop(true, true).animate({
      scrollTop: $(targetDivSelecter).offset().top-0
  }, 900, 'swing');
})


/* wow js */

wow = new WOW(
  {
  animateClass: 'animated',
  offset:       100,
  callback:     function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
  }
);
wow.init();

});
