class YandexMap {
  constructor(element) {
    this.element = element;
    this.poster = element.querySelector(`.yandex-map__poster`);
    this.api = window.ymaps;
    this.data = DATA.yandexMap;
    this.placemark = this.data.placemark || {};
    this.template = `<div class="yandex-map__placemark"></div>`;

    this.setInitials();
  }

  setInitials() {
    const self = this;

    self.api.ready(() => {
      const map = new self.api.Map(self.element.id, self.data);

      if (!self.placemark.iconImage) {
        self.placemark.iconLayout = self.api.templateLayoutFactory.createClass(self.template);
      }

      const placemark = [
        self.placemark.coords || map.getCenter(),
        self.placemark.properties || null,
        self.placemark
      ];

      map.geoObjects.add(new self.api.Placemark(...placemark));
      map.behaviors.disable(`scrollZoom`);

      // Скрытие замещающего изображения
      if (self.poster) {
        self.poster.classList.add(`hidden`);
      }
    });
  }
}

applyClass(`.yandex-map`, YandexMap);
