var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    cssmin      = require('gulp-minify-css'),
    prefix      = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    size        = require('gulp-size'),
    plumber     = require('gulp-plumber'),
    deploy      = require('gulp-gh-pages'),
    notify      = require('gulp-notify'),
    sassLint    = require('gulp-sass-lint'),
    twig        = require('gulp-twig');

var onError = function (err) {
  notify.onError({
    title:    'Gulp',
    subtitle: 'Failure!',
    message:  'Error: <%= error.message %>',
    sound:    'Beep'
  })(err);

  this.emit('end');
};

function compileSCSS (prefix) {
  return gulp.src(prefix + '/scss/**/*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix())
    .pipe(gulp.dest(prefix + '/css'))
    .pipe(reload({ stream: true }))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(prefix + '/css'));
}

gulp.task('scss:lib', function () {
  return compileSCSS('source')
    .pipe(gulp.dest('site/css'));
});

gulp.task('scss:site', function () {
  return compileSCSS('site');
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'site'
    }
  });
});

gulp.task('deploy', function () {
  return gulp.src('site/**/*')
    .pipe(deploy());
});

gulp.task('scss:lint', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('twig', function () {
  return gulp.src('site/**/*.twig', { base: './' })
    .pipe(twig())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('source/scss/**/*.scss', ['scss:lib', 'scss:lint']);
  gulp.watch('site/**/*.twig', ['twig']);
});

gulp.task('default', ['browser-sync', 'twig', 'scss:lib', 'scss:site', 'watch']);
