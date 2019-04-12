'use strict';

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`webp`, () => {
  return gulp.src(settings.src.webp)
    .pipe(plugins.webp({ quality: 80 }))
    .pipe(gulp.dest(`build/img`));
});
