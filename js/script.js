const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__list');


burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  });
});

let tabsBtn = document.querySelectorAll('.work-list__link');
let tabsItem = document.querySelectorAll('.work-item');
let tabsItemRight = document.querySelectorAll('.work-item__right');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('work-list__link--active') });
    e.currentTarget.classList.add('work-list__link--active');

    tabsItem.forEach(function (element) { element.classList.remove('work-item__left--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('work-item__left--active');

    tabsItemRight.forEach(function (element) { element.classList.remove('work-item__right--active') });
    document.querySelector(`[data-target_bg="${path}"]`).classList.add('work-item__right--active');
  });
});

(() => {
  new Accordion(".js-accordion-container");
})();

let btnSearh = document.querySelector('.search');
let fieldSearch = document.querySelector('.search-wrap');
let btnCloseSearch = document.querySelector(".header__close-search");

btnSearh.addEventListener('click', function () {
  fieldSearch.classList.add('search-wrap--active');
});

btnCloseSearch.addEventListener("click", function () {
  fieldSearch.classList.remove("search-wrap--active");
});
