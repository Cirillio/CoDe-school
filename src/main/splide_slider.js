import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

export function InitSplideSlider() {
  const splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,

    // Автопрокрутка:
    autoplay: true, // Вкл/выкл
    interval: 3500, // Интервал (мс)
    pauseOnHover: true, // Пауза при наведении
    pauseOnFocus: true, // Пауза при фокусе

    // Скорость/анимация:
    speed: 400, // Скорость анимации (мс)
    easing: "ease-in-out", // Кривая анимации
    dragMinThreshold: 10, // Минимальное расстояние для срабатывания перетаскивания

    gap: 10,
    arrows: false,
    pagination: false,
    updateOnMove: true,
    trimSpace: false, // Важно для ваших баннеров
  }).mount();

  document
    .querySelector(".splide-prev")
    .addEventListener("click", () => splide.go("<"));
  document
    .querySelector(".splide-next")
    .addEventListener("click", () => splide.go(">"));
}
