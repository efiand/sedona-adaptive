class Header {
  constructor(element) {
    this.toggler = element.querySelector(`.header__toggler`);
    this.menu = element.querySelector(`.header__nav-list`);
    this.isOpened = false;

    this.toggler.classList.remove(`hidden`);
    this.menu.classList.add(`hidden`);

    setTimeout(() => {
      this.menu.classList.add(`header__nav-list--js`);
      this.menu.classList.add(`header__nav-list--closed`);
      this.menu.classList.remove(`hidden`);
    }, 33);

    this.toggler.addEventListener(`click`, () => {
      this.toggleHandler();
    });
  }

  toggleHandler() {
    if (this.isOpened) {
      this.toggler.classList.remove(`header__toggler--closer`);
      this.toggler.classList.add(`header__toggler--opener`);

      this.menu.classList.remove(`header__nav-list--opened`);
      this.menu.classList.add(`header__nav-list--closed`);
    } else {
      this.toggler.classList.add(`header__toggler--closer`);
      this.toggler.classList.remove(`header__toggler--opener`);

      this.menu.classList.add(`header__nav-list--opened`);
      this.menu.classList.remove(`header__nav-list--closed`);
    }

    this.isOpened = !this.isOpened;
  }
}

applyClass(`.header`, Header);
