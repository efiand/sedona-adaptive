export default class YandexMap {
	constructor(element, data) {
		this.element = element;
		this.poster = element.querySelector('.yandex-map__poster');
		this.data = data;
		this.placemark = this.data.placemark || {};
		this.template = '<div class="yandex-map__placemark"></div>';

		if (window.ymaps) {
			this.init();
		} else {
			const script = document.createElement('script');
			script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
			script.addEventListener('load', () => {
				if (window.ymaps) {
					this.init();
				}
			});
			document.body.append(script);
		}
	}

	init() {
		window.ymaps.ready(() => {
			const map = new window.ymaps.Map(this.element.id, this.data);

			if (!this.placemark.iconImage) {
				this.placemark.iconLayout = window.ymaps.templateLayoutFactory.createClass(this.template);
			}

			const placemark = [
				this.placemark.coords || map.getCenter(),
				this.placemark.properties || null,
				this.placemark,
			];

			map.geoObjects.add(new window.ymaps.Placemark(...placemark));
			map.behaviors.disable('scrollZoom');

			// Скрытие замещающего изображения
			if (this.poster) {
				this.poster.classList.add('hidden');
			}
		});
	}
}
