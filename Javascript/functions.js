//OWL CAROSEL FUNCTION START
$('.reviews').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000, // Time in milliseconds (3 seconds)
    autoplayHoverPause: true, // Pause on hover
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 6,
            nav: false
        }
    }
});

//OWL CAROSEL FUNCTION ENDs