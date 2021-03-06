document.addEventListener("touchstart", function () {}, true);

$(window).scroll(function () {
    if ($(window).scrollTop() >= 20) {
        $('header').css('background-color', '#fff')
            .css('transition', '0.5s');
    } else {
        $('header').css('background-color', 'inherit')
            .css('transition', '0.5s');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 20) {
        $('header').css('background-color', '#fff')
            .css('transition', '0.5s');
    } else {
        $('header').css('background-color', 'inherit')
            .css('transition', '0.5s');
    }

});

$(window).resize(function () {
    if ($(window).width() >= 1280) {
        $('.header').removeClass('mobile');
    }

    if ($(window).width() < 1280) {
        $('.header').addClass('mobile');
    }
})

if ($(window).width() >= 1280) {
    $('.header').removeClass('mobile');
}

if ($(window).width() < 1279) {
    $('.header').addClass('mobile');
}

$(document).ready(function () {

    //Меню
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 20) {
            $('header').css('background-color', '#fff')
                .css('transition', '0.5s');
        } else {
            $('header').css('background-color', 'inherit')
                .css('transition', '0.5s');
        }

    });

    $(window).resize(function () {
        if ($(window).width() >= 1280) {
            $('.header').removeClass('mobile');
        }

        if ($(window).width() < 1280) {
            $('.header').addClass('mobile');
        }
    })

    if ($(window).width() >= 1280) {
        $('.header').removeClass('mobile');
    }

    if ($(window).width() < 1279) {
        $('.header').addClass('mobile');
    }


    $('.open-menu').on('click', function () {
        $('.menu-mobile').toggleClass('active');
    });

    $('.menu-mobile .menu-item').on('click', function () {
        $(this).children('.sub-menu').toggleClass('active');
    });

    $('.menu-item a').on('click', function () {
        if ($(this) !== $('.menu-item.menu-item-has-children a')) {
            $('.menu-mobile').removeClass('active');
        }
    });

    $('.cloze-menu').on('click', function () {
        $('.menu-mobile').removeClass('active');
        $('.answer').removeClass('active');
    })

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".menu-mobile");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".answer");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });


    //Попапы
    jQuery(function (a) {
            a(document).mouseup(function (b) {
                var c = a(".modall-body");
                c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modall"),
                    a(".modall").removeClass("active-modall"),
                    a(".body").removeClass("showing-modal"))
            })
        }),

        $('.close, ok').on('click', function () {
            $(".modall").removeClass('active-modall');
            $('.body').removeClass('showing-modal');
        });

    $('.politic').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-politic").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.login').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-login").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.authorization').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-authorization").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.registration').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-registration").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.request').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-request").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.call').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-call").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.ok').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-ok").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.recovery').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-recovery").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });



    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    })

});
