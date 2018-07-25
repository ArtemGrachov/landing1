$('.gallery-list').slick({
  centerMode: true,
  slidesToShow: 3,
  touchThreshold: 50,
  prevArrow: $('.gallery-arrows__btn_left'),
  nextArrow: $('.gallery-arrows__btn_right'),
  responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.testimonials-list').slick({
  touchThreshold: 20,
  prevArrow: $('.testimonials__slider-toggle_left'),
  nextArrow: $('.testimonials__slider-toggle_right'),
});

$(document).ready(function () {
  let $headerTop = $('.header-top'),
    headerOffset = $('.header').offset().top,
    $scrollTopArrow = $('.up-btn');

  function scrollTo(pos) {
    $('html, body').stop();
    $('html, body').animate({
      scrollTop: pos
    })
  }

  $(window).on('scroll', function (e) {
    if (window.pageYOffset > headerOffset) {
      $headerTop.addClass('header-top_dark');
      $scrollTopArrow.addClass('up-btn_visible');
    } else {
      $headerTop.removeClass('header-top_dark');
      $scrollTopArrow.removeClass('up-btn_visible');
    }
  })

  $('.header-nav__link').on('click', function (e) {
    e.preventDefault();
    scrollTo($($(this).attr('href')).offset().top)
  })

  $('.up-btn').on('click', function (e) {
    e.preventDefault();
    scrollTo(0);
  })
})