window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  const fixed_nav = document.querySelector("body");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    fixed_nav.classList.toggle("is-fixed");
  });
};
