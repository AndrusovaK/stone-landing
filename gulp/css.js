var gulp = require('gulp'),
    config = require('./config');

gulp.task('vendorCss', function() {
  console.log('---------- копирование CSS');
  return gulp.src('src/less/vendor/*.css')
    .pipe(gulp.dest(config.pathTo.Build.CSSVendor));
});