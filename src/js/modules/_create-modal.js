import { disableScroll } from "./_disable-scroll.js";

const overlay = document.querySelector(".overlay");

function createModal(titleText) {
  //   console.log("Модальное окно создано");

  const modal = document.createElement("div");
  modal.className = "modal";

  const container = document.createElement("div");
  container.className = "container";

  const modalContent = document.createElement("div");
  modalContent.className = "modal__content";

  const modalContentTop = document.createElement("div");
  modalContentTop.className = "modal__content-top";

  const modalTitle = document.createElement("p");
  modalTitle.className = "modal__title";
  modalTitle.textContent = titleText;

  modalContent.append(modalTitle);

  container.append(modalContent);
  modal.append(container);

  overlay.append(modal);
  overlay.classList.add("overlay--visible");

  disableScroll();
}

export { createModal, overlay };
