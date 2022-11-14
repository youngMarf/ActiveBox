$(function(){

    //  FIXED HEADER
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    checkSroll(scrollPos, introH);

    $(window).on("scroll resize", function() {

        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkSroll(scrollPos, introH);
    });


    function checkSroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    // SMOOTH SCROLL
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);

    });


    // NAV TOGGLE

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show")

    });


    // REVIEWS (https://kenwheeler.github.io/slick/)

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });


});