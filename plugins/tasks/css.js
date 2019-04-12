'use strict';

const { gulp, plugins, settings } = require(`../../store`);
const sass = plugins.sass(require(`sass`));

gulp.task(`css`, () => {
  return gulp.src(`assets/scss/style.scss`)
    .pipe(plugins.include())
    .pipe(sass().on(`error`, sass.logError))
    .pipe(plugins.postcss([
      require(`postcss-sort-media-queries`)(),
      require(`autoprefixer`)()
    ]))
    .pipe(plugins.if(!settings.isDev, plugins.csso()))
    .pipe(gulp.dest(`build/css`));
});
