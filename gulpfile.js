var gulp        = require('gulp');
var sass        = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src("./src/assets/styles/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./src/assets/styles/css"));
});

gulp.task('default', ['sass']);