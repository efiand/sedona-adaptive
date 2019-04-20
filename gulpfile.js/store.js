'use strict';

const src = {
  njk: [`**/*.njk`, `!node_modules/**/*.njk`, `data/**/*.json`],
  js: [`assets/**/*.js`, `components/**/*.js`, `data/**/*.js`],
  scss: [`**/*.scss`, `!node_modules/**/*.scss`],
  img: `data/img/**/*.{jpg,png,svg}`,
  webp: `data/img/**/*.{jpg,png}`,
  icons: `assets/icons/**/*.svg`,
  symbols: `assets/symbols/**/*.svg`,
  static: `static/**/*`,
  staticText: `static/**/*.{html,css,txt,md,svg,js,json,php,xml}`,
  gulpfile: `gulpfile.js/**/*.js`,
  markdown: [`**/*.md`, `!node_modules/**/*.md`]
};
const svgoSettings = { floatPrecision: 2 };

module.exports = {
  settings: {
    series: {
      build: [
        `clean`,
        `tmp`,
        `symbols`,
        `css`,
        `script`,
        `html`,
        `img`,
        `icons`,
        `static`
      ],
      dev: [
        `build`,
        `server`
      ],
      test: [
        `test:njk`,
        `test:scss`,
        `test:js`,
        `test:static`,
        `test:gulpfile`,
        `test:markdown`
      ]
    },
    watchers: {
      js: [`script`, `test:js`],
      scss: [`css`, `test:scss`],
      njk: [`html`, `test:njk`],
      staticText: [`static`, `test:static`],
      gulpfile: [`test:gulpfile`],
      markdown: [`test:markdown`]
    },
    svgo: {
      plugins: [
        { removeViewBox: false },
        { removeTitle: true },
        { cleanupNumericValues: svgoSettings },
        { cleanupNumericValues: svgoSettings },
        { convertPathData: svgoSettings },
        { transformsWithOnePath: svgoSettings },
        { convertTransform: svgoSettings },
        { cleanupListOfValues: svgoSettings }
      ]
    },
    isDev: !process.env.NODE_ENV || process.env.NODE_ENV !== `production`,
    src
  },

  plugins: {
    ...require(`gulp-load-plugins`)(),
    requireDir: require(`require-dir`),
    del: require(`del`),
    fs: require(`fs`),
    server: require(`browser-sync`).create()
  },

  gulp: require(`gulp`),
  filters: {}
};
