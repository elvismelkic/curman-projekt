$(function() {
    $(".nav__sub-list").hover(function () {
        $(".nav__sub-list")
            .prev(".nav__link")
            .toggleClass("nav__link--active");
    }, function () {
        $(".nav__sub-list")
            .prev(".nav__link")
            .toggleClass("nav__link--active");
    });

    $("#mobile-services").click(function () {
        $(this)
            .children(".mobile-nav__link")
            .children()
            .toggleClass("mobile-nav__open-caret");
        $(this)
            .children(".mobile-nav__sub-list")
            .toggleClass("mobile-nav__sub-list--visible");
    });
});