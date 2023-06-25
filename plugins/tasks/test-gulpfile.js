'use strict';

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`test:gulpfile`, () => {
  return gulp.src(settings.src.gulpfile)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.lintspaces({ editorconfig: `.editorconfig`}))
    .pipe(plugins.lintspaces.reporter());
});
