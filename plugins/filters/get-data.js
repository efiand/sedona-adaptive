'use strict';
// Получение данных для страницы
// Считывание по-новому позволяет обновлять данные в браузере без перезапуска сборки

const { filters, plugins } = require(`../../store`);

filters.getJson = (json) => {
  return JSON.parse(plugins.fs.readFileSync(json));
};

filters.getData = (page) => {
  return {
    ...filters.getJson(`assets/data/layout.json`),
    ...filters.getJson(`assets/data/pages/${page}.json`)
  };
};
