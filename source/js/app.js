// CONSISIT

var consistTabs = function() {
    var name = $(this).attr('class');
    var number = name.split("-")[3];
    $('.consist-content__item-' + number).addClass('active').siblings().removeClass('active');
}

$(document).on('click', '.consist-nav__item', consistTabs);


$(".consist-nav__item").hover(function(){
    var name = $(this).attr('class');
    var number = name.split("-")[3];
    $('.consist-content__item-' + number).addClass('active').siblings().removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
});

// CONSISIT END