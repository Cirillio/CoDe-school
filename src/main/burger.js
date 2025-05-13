export function initBurgerMenu() {
  const burgerButton = document.querySelector(".burger-button");
  const menuList = document.querySelector(".menu-list");

  if (!burgerButton || !menuList) return;

  let isAnimating = false;

  const toggleMenu = () => {
    if (isAnimating) return;

    isAnimating = true;
    burgerButton.classList.add("disabled");
    burgerButton.classList.toggle("active");
    menuList.classList.toggle("active-menu");

    setTimeout(() => {
      isAnimating = false;
      burgerButton.classList.remove("disabled");
    }, 200);
  };

  const closeMenu = () => {
    menuList.classList.remove("active-menu");
    burgerButton.classList.remove("active");
  };

  burgerButton.addEventListener("click", toggleMenu);

  document.addEventListener("click", (e) => {
    if (!menuList.contains(e.target) && !burgerButton.contains(e.target)) {
      closeMenu();
    }
  });
}
