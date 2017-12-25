(function ($, undefined) {
    "use strict";

    /* User menu */
    var userMenu = $('.user-menu');

    userMenu.on("click touchend", function (e) {
        var body = $("body");

        e.stopPropagation();
        userMenu.toggleClass("active");

        body.on("click touchend", function (e) {
            if ($(e.target).closest('.dropdown-menu').length === 0 && userMenu.hasClass("active")) {
                userMenu.removeClass("active");
                body.off("click");
            }
            else if (!userMenu.hasClass("active")) {
                body.off("click");
            }
        });
    });


    /* Mobile navigation */
    var mobileToggle = $(".navigation__menu-toggle"),
        mobileMenu = $(".navigation__list");

    mobileToggle.on("click touchend", function () {
        mobileToggle.toggleClass("active");
        mobileMenu.toggleClass("active");
    });

    /* Girl examples carousel, owl carousel init */
    $(".top-girls").owlCarousel({
        loop: true,
        margin: 7,
        items: 8,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            991: {
                items: 8
            }
        }
    });

    /* Age range */
    var ageRange = document.getElementsByClassName('age-range')[0];

    noUiSlider.create(ageRange, {
        start: [18, 23],
        step: 1,
        connect: true,
        tooltips: true,
        range: {
            'min': 18,
            'max': 34
        },
        format: {
            to: function ( value ) {
                return value + '';
            },
            from: function ( value ) {
                return value.replace('', '');
            }
        }
    });


})(jQuery);