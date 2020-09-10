jQuery(document).ready(function ($) {

    var $h = $(".ani-h");
    $h.waypoint(function () {
        $h.addClass("animate__animated animate__zoomIn");
    }, {
        offset: "40%"
    });

    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
}(jQuery));



