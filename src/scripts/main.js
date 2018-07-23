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