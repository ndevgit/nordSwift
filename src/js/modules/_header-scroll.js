export default function headerScroll() {
  const headerBottom = document.querySelector(".header");

  const scrollPosition = 30;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPosition) {
      headerBottom.classList.add("header--scroll");
    } else {
      headerBottom.classList.remove("header--scroll");
    }
  });
}
