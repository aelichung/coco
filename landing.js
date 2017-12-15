$(function() {
  $('.menuToggle').click(function() {
    $('#sideMenu').toggle('fast');
  });
  $('.mainMenuBtn').click(function() {
    $('body').animate(
      {
        scrollTop:
          $($(this).attr('href')).offset().top -
          $('body').offset().top +
          $('body').scrollTop()
      },
      2000
    );
    return false;
  });
  $('.ticketsCTA').click(function() {
    $('body').animate(
      {
        scrollTop:
          $($(this).attr('href')).offset().top -
          $('body').offset().top +
          $('body').scrollTop()
      },
      'fast'
    );
    return false;
  });
  $('.jcarousel').jcarousel({
    // Configuration goes here
  });
  $('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });
});
