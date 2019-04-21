'use strict';
// Запуск сервера browsersync и слежения за изменениями исходников

const { gulp, plugins, settings } = require(`../../store`);

gulp.task(`server`, () => {
  plugins.server.init({ server: `build` });

  Object.keys(settings.src).forEach((watcher) => {
    const tasks = settings.watchers[watcher] || [watcher];

    gulp.watch(settings.src[watcher], gulp.series(...tasks, `server:reload`));
  });
});

gulp.task(`server:reload`, (done) => {
  plugins.server.reload();
  done();
});
