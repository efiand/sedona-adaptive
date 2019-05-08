class Header {
  constructor(element) {
    this.$el = element;
    this.toggler = element.querySelector(`.header__toggler`);
    this.menu = element.querySelector(`.header__nav-list`);
    this.isOpened = false;

    // Верхний отрицательный маргин по высоте меню
    this.negMargin = `-${this.menu.clientHeight}px`;
    this.setMargin(this.negMargin);

    this.toggler.classList.remove(`hidden`);
    this.menu.classList.add(`header__nav-list--closed`);

    // Чтобы меню не уезжало при инициализации
    setTimeout(() => {
      this.$el.classList.add(`header--js`);
    }, 33);

    this.toggler.addEventListener(`click`, () => {
      this.toggleHandler();
    });

    window.addEventListener(`resize`, () => {
      this.setMargin(this.isOpened ? 0 : this.negMargin);
    });
  }

  toggleHandler() {
    if (this.isOpened) {
      this.toggler.classList.remove(`header__toggler--closer`);
      this.toggler.classList.add(`header__toggler--opener`);

      this.menu.classList.add(`header__nav-list--closed`);

      this.setMargin(this.negMargin);

    } else {

      this.toggler.classList.add(`header__toggler--closer`);
      this.toggler.classList.remove(`header__toggler--opener`);

      this.menu.classList.remove(`header__nav-list--closed`);

      this.setMargin(0);
    }

    this.isOpened = !this.isOpened;
  }

  setMargin(value) {
    this.$el.style.marginTop = window.innerWidth < 768 ? value : 0;
  }
}

applyClass(`.header`, Header);
