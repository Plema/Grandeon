$(document).ready(function () {
    
    $('.bar-nav li').on('click', function(){
        $('.bar-nav li').removeClass('active');
        $(this).addClass('active');
    });

    jcf.replaceAll();

})