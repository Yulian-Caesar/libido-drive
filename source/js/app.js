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
// CONSISIT


var addConsistContent = function() {
    if($(window).width() > 479) {
        $('.consist-nav__box').removeClass('active');
        $(this).parent('.consist-nav__box').addClass('active');
    } else {
        $(this).parent('.consist-nav__box').toggleClass('active');
    }
};

$(document).on('click', '.consist-nav__item', addConsistContent);

// CONSISIT END


// STUDY

// додати клас count для тегу, де повинна відбуватися анімація
// додати data-name="необхідне відсоткове значення" для тегу, де повинна відбуватися анімація

$(document).ready(function(){
    $('.count').each(function(){
        this.innerHTML = '0';
    });
    var show = true;
    var countbox = ".study";											// назва блоку з лічильником
    $(window).on("scroll", function(){
        if(!show) return false;                   			// Відміна анімації, якщо вона уже була виконана
        var w_top = $(window).scrollTop();        			// Кількість пікселів на яку прокручена сторінка
        var e_top = $(countbox).offset().top - 300;     // Відстань від блоку з лічильника до верху всього документу
        var w_height = $(window).height();        			// Висота вікна браузера
        var d_height = $(document).height();      			// Висота всього документа
        var e_height = $(countbox).outerHeight(); 			// Повна висока блоку з лічильником
        if(w_top >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            console.log(e_top);
            $('.count').each(function(){
                $(this).animate({
                    count: $(this).data("name")
                }, {
                    duration: 2000,  														//час анімації
                    easing: 'swing',
                    step:function(now){
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            show = false;
        }
    });
});

// STUDY END


// RESULT

// додати клас count для тегу, де повинна відбуватися анімація
// додати data-name="необхідне відсоткове значення" для тегу, де повинна відбуватися анімація

$(document).ready(function(){
    $('.count-2').each(function(){
        this.innerHTML = '0';
    });
    var show = true;
    var countbox = ".result";											// назва блоку з лічильником
    $(window).on("scroll", function(){
        if(!show) return false;                   			// Відміна анімації, якщо вона уже була виконана
        var w_top = $(window).scrollTop();        			// Кількість пікселів на яку прокручена сторінка
        var e_top = $(countbox).offset().top - 300;     // Відстань від блоку з лічильника до верху всього документу
        var w_height = $(window).height();        			// Висота вікна браузера
        var d_height = $(document).height();      			// Висота всього документа
        var e_height = $(countbox).outerHeight(); 			// Повна висока блоку з лічильником
        if(w_top >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            console.log(e_top);
            $('.count-2').each(function(){
                $(this).animate({
                    count: $(this).data("name")
                }, {
                    duration: 2000,  														//час анімації
                    easing: 'swing',
                    step:function(now){
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            show = false;
        }
    });
});

// RESULT END
