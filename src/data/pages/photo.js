export default {
	pageTitle: 'Фото и видео',
	pageDescription: 'Не можете решиться на путешествие из-за курса? Фотографии помогут вам забыть о политике и экономике.',
	components: [
		{
			name: 'photos',
			params: {
				heading: 'Фото',
				labels: {
					author: 'Автор фото: ',
					like: 'Поставить лайк',
				},
				likeIcon: {
					id: 'img/symbols.svg#like',
					width: 22,
					height: 20,
				},
				action: 'https://echo.htmlacademy.ru',
				photos: [
					{
						author: 'Борис',
						likes: 1350,
						href: '#',
						picture: {
							classes: 'photos__picture photos__picture--lead',
							img: {
								alt: 'Неродные просторы',
								src: 'img/photo-1.webp',
								srcset: 'img/photo-1@2x.webp 2x',
							},
							medias: [
								{
									query: '(min-width: 1200px)',
									srcset: 'img/photo-1-desktop.webp, img/photo-1-desktop@2x.webp 2x',
								},
								{
									query: '(min-width: 768px)',
									srcset: 'img/photo-1-tablet.webp, img/photo-1-tablet@2x.webp 2x',
								},
							],
						},
					},
					{
						author: 'Сергей',
						likes: 143,
						href: '#',
						picture: {
							classes: 'photos__picture',
							img: {
								alt: 'Местная растительность',
								src: 'img/photo-2.webp',
								srcset: 'img/photo-2@2x.webp 2x',
							},
							medias: [
								{
									query: '(min-width: 1200px)',
									srcset: 'img/photo-2-desktop.webp, img/photo-2-desktop@2x.webp 2x',
								},
								{
									query: '(min-width: 768px)',
									srcset: 'img/photo-2-tablet.webp, img/photo-2-tablet@2x.webp 2x',
								},
							],
						},
					},
					{
						author: 'Петр',
						likes: 96,
						href: '#',
						picture: {
							classes: 'photos__picture',
							img: {
								alt: 'Дорога на север',
								src: 'img/photo-3.webp',
								srcset: 'img/photo-3@2x.webp 2x',
							},
							medias: [
								{
									query: '(min-width: 1200px)',
									srcset: 'img/photo-3-desktop.webp, img/photo-3-desktop@2x.webp 2x',
								},
								{
									query: '(min-width: 768px)',
									srcset: 'img/photo-3-tablet.webp, img/photo-3-tablet@2x.webp 2x',
								},
							],
						},
					},
					{
						src: 'img/photo-4.webp',
						author: 'Антон',
						likes: 254,
						href: '#',
						picture: {
							classes: 'photos__picture',
							img: {
								alt: 'Мост дьявола',
								src: 'img/photo-4.webp',
								srcset: 'img/photo-4@2x.webp 2x',
							},
							medias: [
								{
									query: '(min-width: 1200px)',
									srcset: 'img/photo-4-desktop.webp, img/photo-4-desktop@2x.webp 2x',
								},
								{
									query: '(min-width: 768px)',
									srcset: 'img/photo-4-tablet.webp, img/photo-4-tablet@2x.webp 2x',
								},
							],
						},
					},
				],
			},
		},
		{
			name: 'video',
			params: {
				heading: 'Видео',
				lead: 'Все еще сомневаетесь?',
				description: 'Смотрите видеопрезентацию и скорее за билетами, пока они не подорожали в очередной раз!',
				src: '#',
				controls: [
					{
						alias: 'replay',
						title: 'Заново',
						width: 16,
						height: 20,
					},
					{
						alias: 'pin',
						title: 'Выбор кадра',
					},
					{
						alias: 'subtitles',
						title: 'Субтитры',
						width: 32,
						height: 20,
					},
					{
						alias: 'fullscreen',
						title: 'Полноэкранный режим',
						width: 20,
						height: 20,
					},
				],
			},
		},
	],
};
