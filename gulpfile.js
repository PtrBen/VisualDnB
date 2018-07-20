var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    autoprefixer = require('autoprefixer'),
    nano = require('cssnano'),
    minifyjs = require('gulp-js-minify');

var processor = [
  autoprefixer({ browsers: ['last 5 versions'] }),
  nano
]

gulp.task('css', function(){
  return gulp.src('assets/css/style.css')
    .pipe(postcss(processor))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('assets/css/'))
})

// gulp.task('js', function(){
//   return gulp.src('assets/js/script.js')
//     .pipe(minifyjs())
//     .pipe(rename('script.min.js'))
//     .pipe(gulp.dest('assets/js/'))
// })
//CA MARCHE PAS GENIAL !!

// gulp.task('default', function(){
//
// })
