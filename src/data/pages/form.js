export default {
	pageTitle: 'Оставьте свой отзыв',
	pageDescription: 'Помогите нашим отелям стать лучше! оставьте отзыв о них, а также о посещенных вами достопримечательностях',
	components: [
		{
			name: 'form',
			params: {
				action: 'https://echo.htmlacademy.ru',
				submitText: 'Отправить отзыв',
				submitAlert: '* — обязательные поля',
				fieldsets: [
					{
						legend: 'Представьтесь:',
						modifier: 'name',
						fields: [
							{
								type: 'text',
								name: 'name',
								label: 'Имя*:',
								placeholder: 'Петр',
								required: true,
							},
							{
								type: 'text',
								name: 'surname',
								label: 'Фамилия*:',
								placeholder: 'Иванов',
								required: true,
							},
							{
								type: 'text',
								name: 'patronymic',
								label: 'Отчество:',
								placeholder: 'Александрович',
							},
						],
					},
					{
						legend: 'Контактная информация:',
						modifier: 'contacts',
						fields: [
							{
								type: 'tel',
								name: 'phone',
								icon: 'phone',
								label: '<span class="no-desktop">Контактный </span>телефон*:',
								placeholder: 'Введите телефон',
								required: true,
							},
							{
								type: 'email',
								name: 'mail',
								icon: 'mail',
								label: 'Электронная почта*:',
								placeholder: 'Введите e-mail',
								required: true,
							},
						],
					},
					{
						legend: 'Ваше общее впечатление:',
						modifier: 'impressions',
						fields: [
							{
								type: 'radio',
								name: 'impression',
								label: 'Скорее положительное',
								checked: true,
							},
							{
								type: 'radio',
								name: 'impression',
								label: 'Скорее отрицательное',
							},
							{
								type: 'radio',
								name: 'impression',
								label: 'Затрудняюсь ответить',
							},
						],
					},
					{
						legend: 'Посещенные достопримечательности:',
						modifier: 'sights',
						fields: [
							{
								type: 'checkbox',
								name: 'sights',
								label: 'Мост Дьявола',
								checked: true,
							},
							{
								type: 'checkbox',
								name: 'sights',
								label: 'Гора-Колокол',
								checked: true,
							},
							{
								type: 'checkbox',
								name: 'sights',
								label: 'Слайд-парк',
								checked: true,
							},
							{
								type: 'checkbox',
								name: 'sights',
								label: 'Красные скалы',
							},
						],
					},
					{
						legend: 'Опишите свои эмоции:',
						modifier: 'message',
						fields: [
							{
								type: 'textarea',
								name: 'message',
								label: 'Комментарий',
								hideLabel: true,
								placeholder: 'Опишите подробно все свои восторги ',
							},
						],
					},
				],
			},
		},
		{
			name: 'notice',
			params: {
				classes: {
					block: 'notice--success',
					info: 'notice__info--success',
					button: 'notice__button--success',
				},
				heading: 'Ваш отзыв отправлен!',
				text: 'Спасибо за ваше участие, ваш отзыв уже поступил к нам. В ближайшее время мы опубликуем его на сайте.',
				buttonText: 'Закрыть окно',
			},
		},
		{
			name: 'notice',
			params: {
				classes: {
					block: 'notice--error',
				},
				heading: 'Что-то пошло не так!',
				text: 'Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить',
				buttonText: 'Ok',
			},
		},
	],
};
