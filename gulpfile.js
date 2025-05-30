const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const cssbeautify = require('gulp-cssbeautify');
const browserSync = require('browser-sync').create();

// Шляхи
const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  html: './*.html'
};

// SCSS компіляція + префікси + форматування (dev)
function styles() {
  return src(paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cssbeautify())
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// SCSS компіляція + префікси + мінімізація (build)
function stylesMinify() {
  return src(paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// Локальний сервер + спостереження
function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  watch(paths.scss.src, styles);
  watch(paths.html).on('change', browserSync.reload);
}

// Експорти
exports.styles = styles;
exports.stylesMinify = stylesMinify;
exports.serve = serve;

// Команди
exports.default = series(styles, serve);       // gulp
exports.dev = series(styles, serve);           // gulp dev
exports.build = series(stylesMinify);          // gulp build
