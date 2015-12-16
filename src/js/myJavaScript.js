$(document).ready(function () {

    $("#my-carousel").hover(function () {
        $(".myCarousel-control").attr('style', 'display:block;');

    }, function () {
        $(".myCarousel-control").attr('style', 'display:none;');

    });

    $(".opacity").hover(function () {
        $(this).attr('style', 'z-index:0;');
    }, function () {});

    $(".my_arrow").hover(function () {}, function () {
        $(".opacity").attr('style', 'z-index:2;');
    });

    $("ul.categories li").hover(function () {
        $(this).attr('style', 'color: #dd1515;');
        $(this).children().attr('style', 'color: #dd1515;');

    }, function () {
        $(this).attr('style', 'color: #c1c2c3;');
        $(this).children("span").attr('style', 'color: #000000;');
        $(this).children("a").attr('style', 'color: #5e605f;');

    });
});