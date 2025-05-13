initMap();

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById("map"),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [55.037254, 82.911177],

        // Уровень масштабирования
        zoom: 16,
      },
    }
  );

  const placemark = new ymaps.Placemark(
    [55.037254, 82.911177],
    {
      balloonContent: "Депутатская улица, 46",
    },
    {
      preset: "islands#redIcon",
    }
  );

  map.geoObjects.add(placemark);

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}
