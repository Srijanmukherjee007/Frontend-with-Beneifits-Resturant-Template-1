const specialities = new Typewriter(document.getElementById('specialities-names'), {
    loop: true,
    delay: 100
});

specialities.typeString('Pizza')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Manchow Soup')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Biriyani')
    .pauseFor(2500)
    .start();

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        margin: 10,
        nav: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                nav: true,
            }
        }
    });
});