import { disableScroll, enableScroll } from "./_disable-scroll.js";

const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header__container");
const headerTopLeft = document.querySelector(".header__top-left");
const headerTopRight = document.querySelector(".header__top-right");

const headerContacts = document.querySelector(".header__contacts");

const headerNavTop = document.querySelector(".header__nav-top");
const languageButton = document.querySelector(".language-button");
const headerBottom = document.querySelector(".header__bottom");

const headerMobile = document.querySelector(".header__mobile");
const headerMobileContent = document.querySelector(".header__mobile-content");
const headerMobileTop = document.createElement("div");
headerMobileTop.className = "header__mobile-top";

const burgerButton = document.querySelector(".burger-button");

const footerTop = document.querySelector(".footer__top");
const footerContactsJob = document.querySelector(".footer__contacts--job");
const footerSocials = document.querySelector(".footer__socials");
const footerColumn5 = document.querySelector(".column-5");

const spoilerButton = document.querySelectorAll(".spoiler-button");
const spoilerItem = document.querySelectorAll(".spoiler-item");

function openSpoiler() {
  spoilerButton.forEach((spoilerButtonElement, index) => {
    spoilerButtonElement.addEventListener("click", () => {
      spoilerButtonElement.classList.toggle("spoiler-button--open");

      spoilerItem.forEach((spoilerItemElement) => {
        spoilerItemElement = spoilerItem[index];
        spoilerItemElement.classList.toggle("spoiler-item--visible");
      });
    });
  });
}

//Флаг для проверки скролла
let scrollDisabled = false;

function openMenu() {
  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("burger-button--open");
    headerMobile.classList.toggle("header__mobile--visible");

    //Отключение скролла
    if (!scrollDisabled) {
      disableScroll();
      scrollDisabled = true;
    } else {
      enableScroll();
      scrollDisabled = false;
    }
  });
}

//Флаги для проверки запуска функций
let moveElementsStarted = false;
let restoreElementsStarted = false;

function moveElements() {
  if (!moveElementsStarted && window.innerWidth <= 992) {
    headerMobileTop.prepend(headerNavTop);
    headerMobileTop.append(languageButton);

    headerMobileContent.append(headerMobileTop);

    headerMobileContent.append(headerBottom);

    footerTop.append(footerContactsJob);
    footerTop.append(footerSocials);

    //Флаги для проверки запуска функций
    moveElementsStarted = true;
    restoreElementsStarted = false;
    // console.log("moveElementsStarted true");
  }
}

function restoreElements() {
  if (!restoreElementsStarted && window.innerWidth > 992) {
    headerTopLeft.append(headerNavTop);
    headerTopRight.prepend(languageButton);
    headerContainer.append(headerBottom);

    footerColumn5.prepend(footerContactsJob);
    footerColumn5.append(footerSocials);

    //Флаги для проверки запуска функций
    restoreElementsStarted = true;
    moveElementsStarted = false;
    // console.log("restoreElementsStarted true");
  }
}

window.addEventListener("resize", () => {
  moveElements();
  restoreElements();
});

export { moveElements, restoreElements, openMenu, openSpoiler };
