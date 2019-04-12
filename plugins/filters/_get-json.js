'use strict';
// Получение объекта из JSON-файла
const { filters, plugins } = require(`../../store`);

filters.getJson = (json) => {
  return JSON.parse(plugins.fs.readFileSync(json));
};
