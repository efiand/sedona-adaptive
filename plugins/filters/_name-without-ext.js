'use strict';
// Возвращает имя файла без расширения

const { filters } = require(`../../store`);

filters.nameWithoutExt = (string) => {
  return string.slice(0, string.lastIndexOf(`.`));
};
