$(document).ready(function () {
    jcf.replaceAll();

    $(".tab-1").on("click", function () {
        $('.image').removeClass("active")
        $('.image-1').addClass("active")
        $(".image-2 .holder").slick("unslick")
        $('.image-1.active .holder').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            infinite: true,
            arrows: true,
            fade: true,
            dots: false,
            cssEase: 'linear',
            appendArrows: $('.image-1 .holder-btn'),
            prevArrow: '<button type="button" id="prev-2" class="btn-arrow prev"><i class="icon-back" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-2"class="btn-arrow next"><i class="icon-right" aria-hidden="true"></i></button>',
        })
    })

    $(".tab-2").on("click", function () {
        $('.image').removeClass("active")
        $('.image-2').addClass("active")
        $(".image-1 .holder").slick("unslick")
        $('.image-2.active .holder').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            infinite: true,
            arrows: true,
            fade: true,
            dots: false,
            cssEase: 'linear',
            appendArrows: $('.image-2 .holder-btn'),
            prevArrow: '<button type="button" id="prev-3" class="btn-arrow prev"><i class="icon-back" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-3"class="btn-arrow next"><i class="icon-right" aria-hidden="true"></i></button>',
        })
    })


    $('.image-1.active .holder').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        infinite: true,
        arrows: true,
        fade: true,
        dots: false,
        cssEase: 'linear',
        appendArrows: $('.image-1 .holder-btn'),
        prevArrow: '<button type="button" id="prev-2" class="btn-arrow prev"><i class="icon-back" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-2"class="btn-arrow next"><i class="icon-right" aria-hidden="true"></i></button>',
    })

    $('.image-2.active .holder').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        infinite: true,
        arrows: true,
        fade: true,
        dots: false,
        cssEase: 'linear',
        appendArrows: $('.image-2 .holder-btn'),
        prevArrow: '<button type="button" id="prev-3" class="btn-arrow prev"><i class="icon-back" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-3"class="btn-arrow next"><i class="icon-right" aria-hidden="true"></i></button>',
    })


    $(".filter-open").on("click", function () {
            $(this).next().addClass("active")
        }),
        $(".filter-list li").on("click", function () {
            $(".filter-list li").removeClass("active"),
                $(this).addClass("active"),
                $(this).parent(".filter-list").removeClass("active"),
                $(".filter-open").find("span b").text($(this).find("a").text())
        })

    $('data-fancybox="gallery"').fancybox({});
    $('data-fancybox="gallery2"').fancybox({});
})