'use strict';

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`test:js`, () => {
  return gulp.src(settings.src.js)
    .pipe(plugins.lintspaces({ editorconfig: `.editorconfig`}))
    .pipe(plugins.lintspaces.reporter());
});
