// Toggle display of collapsible menu when the hamburger icon is clicked
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const collapsibleMenu = document.querySelector(".collapsible-menu");

  hamburgerIcon.addEventListener("click", function () {
    collapsibleMenu.classList.toggle("show");
  });
});
