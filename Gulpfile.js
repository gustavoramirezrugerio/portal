// incluir plug-ins de gulp  http://gulpjs.com/plugins/
var gulp      = require('gulp'),
  jshint      = require('gulp-jshint'),
  uglify      = require('gulp-uglify'),
  changed     = require('gulp-changed')
  imagemin    = require('gulp-imagemin'),
  stripDebug  = require('gulp-strip-debug'),
  minifyCSS   = require('gulp-minify-css'),
  minifyHTML  = require('gulp-minify-html'),
  concat      = require('gulp-concat'),
  rename      = require('gulp-rename'),
  browserify  = require('gulp-browserify');

//::::::::::::::::::::: Creacion de tareas "development"
gulp.task('jshint', function() {
  gulp.src('./development/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//::::::::::::::::::::: Creacion de tareas "production"
gulp.task('minificarJS', function () {
  gulp.src('../sitio_produccion/assets/js/**/*.js')
    .pipe(browserify())
    .pipe(uglify({ compress: true }))
    .pipe(stripDebug())
    .pipe(gulp.dest('.././production/js'));
});

gulp.task('minificarVendorJS', function () {
  gulp.src('./development/vendor/**/*.js')
    .pipe(browserify())
    .pipe(uglify({ compress: true }))
    .pipe(stripDebug())
    .pipe(gulp.dest('./production/vendor'));
});

gulp.task('scripts', function() {
    return gulp.src('./development/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./production/js'));
});

gulp.task('css', function () {
  gulp.src('./development/css/**/*.css')
    .pipe(minifyCSS({ keepSpecialComments: '*', keepBreaks: '*'}))
    .pipe(gulp.dest('./production/css'));
});

gulp.task('minificarVendorCSS', function () {
  gulp.src('./development/vendor/**/*.css')
    .pipe(minifyCSS({ keepSpecialComments: '*', keepBreaks: '*'}))
    .pipe(gulp.dest('./production/vendor/'));
});

gulp.task('images', function () {
  var imgSrc = './development/imagenes/**/*',
      imgDst = './production/imagenes';

  gulp.src('./development/imagenes/**/*')
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('minificarVendorIMAGENES', function () {
  var imgSrc = './development/vendor/**/*',
      imgDst = './production/vendor';

  gulp.src('./development/vendor/**/*')
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});


gulp.task('html', function () {
  var htmlSrc = './development/*.html',
      htmlDst = './production';

  gulp.src(htmlSrc)
  .pipe(minifyHTML())
  .pipe(gulp.dest(htmlDst));
});

gulp.task('fonts', function () { //solamente se copia
  gulp.src('./development/fonts/**')
    .pipe(gulp.dest('./production/fonts'));
});


//Agrupacion de tareas
//gulp.task('default', [ 'minificarJS', 'minificarVendorJS', 'minificarVendorCSS', 'minificarVendorIMAGENES', 'css', 'images', 'html', 'fonts' ]);
gulp.task('default', [ 'minificarJS',  ]);
//gulp.task('default', [ 'jshint' ]);

