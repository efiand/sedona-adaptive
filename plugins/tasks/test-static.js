'use strict';
// Копирование не нуждающихся в обработке исходников в билд

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`test:static`, () => {
  return gulp.src(settings.src.staticText)
    .pipe(plugins.lintspaces({ editorconfig: `.editorconfig`}))
    .pipe(plugins.lintspaces.reporter());
});
