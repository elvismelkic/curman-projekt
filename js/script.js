// JQUERY CODE
// $(function() {
//     $(".nav__sub-list").hover(function () {
//         $(".nav__sub-list")
//             .prev(".nav__link")
//             .toggleClass("nav__link--active");
//     }, function () {
//         $(".nav__sub-list")
//             .prev(".nav__link")
//             .toggleClass("nav__link--active");
//     });

//     $("#mobile-services").click(function () {
//         $(this)
//             .children(".mobile-nav__link")
//             .children()
//             .toggleClass("mobile-nav__open-caret");
//         $(this)
//             .children(".mobile-nav__sub-list")
//             .toggleClass("mobile-nav__sub-list--visible");
//     });
// });

document.addEventListener("DOMContentLoaded", function(event) {
    var subList = document.querySelector(".nav__sub-list");

    subList.addEventListener("mouseover", function(event) {
        subList.previousElementSibling.classList.toggle("nav__link--sibling-hover");
    });

    subList.addEventListener("mouseout", function(event) {
        subList.previousElementSibling.classList.toggle("nav__link--sibling-hover");
    });

    var mobileNavServices = document.getElementById("mobile-services");

    mobileNavServices.addEventListener("click", function(event) {
        mobileNavServices.children[0].children[0].classList.toggle("mobile-nav__open-caret");
        mobileNavServices.children[1].classList.toggle("mobile-nav__sub-list--visible");

        //event.preventDefault();
    });
});