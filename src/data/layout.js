export default {
	template: 'src/html/layout.njk',
	siteName: 'Седона',
	titleDelimiter: ' › ',
	logoSrc: 'img/logo.svg',
	logoSrcTablet: 'img/logo-tablet.svg',
	logoSrcDesktop: 'img/logo-desktop.svg',
	logoAlt: 'Логотип Седоны',
	toggleMenuText: 'Показать или скрыть меню',
	introImg: 'img/emblem.svg',
	introImgWidth: 230,
	introImgHeight: 40,
	introImgAlt: 'Эмблема Седоны',
	menu: [
		{
			url: 'index.html',
			text: 'Главная',
		},
		{
			url: 'photo.html',
			text: 'Фото и видео',
		},
		{
			url: 'form.html',
			text: 'Форма отзыва',
		},
		{
			url: 'https://htmlacademy.ru/intensive/adaptive',
			text: 'HTML Academy',
		},
	],
	visit: {
		href: '#',
		text: '#visitsedona',
	},
	socials: [
		{
			href: '#',
			text: 'Мы в Twitter',
			icon: 'twitter',
		},
		{
			href: '#',
			text: 'Мы в Facebook',
			icon: 'facebook',
		},
		{
			href: '#',
			text: 'Мы на Youtube',
			icon: 'youtube',
		},
	],
	developer: {
		label: 'Разработано',
		name: 'HTML Academy',
		logo: 'img/symbols.svg#developer',
		logoWidth: 27,
		logoHeight: 34,
		href: 'https://htmlacademy.ru/intensive/adaptive',
	},
};
