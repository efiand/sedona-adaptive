'use strict';
// Создание символьного векторного спрайта

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`symbols`, () => {
  return gulp.src(settings.src.symbols)
    .pipe(plugins.imagemin([plugins.imagemin.svgo(settings.svgo)]))
    .pipe(plugins.svgstore({ inlineSvg: true }))
    .pipe(plugins.rename(`symbols.svg`))
    .pipe(gulp.dest(`build/img`));
});
