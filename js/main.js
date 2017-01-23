$(function () {

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });


    // $(function() {
    //     $('button').on('click', function() {
    //         if('input') === valid email function {
    //         confirm("You have been subscribed!")
    //         }
    //         else {
    //             confirm("Please enter a valid email")
    //         };
    //     });
    // });



});