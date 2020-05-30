const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');

gulp.task('build',() => {
  return gulp.src('app/styles/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('../dist'));
});