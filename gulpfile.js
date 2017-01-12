const gulp = require('gulp');
const concat = require('gulp-concat-css');

gulp.task('css', () => {
  gulp.src(['node_modules/leaflet*/dist/*.css'])
    .pipe(concat('leaflet.css'))
    .pipe(gulp.dest('./public/assets/lib/leaflet'));
});
