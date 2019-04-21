'use strict';
// Сборка фонового векторного спрайта

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`icons`, () => {
  return gulp.src(settings.src.icons)
    .pipe(plugins.imagemin([
      plugins.imagemin.svgo(settings.svgo)
    ]))
    .pipe(gulp.dest(`tmp/icons`))
    .pipe(plugins.svgSprites({
      baseSize: 1,
      cssFile: `icons.css`,
      padding: 10,
      preview: { sprite: `` },
      svg: { sprite: `../build/img/icons.svg` }
    }))
    .pipe(gulp.dest(`tmp`));
});
