window.onload = init;
function init() {
  $('#menu-button').removeClass('active-menu');
  $('#nav-dropdown').slideToggle(1);
}

  //  NAVBAR
  $('#menu-button').click(function(){
    $(this).toggleClass('active-menu');
    $('#nav-dropdown').slideToggle(300);
  });


  $(".social-list a").on("hover", function(){
    $(this).children().css("background-color", "red");
  });


  //  CALENDAR
  $('td').on('click', function(){
    if ($('td').text().length > 0) {
      $(this).toggleClass('mark');
    }
  });

  //  TABS
  $('#footer-nav a').on('click', function(e){
    e.preventDefault();
    $(this).addClass('active-tab').siblings().removeClass('active-tab');
    var tab = $(this).attr('href');
    $('.tab-content').not(tab).css('display', 'none');
    $(tab).fadeIn();
  });
