const swiperFacts = new Swiper(".swiper-facts", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  spaceBetween: 104,
  slidesPerView: "auto",

  autoplay: {
    delay: 3000,
  },
});

const swiperServicesNordcore = new Swiper(".swiper-services--nordcore", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  spaceBetween: 9,
  slidesPerView: "auto",

  breakpoints: {
    993: {
      enabled: false,
    },
    992: {
      enabled: true,
    },
  },
});

// const swiperServicesSwift = new Swiper(".swiper-services--swift", {
//   Optional parameters
//   direction: "horizontal",
//   loop: false,

//   spaceBetween: 9,
//   slidesPerView: "auto",

//   breakpoints: {
//     993: {
//       enabled: false,
//     },
//     992: {
//       enabled: true,
//     },
//   },
// });

const swiperCasesCases = new Swiper(".swiper-cases--cases", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  spaceBetween: 9,
  slidesPerView: "auto",

  breakpoints: {
    993: {
      enabled: false,
    },
    992: {
      enabled: true,
    },
  },
});

const swiperCasesMedia = new Swiper(".swiper-cases--media", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  spaceBetween: 9,
  slidesPerView: "auto",

  breakpoints: {
    993: {
      enabled: false,
    },
    992: {
      enabled: true,
    },
  },
});

const tabsButtons = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

tabsButtons.forEach((tabsButtonsElement) => {
  tabsButtonsElement.addEventListener("click", () => {
    tabsButtons.forEach((tabsButtonsElement) => {
      tabsButtonsElement.classList.remove("tabs__button--active");
    });

    tabsButtonsElement.classList.add("tabs__button--active");

    tabsProducts.forEach((tabsProductsElement) => {
      if (
        tabsProductsElement.dataset.tabValue == tabsButtonsElement.dataset.tab
      ) {
        tabsProductsElement.classList.remove("displaynone");
      } else {
        tabsProductsElement.classList.add("displaynone");
      }
    });
  });
});

swiperCasesMedia.update();

export {
  swiperFacts,
  swiperServicesNordcore,
  swiperCasesCases,
  swiperCasesMedia,
};

// breakpoints: {
//   1490: {
//     enabled: true,
//     slidesPerView: 1,
//     speed: 800,
//   },
// },
