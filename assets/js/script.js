'use strict';
// Диспетчер подключений для сборки javascript-кода из фрагментов с помощью gulp-include

(() => {
  // Вендоры
  /* eslint-disable */
  //=require ../../node_modules/picturefill/dist/picturefill.js
  //=require ../../node_modules/svg4everybody/dist/svg4everybody.js
  svg4everybody();

  /* eslint-enable */
  /* eslint no-trailing-spaces: "off" */

  // Исходные данные
  //=require ../data/data.js

  // Клиентские модули
  //=require modules/**/*.js

  // Классы компонентов
  //=require ../../components/**/*.js
})();
