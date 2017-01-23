$(function() {

/* * * * * smooth scrolling * * * * */
$(function() {
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
});

/* * * * * flickity * * * * */

$(function() {
    $('.product-list').flickity( {
        // options
        cellAlign: 'left',
        contain: true,
        percentPosition: false,
        imagesLoaded: true,
        autoPlay: true,
        prevNextButtons: false
        });
    });
});

/* * * * * email form * * * * */

$(function() {
    $('#subscribe').on('click', 'button', function(event) {
        event.preventDefault();
        if ($emailInput.val().length !== 5 ) {
            alert('Thanks for subscribing!');
            $emailInput.val('');
        } else {
            alert('Please submit a valid email address.');
        }
    });
});
});