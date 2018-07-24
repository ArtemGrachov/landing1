$('.gallery-list').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 3,
  touchThreshold: 50,
  prevArrow: $('.gallery-arrows__btn_left'),
  nextArrow: $('.gallery-arrows__btn_right'),
});

$('.testimonials-list').slick({
  touchThreshold: 20,
  prevArrow: $('.testimonials__slider-toggle_left'),
  nextArrow: $('.testimonials__slider-toggle_right'),
});

$(document).ready(function () {
  var $headerTop = $('.header-top'),
    headerOffset = $('.header').offset().top;
  $(window).on('scroll', function (e) {
    if (window.pageYOffset > headerOffset) {
      $headerTop.addClass('header-top_dark');
    } else {
      $headerTop.removeClass('header-top_dark');
    }
  })
})