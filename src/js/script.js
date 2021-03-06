'use strict';
var name = 'User Name';
var place = 'Flavortown';

console.log( `Hello ${name}, ready for ${place}?` );

svg4everybody();

(function () {
  var hamburger = document.querySelector('.header__toggle-hamburger');
  var cross = document.querySelector('.header__toggle-close');
  var nav = document.querySelector('.nav');
  var upperHeader = document.querySelector('.header__upper');

  hamburger.addEventListener('click', onDisplayNav);
  cross.addEventListener('click', onCloseNav);

  function onDisplayNav() {
    nav.style.display = 'block';
    hamburger.style.display = 'none';
    cross.style.display = 'block';
  }
  function onCloseNav() {
    nav.style.display = 'none';
    hamburger.style.display = 'block';
    cross.style.display = 'none';
  }
})();
