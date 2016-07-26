var hasTouch = 'ontouchstart' in window;
var initializeNavbar = function(){
  var closeCollapseMenu = function(){
    if(hasTouch && $('#navbar-collapse').hasClass('in'))
      $('#navbar-collapse-btn').click();
  }
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
      closeCollapseMenu();
    }
    // Only in submenus of level 2 or more
    else if($(this).parents('.dropdown-submenu')[1]){
      $(this).parents('.dropdown-submenu').first().addClass('open');
    }

  });
  $('#navbar-collapse .category-dropdown li:not(.dropdown-submenu) a').click(function(e){
    closeCollapseMenu();
  });
  $('#navbar-collapse .navbar-form').submit(function(e){
    closeCollapseMenu();
  })
  $('.navbar-nav>.dropdown').click(function(e){
    if($(this).hasClass('open'))
      $(this).removeClass('open');
    else
      $(this).addClass('open');
  });
}
initializeNavbar();
