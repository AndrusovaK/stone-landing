var gulp = require('gulp'),
    config = require('./config');

gulp.task('php', function() {
    console.log('---------- копирование php');
    return gulp.src('src/*.php')
        .pipe(gulp.dest('dist'));
});