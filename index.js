import { initBurgerMenu } from "./src/main/burger";
import { initModalFeedback } from "./src/main/modal_feedback";
import { InitFancyBox } from "./src/main/fancy_box";
import { InitSplideSlider } from "./src/main/splide_slider";

document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initModalFeedback();
  InitFancyBox("gallery");
  InitSplideSlider();
});
