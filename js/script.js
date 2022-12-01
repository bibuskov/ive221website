`use strict`

// "Menu Hamburger" script

document.querySelector(`.nav__menu-hamburger`).addEventListener(`click`, () => {
   document.querySelector(`.nav__menu-mobile`).classList.toggle(`active`);
   document.querySelector(`.nav__menu-hamburger`).classList.toggle(`active`);
});

