'use strict';
// Конечные серии задач, ассоциируемые с npm-скриптами,
// и вспомогательные, используемые в конечных
// Настраиваются полностью через /source/data/common.json

const { gulp, settings } = require(`../store`);
const { tasks } = settings.tasks.common;

Object.keys(tasks).forEach((seria) => {
  gulp.task(seria, (callback) => {
    return gulp.series(...tasks[seria])(callback);
  });
});
