var myNav = document.getElementsByClassName("navbar")[0];

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    myNav.setAttribute("src", "images/bakery-color.png");
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.setAttribute("src", "images/bakery-light-1.png");
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
