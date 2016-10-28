const gulp = require('gulp');
const concat = require('gulp-concat-css');
const connect = require('gulp-connect');
const replace = require('gulp-replace');

const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('connect', () => {
  connect.server({ root: 'client', port: 8080 });
});

gulp.task('css', () => {
  gulp.src(['node_modules/leaflet*/dist/images/*.{png,svg}'])
    .pipe(gulp.dest('client/assets/lib/leaflet/'));
  gulp.src(['node_modules/leaflet*/dist/leaflet*.css'])
    .pipe(concat('leaflet.css'))
    .pipe(gulp.dest('./client/assets/lib/leaflet'));
});

gulp.task('browserify', () => {
  return browserify('./client/app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./client/app/'));
});

gulp.task('watch', () => {
  gulp.watch('client/app/**/!(main).js', ['browserify']);
});

gulp.task('default', ['connect', 'watch']);
