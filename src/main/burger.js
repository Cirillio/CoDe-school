const burgerButton = document.querySelector(".burger-button");
const menuList = document.querySelector(".menu-list");

let isAnimating = false;

burgerButton.addEventListener("click", () => {
  if (isAnimating) return;

  isAnimating = true;
  burgerButton.classList.add("disabled");
  burgerButton.classList.toggle("active");
  menuList.classList.toggle("active-menu");

  setTimeout(() => {
    isAnimating = false;
    burgerButton.classList.remove("disabled");
  }, 200); // длительность анимации
});
