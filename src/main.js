import Form from '@/components/form';
import Header from '@/components/header';
import YandexMap from '@/components/yandex-map';
import init from '@/utils/init';

init('.header', Header);
if (window.DATA.page === 'index') {
	init('.yandex-map', YandexMap, window.DATA.yandexMap);
} else if (window.DATA.page === 'form') {
	init('.form', Form);
}
