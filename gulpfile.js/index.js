'use strict';
// Подключение хранилища
const { plugins, settings } = require(`./store`);

// Добавление функций в хранилище
plugins.requireDir(`functions`);

// Добавление настроек в хранилище
settings.tasks = plugins.requireDir(`settings`);

// Добавление задач к gulp, находящемуся в хранилище
plugins.requireDir(`tasks`);
