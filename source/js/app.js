// CONSISIT

var consistTabs = function() {
    var name = $(this).attr('class');
    var number = name.split("-")[3];
    $('.consist-content__item-' + number).addClass('active').siblings().removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
}

$(document).on('click', '.consist-nav__item', consistTabs);

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