$(function() {

    /* * * * * smooth scrolling * * * * */
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

    /* * * * * email form * * * * */
    $('.email-form').on("submit", function(event) {
        event.preventDefault()
        if($('#email').val()){
            alert('You still suck');
        }
        else {
            alert('you suck');
        }
    });
});



