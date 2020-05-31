const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const gulp = require('gulp');

gulp.task('build',() => {
  return gulp.src('src/app/styles/css/*.css')
    .pipe(cleanCSS())
    .pipe(concat('rainbowed.min.css'))
    .pipe(gulp.dest('dist/css'));
});