'use strict';

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`script`, () => {
  return gulp.src(`assets/js/script.js`)
    .pipe(plugins.include())
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.babel())
    .pipe(plugins.if(!settings.isDev, plugins.uglify()))
    .pipe(gulp.dest(`build/js`));
});
