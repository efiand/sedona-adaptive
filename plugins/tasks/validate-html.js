'use strict';

const { gulp, plugins } = require(`../../store`);

gulp.task(`validate:html`, () => {
  return gulp.src([`build/**/*.html`, `!build/amp/**/*.html`])
    .pipe(plugins.w3cHtmlValidator())
    .pipe(plugins.w3cHtmlValidator.reporter());
});
