'use strict';
// Подключение хранилища
const { gulp, plugins, settings } = require(`./store`);

// Добавление фильтров шаблонизатора в хранилище
plugins.requireDir(`../plugins/filters`);

// Добавление одиночных задач к gulp, находящемуся в хранилище
plugins.requireDir(`../plugins/tasks`);

// Серийные задачи
Object.keys(settings.series).forEach((seria) => {
  gulp.task(seria, (callback) => {
    return gulp.series(...settings.series[seria])(callback);
  });
});
