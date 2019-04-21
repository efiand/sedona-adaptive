'use strict';

const { gulp, plugins } = require(`../../store`);

// Удаление предыдущей сборки
gulp.task(`clean`, () => {
  return plugins.del([`build`, `tmp`]);
});
