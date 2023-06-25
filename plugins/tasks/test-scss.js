'use strict';

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`test:scss`, () => {
  return gulp.src(settings.src.scss)
    .pipe(plugins.stylelint({
      reporters: [{
        console: true,
        formatter: `string`
      }]
    }))
    .pipe(plugins.lintspaces({ editorconfig: `.editorconfig`}))
    .pipe(plugins.lintspaces.reporter());
});
