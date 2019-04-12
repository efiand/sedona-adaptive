'use strict';
// Получение данных для страницы
// Считывание по-новому позволяет обновлять данные в браузере без перезапуска сборки

const { filters, plugins } = require(`../store`);

filters.getData = (page) => {
  return {
    ...JSON.parse(plugins.fs.readFileSync(`source/data/layout.json`)),
    ...JSON.parse(plugins.fs.readFileSync(`source/data/pages/${page}.json`))
  };
};
