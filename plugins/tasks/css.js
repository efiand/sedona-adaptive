'use strict';

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`css`, () => {
  return gulp.src(`assets/scss/style.scss`)
    .pipe(plugins.plumber())
    .pipe(plugins.include())
    .pipe(plugins.sass())
    .pipe(plugins.combineMq())
    .pipe(plugins.postcss([
      require(`autoprefixer`)()
    ]))
    .pipe(plugins.if(!settings.isDev, plugins.csso()))
    .pipe(gulp.dest(`build/css`));
});
