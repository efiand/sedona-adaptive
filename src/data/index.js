import index from './pages/index';
import photo from './pages/photo';
import form from './pages/form';
import layout from './layout';

export const variables = {};
export const pages = [];

Object.entries({
	index,
	photo,
	form,
	404: { pageTitle: 'Страница не найдена' },
}).forEach(([page, data]) => {
	const { DATA = {} } = data;
	const filename = `${page}.html`;
	variables[filename] = {
		page,
		...layout,
		...data,
		DATA: JSON.stringify({ ...DATA, page }), // Данные для JS в браузере
	};
	pages.push({
		filename,
		template: filename,
	});
});
