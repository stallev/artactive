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
//banner slider
(function(){
  var index = 1;
  showSlides(index);
  function minusSlide(){
    index -= 1;
    showSlides(index);
  };
  function plusSlide(){
    index +=1;
    showSlides(index);
  };
  function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('goods-slider__item');
    var indikators= document.getElementsByClassName('goods-slider__indicators-item');
    document.querySelector('.goods-slider__controls-prev').onclick = minusSlide;
    document.querySelector('.goods-slider__controls-next').onclick = plusSlide;
    if (n > slides.length){
      index = 1;
    }
    if (n < 1){
      index = slides.length;
    }
    for (i=0; i< slides.length; i++){
      slides[i].style.display = 'none';
      indikators[i].style.backgroundColor = 'inherit';
    }
    slides[index - 1].style.display = 'block';
    indikators[index - 1].style.backgroundColor = '#ffffff';
  };
})();
