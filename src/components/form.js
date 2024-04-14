import Notice from '@/components/notice';
import init from '@/utils/init';

export default class Form {
	constructor(el) {
		this.$el = el;
		this.submit = el.querySelector('.form__submit');
		this.notices = document.querySelectorAll('.notice');
		init('.notice', Notice, {}, this.notices);
		this.setListeners();
	}

	setListeners() {
		// Вывод модального окна
		this.submit.addEventListener('click', () => {
			// Фейковый рандомный вызов сообщения об ошибке (0) или успехе (1)
			if (this.$el.checkValidity()) {
				this.notices[Math.floor(Math.random() * 2)].classList.add('notice--on');
			}
		});
	}
}
