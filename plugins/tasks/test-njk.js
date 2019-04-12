'use strict';

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`test:njk`, () => {
  return gulp.src(settings.src.njk)
    .pipe(plugins.lintspaces({ editorconfig: `.editorconfig`}))
    .pipe(plugins.lintspaces.reporter());
});
