class Map {
  constructor(element) {
    this.element = element;
    this.fallbackImg = element.querySelector(`.map__poster`);

    this.placemarkOptions = [
      DATA.yandexMap.placemarkCoords,
      DATA.yandexMap.placemarkOptions
    ];

    this.setInitials();
  }

  setInitials() {
    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(this.element.id, DATA.yandexMap.mapOptions);

      map.geoObjects.add(new window.ymaps.Placemark(...this.placemarkOptions));
      map.behaviors.disable(`scrollZoom`);

      this.fallbackImg.classList.add(`hidden`);
    });
  }
}

applyClass(`.map`, Map);
