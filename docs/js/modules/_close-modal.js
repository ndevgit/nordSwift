import { overlay } from "./_create-modal.js";
import { enableScroll } from "./_disable-scroll.js";

function closeModal() {
  overlay.addEventListener("click", function (event) {
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.remove();
    }

    if (event.target == overlay) {
      overlay.classList.remove("overlay--visible");

      enableScroll();
    }
  });
}

export { closeModal };
