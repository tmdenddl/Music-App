$(window).on('scroll', scrollHandler);
function scrollHandler() {
    var windowBottom = $(window).scrollTop() + $(window).height();

    // search through every playlist
    // if more than half of the playlist is revealed, fadeIn the playlist
    $('.playlists .playlist').each(function() {
        var playlistHalf = $(this).position().top + $(this).outerHeight()/2;

        if (playlistHalf < windowBottom) {
            $(this).animate({opacity: 1}, 1500);
        }
    });

    var currentPos = windowBottom - 42;
    var destPos = $(document).height() - 42 ;
    if (currentPos === destPos) {
        $('.to-top-btn').css('display', 'inline-block');
    } else {
        $('.to-top-btn').css('display', 'none');
    }
}

$('.to-top-btn').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 500);
})

// To initially activate the function on boot
scrollHandler();

