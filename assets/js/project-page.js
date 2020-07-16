$(document).ready(function () {
    jcf.replaceAll();
    
    $('.banner-project .image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        infinite: true,
        arrows: true,
        fade: true,
        dots: false,
        cssEase: 'linear',
        appendArrows: $('.banner-project .holder-btn'),
        prevArrow: '<button type="button" id="prev-2" class="btn-arrow prev"><i class="icon-back" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-2"class="btn-arrow next"><i class="icon-right" aria-hidden="true"></i></button>',
    })

    $('data-fancybox="gallery"').fancybox({});

})