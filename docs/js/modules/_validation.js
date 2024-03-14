import { createModal } from "./_create-modal.js";

function formValidation() {
  const forms = document.querySelectorAll(".form");

  forms.forEach((formsElement) => {
    formsElement.addEventListener("submit", function (event) {
      event.preventDefault();

      if (validate(this) == true) {
        // console.log("ФОРМА ОТПРАВЛЕНА");
        createModal("Заявка отправлена");
      }
    });
  });

  function validate(form) {
    let result = true;
    const inputs = form.querySelectorAll("input");

    inputs.forEach((inputsElement) => {
      if (inputsElement.value == "") {
        result = false;
        // console.log("ОШИБКА Поле пустое");
        createError(inputsElement);
      } else {
        removeError(inputsElement);
      }
    });

    function createError(input) {
      input.classList.add("error-border");
    }

    function removeError(input) {
      input.classList.remove("error-border");
    }

    return result;
  }
}

export { formValidation };
