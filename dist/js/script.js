document.addEventListener("DOMContentLoaded", function(event) {
  // DESKTOP FUNCTIONALITY
  // Keeping "services" underlined while hovering over the sublist
  let subList = document.querySelector(".nav__sub-list");

  subList.addEventListener("mouseover", function(event) {
    subList.previousElementSibling.classList.toggle("nav__link--sibling-hover");
  });

  subList.addEventListener("mouseout", function(event) {
    subList.previousElementSibling.classList.toggle("nav__link--sibling-hover");
  });

  // MOBILE FUNCTIONALITY
  // Showing mobile navigation menu by clicking on a menu button
  let mobileNavButton = document.querySelector(".mobile-nav__button");
  let mobileNavList = document.querySelector(".mobile-nav__list");
  let mobileNavIcon = document.querySelector(".mobile-nav__icon");

  mobileNavButton.addEventListener("click", function(event) {
    mobileNavList.classList.toggle("mobile-nav__list--show");
    mobileNavIcon.classList.toggle("mobile-nav__icon--clicked");
  });

  // Making services sublist visible
  let mobileNavServices = document.getElementById("mobile-services");

  mobileNavServices.addEventListener("click", function(event) {
    mobileNavServices.children[0].children[0].classList.toggle(
      "mobile-nav__open-caret"
    );
    mobileNavServices.children[1].classList.toggle(
      "mobile-nav__sub-list--visible"
    );
  });

  // Removing navigation menu when clicking on a service while on
  // "services" page
  let mobileSubList = document.querySelector(".mobile-nav__sub-list");

  mobileSubList.addEventListener("click", function(event) {
    mobileNavList.classList.toggle("mobile-nav__list--show");
    mobileNavIcon.classList.toggle("mobile-nav__icon--clicked");
  });
});
