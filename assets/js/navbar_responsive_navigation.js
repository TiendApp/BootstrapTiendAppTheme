var hasTouch = 'ontouchstart' in window;
var initializeNavbar = function(){
  if(hasTouch == false){
    $('.navbar .dropdown-submenu, .navbar .dropdown').mouseenter(function(){
      $(this).addClass('open');
    });
    $('.navbar .dropdown-submenu, .navbar .dropdown').mouseleave(function(){
      $(this).removeClass('open');
    });
  }
  $('.dropdown-submenu [data-url], .dropdown [data-url]').click(function(e){
    if(hasTouch == false){
      window.location = $(this).data('url');
      $('.dropdown-submenu, .dropdown').removeClass('open');
    }
    // Workaround for mobile devices
    else if($(this).parents('.dropdown-submenu').first().hasClass('open')){
      window.location = $(this).data('url');
      $('.dropdown-submenu, .dropdown').removeClass('open');
    }
    // Only in submenus of level 2 or more
    else if($(this).parents('.dropdown-submenu')[1]){
      $(this).parents('.dropdown-submenu').first().addClass('open');
    }
  });

}
initializeNavbar();