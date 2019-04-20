'use strict';
// Подключение хранилища
const { plugins, settings } = require(`./store`);

// Добавление фильтров шаблонизатора в хранилище
plugins.requireDir(`filters`);

// Добавление одиночных задач к gulp, находящемуся в хранилище
plugins.requireDir(`tasks`);

// Серийные задачи
Object.keys(settings.series).forEach((seria) => {
  gulp.task(seria, (callback) => {
    return gulp.series(...settings.series[seria])(callback);
  });
});
