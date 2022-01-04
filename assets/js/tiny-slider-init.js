
//Tiny slider
var slider = tns({
    container: '.client-review-slider',
    items: 1,
    controls: false,
    slideBy: "page",
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 15,
    responsive: {
        767: {
            items: 3
        },
    },
});