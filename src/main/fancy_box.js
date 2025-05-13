import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export function InitFancyBox(name) {
  Fancybox.bind('[data-fancybox="' + name + '"]', {
    dragToClose: true,
    animated: true,
  });
}
