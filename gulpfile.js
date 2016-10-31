var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    cssmin      = require('gulp-clean-css'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    cache       = require('gulp-cached'),
    prefix      = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    size        = require('gulp-size'),
    imagemin    = require('gulp-imagemin'),
    minifyHTML  = require('gulp-htmlmin'),
    pngquant    = require('imagemin-pngquant'),
    plumber     = require('gulp-plumber'),
    deploy      = require('gulp-gh-pages'),
    notify      = require('gulp-notify'),
    twig        = require('gulp-twig'),
    gulpStylelint = require('gulp-stylelint'),
    runSequence = require('run-sequence'),
    del         = require('del');

var is_prod = false;

var paths = {
    libscss: 'source/scss/**/*.scss',
    sitescss: 'site/scss/**/*.scss',
    sitetwig: 'site/**/*.twig',
    siteimg: 'site/img',
    testimg: 'site/test/ref',
    testcss: 'site/test/css',
    filtersjson: 'site/filters.json',
    dev: '.dev/'
}
var compiledPaths = {
    libcss: 'source/css/',
    sitecss: 'site/css/'
}

gulp.task('lib-scss', function() {
  var dest = paths.dev + compiledPaths.libcss;
  if (is_prod) {
    dest = compiledPaths.libcss;
  }
  var onError = function(err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);
    this.emit('end');
  };

  return gulp.src(paths.libscss)
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix())
    .pipe(gulp.dest(dest))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(dest))
    .pipe(reload({stream:true}));
});

gulp.task('site-scss', function() {
  var dest = paths.dev + compiledPaths.sitecss;
  if (is_prod) {
    dest = compiledPaths.sitecss;
  }
  var onError = function(err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);
    this.emit('end');
  };

  return gulp.src(paths.sitescss)
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix())
    .pipe(gulp.dest(dest))
    .pipe(reload({stream:true}))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(dest))
    .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "site"
        }
    });
});

gulp.task('deploy', function () {
    return gulp.src('site/**/*')
        .pipe(deploy());
});

gulp.task('lint-css', function lintCssTask() {
  var gulpStylelint = require('gulp-stylelint');
  var myStylelintFormatter = require('my-stylelint-formatter');

  return gulp
    .src('src/**/*.css')
    .pipe(gulpStylelint({
      failAfterError: true,
      reportOutputDir: 'reports/lint',
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'json', save: 'report.json'},
        {formatter: myStylelintFormatter, save: 'my-custom-report.txt'}
      ],
      debug: true
    }));
});

gulp.task('jshint', function() {
  gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('twig', function () {
  var dest = paths.dev;
  if (is_prod) {
    dest = './';
  }
  gulp.src([paths.sitetwig, "!site/twig/template.twig"], {base: './'})
    .pipe(twig({
      data: require('./site/filters.json')
    }))
    .pipe(gulp.dest(dest));
});

function copytask(src, dest) {
    return function() {
        return gulp.src(src)
            .pipe(gulp.dest(dest));
    }
}

gulp.task('copy-site-img', copytask(
    paths.siteimg + '/**/*',
    paths.dev + paths.siteimg
));
gulp.task('copy-test-img', copytask(
    paths.testimg + '/**/*',
    paths.dev + paths.testimg
));
gulp.task('copy-test-css', copytask(
    paths.testcss + '/**/*',
    paths.dev + paths.testcss
));
gulp.task('copy-files', ['copy-site-img', 'copy-test-img', 'copy-test-css']);

gulp.task('dev-build', function(cb) {
    is_prod = false;
    runSequence(
        'cleandev',
        'copy-files',
        'site-scss',
        'lib-scss',
        'twig',
        cb
    );
});
gulp.task('watch', ['dev-build'], function() {
  browserSync({
        server: {
            baseDir: paths.dev + 'site'
        }
    });
  gulp.watch(paths.libscss, ['lib-scss', 'site-scss', 'sass-lint']);
  gulp.watch(paths.sitescss, ['site-scss', 'sass-lint']);
  gulp.watch('source/scss/**/*.html', ['minify-html']);
  gulp.watch(paths.sitetwig, ['twig']);
});

gulp.task('cleandev', function() {
    return del([paths.dev]);
});

gulp.task('build', function(cb) {
    is_prod = true;
    runSequence(
        'site-scss',
        'lib-scss',
        'twig',
        cb
    );
});

gulp.task('server', function() {
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

gulp.task('default', ['watch']);
