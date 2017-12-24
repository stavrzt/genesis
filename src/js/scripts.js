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
    var mobileToggle = $(".navigation--menu-toggle"),
        mobileMenu = $(".navigation--list");

    mobileToggle.on("click touchend", function () {
        mobileToggle.toggleClass("active");
        mobileMenu.toggleClass("active");
    });



})(jQuery);