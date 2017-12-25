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

    /* Advanced search */

    var girlsInfo = {
        girl1: {
            photosCount: 12,
            top: true,
            name: "Кристиночка",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl1.png"
        },
        girl2: {
            photosCount: 3,
            top: true,
            name: "Диана",
            age: 20,
            online: true,
            city: "Самара",
            country: "Россия",
            photo: "girl2.png"
        },
        girl3: {
            photosCount: 145,
            top: true,
            name: "Аня",
            age: 18,
            online: true,
            city: "Ростов-на-Дону",
            country: "Россия",
            photo: "girl3.png"
        },
        girl4: {
            photosCount: 17,
            top: false,
            name: "Анжелика",
            age: 27,
            online: false,
            city: "Чебоксары",
            country: "Россия",
            photo: "girl4.png"
        },
        girl5: {
            photosCount: 12,
            top: true,
            name: "Кристиночка",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl5.png"
        },
        girl6: {
            photosCount: 12,
            top: true,
            name: "Кристиночка",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl6.png"
        },
        girl7: {
            photosCount: 12,
            top: true,
            name: "Анна",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl7.png"
        },
        girl8: {
            photosCount: 12,
            top: true,
            name: "Катя",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl8.png"
        },
        girl9: {
            photosCount: 12,
            top: true,
            name: "Марина",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl9.png"
        },
        girl10: {
            photosCount: 12,
            top: true,
            name: "Натали",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl10.png"
        },
        girl11: {
            photosCount: 12,
            top: true,
            name: "Вика",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl11.png"
        },
        girl12: {
            photosCount: 12,
            top: true,
            name: "Каролина",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl12.png"
        },
        girl13: {
            photosCount: 12,
            top: true,
            name: "Аня1",
            age: 28,
            online: false,
            city: "Ростов",
            country: "Россия",
            photo: "girl13.png"
        },
        girl14: {
            photosCount: 12,
            top: true,
            name: "Аня2",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl14.png"
        },
        girl15: {
            photosCount: 12,
            top: true,
            name: "Аня3",
            age: 28,
            online: false,
            city: "Краснодар",
            country: "Россия",
            photo: "girl15.png"
        },
        girl16: {
            photosCount: 12,
            top: true,
            name: "Аня4",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl16.png"
        },
        girl17: {
            photosCount: 12,
            top: true,
            name: "Аня5",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl17.png"
        },
        girl18: {
            photosCount: 12,
            top: false,
            name: "Кристиночка",
            age: 28,
            online: true,
            city: "Москва",
            country: "Россия",
            photo: "girl18.png"
        },
        girl19: {
            photosCount: 12,
            top: true,
            name: "Аня6",
            age: 28,
            online: false,
            city: "Москва",
            country: "Россия",
            photo: "girl19.png"
        },
        girl20: {
            photosCount: 12,
            top: true,
            name: "Аня7",
            age: 28,
            online: false,
            city: "Москва",
            country: "Россия",
            photo: "girl20.png"
        }
    };
    var countOfGirls = Object.keys(girlsInfo).length;

    function genetateGirlHtml(photosCount, top, name, age, online, city, country, photo) {
        var html = '';

        var girlTopStatusHtml = '';
        if (top) {
            girlTopStatusHtml = '<a href="#" class="girl__status">Топ</a>';
        }

        var girlOnlineStatusHtml = '';
        if (online) {
            girlOnlineStatusHtml = '<span class="girl-online"></span>';
        }

        html = '' +
            '<div class="col-lg-3 col-sm-6 col-12">' +
                '<div class="girl">' +
                    '<div class="girl__photos-wrap">' +
                        '<img src="./src/imgs/girls/' + photo + '" alt="Girl 1">' +
                        '<div class="girl__photos">' +
                            '<a href="#" class="girl__photos_count">' +
                                '<img src="./src/imgs/photo.svg" alt="Camera">' +
                                '<span>' + photosCount + '</span>' +
                            '</a>' +
                            girlTopStatusHtml +
                        '</div>' +
                    '</div>' +

                    '<div class="girl__contact">' +
                        '<form action="" id="add-to-favorites">' +
                            '<input type="hidden" name="girl-id" value="">' +
                        '</form>' +

                        '<button class="girl__btn girl__btn--favorite" form="add-to-favorites">' +
                            '<img src="./src/imgs/star.svg" alt="Star">' +
                            '<span>Избранное</span>' +
                        '</button>' +

                        '<button class="girl__btn girl__btn--message">' +
                            '<img src="./src/imgs/message.svg" alt="Message">' +
                            '<span>Написать</span>' +
                        '</button>' +
                    '</div>' +

                    '<div class="girl__info">' +
                        '<p class="girl-ident"><span class="girl-ident__name">' + name + '</span>, <span class="girl-ident__age">'+ age +'</span>' + girlOnlineStatusHtml + '</p>' +
                        '<p class="girl-location"><span class="girl-location__city">' + city + '</span>, <span class="girl-location__country">' + country + '</span></p>' +
                    '</div>' +
                '</div>' +
            '</div>';

        return html;
    }

    function renderGirlsHtml(step) {
        var blockHtml = '';
        var currentGirl;
        var paginationFullHtml = '';

        if (!step) {step = 0}

        for (var i = step * 8; i < step * 8 + 8; i++) {
            currentGirl = girlsInfo['girl' + (i + 1).toString()];

            if (i < countOfGirls) {
                blockHtml += genetateGirlHtml(
                    currentGirl.photosCount,
                    currentGirl.top,
                    currentGirl.name,
                    currentGirl.age,
                    currentGirl.online,
                    currentGirl.city,
                    currentGirl.country,
                    currentGirl.photo);
            }
        }

        paginationFullHtml = generatePaginationHtml(step+1);

        $(".advanced-search__list .row").html(blockHtml).find('.girl__photos-wrap img').on('load', function () {
            $('.pagination').html(paginationFullHtml);
            $(".overlay").addClass("hidden");
        });

    }
    
    function generatePaginationHtml(current) {
        var paginationElementsHtml = '<li class="pagination__arrow pagination__arrow--left"><img src="./src/imgs/left-arrow.svg" alt="left arrow"></li>';
        var activeClass = '';

        for (var i=0; i < Math.ceil(countOfGirls/8); i++) {
            if (current === i+1){
                activeClass = 'class="active"'
            }else{
                (activeClass = '');
            }
            paginationElementsHtml += '<li ' + activeClass + ' data-value='+ (i+1) + '>' + (i+1) + '</li>';
        }

        paginationElementsHtml += '<li class="pagination__arrow pagination__arrow--right"><img src="./src/imgs/right-arrow.svg" alt="left arrow"></li>';

        return paginationElementsHtml;
    }

    /* Init girls block */
    $(document).ready(function () {
            renderGirlsHtml(0);

            $('.pagination').on('click', 'li[data-value]', function () {
                var activeElement = $(this).data("value") - 1;
                $('.overlay').removeClass("hidden");
                setTimeout(function () {
                    renderGirlsHtml(activeElement);
                }, 1000);
            });
        }
    );
})(jQuery);