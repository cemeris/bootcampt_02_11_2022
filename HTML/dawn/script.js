/*
  šis atrod .search elementu:
  document.querySelector('.search');
*/

document.querySelector('.search').onclick = function () {
  document.querySelector('.popup').classList.toggle('hide');
};

document.querySelector('.popup').onclick = function () {
  document.querySelector('.popup').classList.toggle('hide');
};

document.querySelector('.search_form').onclick = function (event) {
  event.stopPropagation();
}

document.querySelector('.top_menu .top_nav').onclick = function () {
  document.querySelector('.top_menu .top_nav').classList.toggle('open');
}