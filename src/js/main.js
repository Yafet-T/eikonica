//début du burgermenu
var menu = document.querySelector(".menu");
var buttons = document.querySelectorAll(".button");
var menuOverlay = document.querySelector(".menu-overlay");

var menuHover = function () {
  buttons.forEach(function (button) {
    if (!button.classList.contains("button-act")) {
      var randomWidth = Math.random() * (28 - 5) + 5;
      button.style.width = randomWidth + "px";
    }
  });
};

var openMenu = function () {
  buttons.forEach(function (button) {
    button.style.width = "";
  });
  menuOverlay.classList.toggle("is-active");
};

menu.addEventListener("click", function () {
  menuHover();
  setTimeout(openMenu, 500);
});

menuOverlay.addEventListener("click", function () {
  openMenu();
});
//Fin du burgermenu
