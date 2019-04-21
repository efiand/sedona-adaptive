'use strict';
// Возвращает имя файла без расширения

const { filters } = require(`../../store`);

filters.extToWebp = (string) => {
  return string.replace(/\.jpg|\.png/g, `.webp`);
};
