var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var replace = require('gulp-replace');
 
gulp.task('css', function () {
  gulp.src(['node_modules/leaflet*/dist/images/*.{png,svg}'])
    .pipe(gulp.dest('client/vendor/'));
  gulp.src(['node_modules/leaflet*/dist/leaflet*.css'])
    .pipe(concatCss("vendor.css"))
    .pipe(replace('url("', 'url("../vendor/'))
    .pipe(gulp.dest('./client/css'));
});