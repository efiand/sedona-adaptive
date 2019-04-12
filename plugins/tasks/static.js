'use strict';
// Копирование не нуждающихся в обработке исходников в билд

const { gulp, settings } = require(`../../store`);

gulp.task(`static`, () => {
  return gulp.src(settings.src.static)
    .pipe(gulp.dest(`build`));
});
