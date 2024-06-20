<script
  async
  src="https://tag.simpli.fi/sifitag/bc87abb9-b015-44df-93b8-78e2f7d32006"></script>;

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
