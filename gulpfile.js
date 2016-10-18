var gulp = require('gulp');
var concat = require('gulp-concat-css');
var connect = require('gulp-connect');
var replace = require('gulp-replace');

var browserify = require('browserify');
var source = require('vinyl-source-stream');  

gulp.task('connect', function() {
  connect.server({ root: 'client', port: 8080});
});

gulp.task('css', function () {
  gulp.src(['node_modules/leaflet*/dist/images/*.{png,svg}'])
    .pipe(gulp.dest('client/assets/lib/leaflet/'));
  gulp.src(['node_modules/leaflet*/dist/leaflet*.css'])
    .pipe(concat("leaflet.css"))
    .pipe(gulp.dest('./client/assets/lib/leaflet'));
});

gulp.task('browserify', function() {
  return browserify('./client/app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./client/app/'));
});

gulp.task('watch', function() {
  gulp.watch('client/app/**/!(main).js', ['browserify']);
});

gulp.task('default', ['connect', 'watch']);