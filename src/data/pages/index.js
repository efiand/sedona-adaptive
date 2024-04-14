export default {
	isIndex: true,
	titleDelimiter: '',
	introImg: 'img/emblem-index.svg',
	introImgWidth: 280,
	introImgHeight: 213,
	components: [
		{
			name: 'advantages',
			params: {
				heading: 'Преимущества',
				lead: 'Седона – небольшой городок в Аризоне, заслуживающий большего!',
				description: 'Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!',
				list: [
					{
						title: 'Настоящий городок',
						description: 'Седона не аттракцион для туристов, там течет своя жизнь',
						picture: {
							classes: 'advantages__picture',
							img: {
								alt: 'Вид города',
								src: 'img/reason-1.webp',
								srcset: 'img/reason-1@2x.webp 2x',
							},
							medias: [
								{
									query: '(min-width: 1200px)',
									srcset: 'img/reason-1-desktop.webp, img/reason-1-desktop@2x.webp 2x',
								},
								{
									query: '(min-width: 768px)',
									srcset: 'img/reason-1-tablet.webp, img/reason-1-tablet@2x.webp 2x',
								},
							],
						},
						features: {
							classes: 'advantages__features',
							list: [
								{
									heading: 'Жилье',
									description: 'Рекомендуем пожить в настоящем мотеле, все как в кино!',
									modifier: 'features__item--house',
								},
								{
									heading: 'Сувениры',
									description: 'Не только китайского, <br class="no-mobile">но и местного производства!',
									modifier: 'features__item--gifts features__item--order-3',
								},
								{
									heading: 'Еда',
									description: 'Всегда заказывайте фирменный бургер, вы не разочаруетесь!',
									modifier: 'features__item--eat',
								},
							],
						},
					},
					{
						title: 'Там есть Мост дьявола',
						description: 'Да, по нему можно пройти! <br class="desktop">Если вы осмелитесь, конечно',
						picture: {
							classes: 'advantages__picture advantages__picture--even',
							img: {
								alt: 'Мост дьявола',
								src: 'img/reason-2.webp',
								srcset: 'img/reason-2@2x.webp 2x',
							},
							medias: [
								{
									query: '(min-width: 1200px)',
									srcset: 'img/reason-2-desktop.webp, img/reason-2-desktop@2x.webp 2x',
								},
								{
									query: '(min-width: 768px)',
									srcset: 'img/reason-2-tablet.webp, img/reason-2-tablet@2x.webp 2x',
								},
							],
						},
					},
					{
						title: 'Небольшая площадь',
						description: 'Все интересные места находятся очень близко',
					},
					{
						title: 'Красивая дорога',
						description: 'Ехать в Седону из <br class="no-mobile no-desktop">Лас-Вегаса совсем не скучно!',
					},
					{
						title: 'Мало туристов',
						description: 'Большинство едет в Гранд Каньон и толпится там',
					},
				],
			},
		},
		{
			name: 'search-offer',
			params: {
				heading: 'Поиск гостиницы',
				lead: 'Заинтересовались?',
				description: 'Укажите предполагаемые даты поездки, <br class="no-mobile">и мы покажем вам лучшие предложения гостиниц в Седоне',
				link: {
					href: '#',
					text: 'Найти гостиницу',
				},
			},
		},
		{
			name: 'yandex-map',
			params: {
				id: 'map',
				poster: {
					classes: 'yandex-map__poster',
					img: {
						src: 'img/map.webp',
						srcset: 'img/map@2x.webp 2x',
						alt: 'Карта Седоны',
					},
					medias: [
						{
							query: '(min-width: 1200px)',
							srcset: 'img/map-desktop.webp, img/map-desktop@2x.webp 2x',
						},
						{
							query: '(min-width: 768px)',
							srcset: 'img/map-tablet.webp, img/map-tablet@2x.webp 2x',
						},
					],
				},
			},
		},
	],
	DATA: {
		// Параметры Яндекс.карты
		yandexMap: {
			center: [34.868633, -111.761734],
			controls: [],
			zoom: 7,
		},
	},
};
