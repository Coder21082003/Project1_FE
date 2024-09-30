$(document).ready(function() {
    
    // var loading_screen = function(times) {
    //     $('html').css('overflow-y', 'hidden');
    //     $('.loading-container').fadeIn();
    //     setTimeout(() => {
    //     $('html').css('overflow-y', 'auto');
    //     $('.loading-container').fadeOut();
    //     }, times); 
    // };
    // loading_screen(2000);

    
    $('.carousel').carousel();
    // $('.carousel').carousel('prev');

    $(this).scroll(function () {
        let heightTop = $(this).scrollTop();
        $('.carousel-image').css({
            'transform' : `translateY(${heightTop}px)`
        })
    });
    $('.btn-back-top').click(function() {
       $(window).scrollTop(0);
    });

})