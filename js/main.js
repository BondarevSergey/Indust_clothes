$(function () {
    $(".owl-carousel-1").owlCarousel({
        items: 1,
        nav: true
    });

    $(".owl-carousel-2").owlCarousel({
        items: 5,
        nav: true,
        autoplay: true,
        loop: true,
        dots: false
    });

    $(".js_height").matchHeight();
});
