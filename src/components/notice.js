export default class Notice {
	constructor(element) {
		this.$el = element;
		this.button = element.querySelector('.notice__button');

		this.setListeners();
	}

	setListeners() {
		// Закрытие модального окна
		this.button.addEventListener('click', () => {
			this.$el.classList.remove('notice--on');
		});
	}
}
