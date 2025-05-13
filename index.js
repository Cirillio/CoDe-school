import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { initBurgerMenu } from "./src/main/burger";
import { initModalFeedback } from "./src/main/modal_feedback";
document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initModalFeedback();
  Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: true,
    animated: true,
  });
});
