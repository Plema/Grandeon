$(document).ready(function () {
    //section-number

    function countup(className) {
        var countBlockTop = $("." + className).offset().top;
        var windowHeight = window.innerHeight;
        var show = true;

        $(window).scroll(function () {
            if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
                show = false;

                $('.' + className).spincrement({
                    from: 1,
                });
            }
        })
    }


    $(function () {
        countup("count", $(".section-number.count").text());
        countup("count2", $(".section-number.count2").text());
    });

    //end
})