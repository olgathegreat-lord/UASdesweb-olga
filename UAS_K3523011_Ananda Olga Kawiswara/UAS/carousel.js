// This is script file

$('.testimonials-container').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})

