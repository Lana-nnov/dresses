'use strict';

(function () {

  const header = document.querySelector(`.header`);
  const menu = document.querySelector(`.main-nav`);
  const button = document.querySelector(`.main-nav__toggle`);
  //const overlay = document.querySelector(`.navigation__overlay`);

  /*var menu = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.main-nav__toggle');

  menu.classList.remove('main-nav--nojs');

  if (menuToggle) {
    menuToggle.addEventListener('click', function (evt) {
      if (menu) {
        evt.currentTarget.classList.toggle('main-nav__toggle--active');
        menu.classList.toggle('main-nav--opened');
      }
    });
  }*/

  function openHeaderMenu() {

    button.removeEventListener(`click`, openHeaderMenu)
    button.addEventListener(`click`, closeHeaderMenu)
    //overlay.addEventListener(`click`, closeHeaderMenu)
  
    document.addEventListener(`keydown`, onEscPress)
  
    document.body.classList.add(`no-scroll`)
    header.classList.add(`header_colored`)
    menu.classList.add(`main-nav--opened`)
    button.classList.add(`main-nav__toggle--active`)
  
    setMenuHeight()
  }
  
  function closeHeaderMenu() {
    button.removeEventListener(`click`, closeHeaderMenu)
    button.addEventListener(`click`, openHeaderMenu)
    //overlay.removeEventListener(`click`, closeHeaderMenu)
  
    document.removeEventListener(`keydown`, onEscPress)
  
    document.body.classList.remove(`no-scroll`)
    if (!isScrolled()) {
      header.classList.remove(`header_colored`)
    }
    menu.classList.remove(`main-nav--opened`)
    button.classList.remove(`main-nav__toggle--active`)
  }
  
  function onEscPress(evt) {
    if (evt.keyCode === 27) {
      closeHeaderMenu()
    }
  }
  
  function isScrolled() {
    const pxAmount = 0
    const scrollTop = document.documentElement.scrollTop
  
    return scrollTop > pxAmount
  }
  
  function setMenuHeight() {
    menu.removeAttribute(`style`)
  
    const deltaHeight = document.body.offsetHeight - header.offsetHeight
    const menuHeight = menu.offsetHeight
  
    if (deltaHeight < menuHeight) {
      menu.setAttribute(`style`, `height: ${deltaHeight}px`)
    }
  }
  
  if (menu) {
    window.addEventListener(`scroll`, function () {
      if (isScrolled()) {
        header.classList.add(`header_colored`)
      } else {
        header.classList.remove(`header_colored`)
      }
    })
  
    closeHeaderMenu()
  }

  var favBtns = document.querySelectorAll('.favorite');

  if (favBtns.length) {
    favBtns.forEach(function (favBtn) {
      favBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.target.classList.toggle('favorite--active');
      });
    });
  }
  

  if (window.$) {
    var $ = window.$;

    var noticeSlider = $('.notice__slider');
    noticeSlider.slick({
      dots: false,
      arrows: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        }
      }]
    });

    var tabsSlider = $('.tabs__slider');
    tabsSlider.slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true,
      variableWidth: true,
      asNavFor: ".objects__slider"    
    });

    var objectsSlider = $('.objects__slider');
    objectsSlider.slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true,
      variableWidth: true,
      asNavFor: ".tabs__slider"    
    });
  }

    var cardsSlider = $('.cards__slider');
    cardsSlider.slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [{
        /*breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {*/
        breakpoint: 500,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }]
    });

    var cardSlider = $('.card__inner-slider');
    cardSlider.slick({
      dots: true,
      arrows: false,
      swipe: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  
    
})();
