'use strict';

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`img`, () => {
  return gulp.src(settings.src.img)
    .pipe(plugins.imagemin([
      plugins.imagemin.svgo(settings.svgo),
      plugins.imagemin.optipng(),
      require(`imagemin-jpegoptim`)({
        max: 80,
        progressive: true
      })
    ]))
    .pipe(gulp.dest(`build/img`));
});
