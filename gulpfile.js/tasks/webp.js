'use strict';

const { gulp, plugins, settings } = require(`../store`);

gulp.task(`webp`, () => {
  return gulp.src(settings.src.img)
    .pipe(plugins.webp({ quality: 80 }))
    .pipe(gulp.dest(`build/img`));
});
