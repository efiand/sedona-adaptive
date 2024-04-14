// Применение класса к набору DOM-элементов

export default (selector, Class, data = {}, nodelist = document.querySelectorAll(selector)) => {
	nodelist.forEach((node) => {
		new Class(node, data);
	});
};
