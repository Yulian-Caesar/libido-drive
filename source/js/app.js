$('.review__slider-content').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.review__slider-counter-all').text(slick.slideCount);
    $('.review__slider-counter-this').text((currentSlide ? currentSlide : 0) + 1);
});
$('.review__slider-content').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: $('.review__slider-arrow--next'),
    prevArrow: $('.review__slider-arrow--prev'),
    autoplay: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 1350,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3
        }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
});
$('.review__slider-content').on('beforeChange', function (event, slick, slideIndex, currentSlide, nextSlide) {
    $('.review__slider-item').removeClass('active');
    $('.review__slider-counter-this').text(currentSlide + 1);
});

var reviewOpen = document.querySelectorAll('.review__slider-open');

for (var j = 0; j < reviewOpen.length; j++) {
    reviewOpen[j].addEventListener('click', function () {
        this.parentNode.classList.toggle('active');
    });
}
