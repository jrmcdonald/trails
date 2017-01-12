const gulp = require('gulp');
const concat = require('gulp-concat-css');
const connect = require('gulp-connect');
const replace = require('gulp-replace');

const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('connect', () => {
  connect.server({ root: 'public', port: 8080 });
});

gulp.task('css', () => {
  gulp.src(['node_modules/leaflet*/dist/images/*.{gif,png,svg}'])
    .pipe(gulp.dest('public/assets/lib/leaflet/'));
  gulp.src(['node_modules/leaflet*/dist/*.css'])
    .pipe(concat('leaflet.css'))
    .pipe(gulp.dest('./public/assets/lib/leaflet'));
});

gulp.task('browserify', () => {
  return browserify('./public/app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/app/'));
});

gulp.task('watch', () => {
  gulp.watch('public/app/**/!(main).js', ['browserify']);
});

gulp.task('default', ['connect', 'watch']);
