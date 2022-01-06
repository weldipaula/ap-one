$('.slider').slick({
  dots: true,
  variableWidth: true,
  cssEase: 'ease-out',
  autoplay: true,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
