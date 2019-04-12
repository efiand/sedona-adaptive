'use strict';
// Линтинг markdown-файлов

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`test:markdown`, () => {
  return gulp.src(settings.src.markdown)
    .pipe(plugins.remarkLintDko({
      rules: {
        'first-heading-level': false,
        'list-item-indent': `space`,
        'maximum-line-length': false
      }
    }))
    .pipe(plugins.remarkLintDko.report())
    .pipe(plugins.lintspaces({ editorconfig: `.editorconfig`}))
    .pipe(plugins.lintspaces.reporter());
});
