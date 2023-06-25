'use strict';

const { gulp, plugins, filters, settings } = require(`../../store`);

gulp.task(`html`, () => {
  return gulp.src(`pages/**/*.njk`)
    .pipe(plugins.plumber())
    .pipe(plugins.data((filename) => {
      const name = filename.path.replace(filename.base, ``);

      return {
        page: filters.nameWithoutExt(name.replace(/\\/g, `/`)).slice(1),
        isDev: settings.isDev
      };
    }))
    .pipe(plugins.nunjucksRender({
      manageEnv: (env) => {
        env.opts.autoescape = false;
        env.addGlobal(`template`, settings.template);

        Object.keys(filters).forEach((filter) => {
          env.addFilter(filter, filters[filter]);
        });
      }
    }))
    .pipe(plugins.if(!settings.isDev, plugins.htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      html5: true,
      includeAutoGeneratedTags: false,
      minifyCSS: true,
      minifyJS: true,
      quoteCharacter: `"`,
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true
    })))
    .pipe(gulp.dest(`build`));
});