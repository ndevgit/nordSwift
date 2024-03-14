//Отключение скролла и прыжка контента при открытии модального окна или мобильного меню
const fixJump = document.querySelectorAll(".fix-jump");

function disableScroll() {
  const paddingOffset = window.innerWidth - document.body.offsetWidth + "px";

  document.body.classList.add("body--overflow-hidden");

  fixJump.forEach((fixJumpElement) => {
    fixJumpElement.style.paddingRight = paddingOffset;
  });

  document.body.style.paddingRight = paddingOffset;
}

//Включение скролла и прыжка контента при открытии модального окна или мобильного меню
function enableScroll() {
  document.body.classList.remove("body--overflow-hidden");

  fixJump.forEach((fixJumpElement) => {
    fixJumpElement.style.paddingRight = "0px";
  });

  document.body.style.paddingRight = "0px";
}

export { disableScroll, enableScroll };
