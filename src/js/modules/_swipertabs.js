const swiperFacts = new Swiper(".swiper-facts", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  spaceBetween: 104,
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

function initializeSwiperServicesSwift() {
  if (window.window.innerWidth <= 992) {
    const swiperServicesSwift = new Swiper(".swiper-services--swift", {
      // Optional parameters
      direction: "horizontal",
      loop: false,

      spaceBetween: 9,
      slidesPerView: "auto",
    });
  }
}

window.addEventListener("load", initializeSwiperServicesSwift);
window.addEventListener("resize", initializeSwiperServicesSwift);

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

const swiperTeamDirectors = new Swiper(".swiper-team-directors", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  spaceBetween: 9,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperTeamMembers = new Swiper(".swiper-team-members", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  spaceBetween: 9,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function tabs() {
  const tabsButtons = document.querySelectorAll("[data-tab]");
  const tabsProducts = document.querySelectorAll("[data-tab-value]");

  tabsButtons.forEach((tabsButtonsElement) => {
    tabsButtonsElement.addEventListener("click", () => {
      tabsButtons.forEach((tabsButtonsElement) => {
        tabsButtonsElement.classList.remove("tabs__button--active");
      });

      tabsButtonsElement.classList.add("tabs__button--active");

      tabsProducts.forEach((tabsProductsElement) => {
        if (tabsButtonsElement.dataset.tab == "latest") {
          tabsProductsElement.classList.remove("displaynone");
        } else {
          if (
            tabsProductsElement.dataset.tabValue ==
            tabsButtonsElement.dataset.tab
          ) {
            tabsProductsElement.classList.remove("displaynone");
          } else {
            tabsProductsElement.classList.add("displaynone");
          }
        }
      });
    });
  });

  swiperCasesMedia.update();
}

export {
  swiperFacts,
  swiperServicesNordcore,
  initializeSwiperServicesSwift,
  swiperCasesCases,
  swiperCasesMedia,
  swiperTeamDirectors,
  swiperTeamMembers,
  tabs,
};

// breakpoints: {
//   1490: {
//     enabled: true,
//     slidesPerView: 1,
//     speed: 800,
//   },
// },
