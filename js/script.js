window.onload = init;
function init() {

  //  NAVBAR
  $('#menu-button').click(function(){
    $(this).toggleClass('active-menu');
    $('#nav-dropdown').slideToggle(300).css('display', 'flex');
  });

  //VIDEO PLAYER
  $('.fa-play-circle').on('click', function(){
    $('#video-thumb, .fa-play-circle').css('display', 'none');
    $('iframe').attr('src', 'https://player.vimeo.com/video/63977087?autoplay=1&byline=0&portrait=0');
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
}
