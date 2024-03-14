const tabsButtons = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

function tabs() {
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
}
