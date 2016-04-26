window.onload = init;
function init() {
  $('#menu-button').removeClass('active-menu');
  $('#nav-dropdown').slideToggle(1);
}


  $('#menu-button').click(function(){
    $(this).toggleClass('active-menu');
    $('#nav-dropdown').slideToggle(300);
  });

  $(".social-list a").on('hover', function(){
    var color = "#db4437";
    $(this, ".fa").css("color", "red");
  });
