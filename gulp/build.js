/* Build */
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'html',
        'php',
        'bower',
        'js',
        'vendorCss',
        // 'png-sprite'
        'images',
        'svg',
        // 'svg-sprite',
        'fonts',
        'less',

        // 'txt',
        // 'gh-pages',
        callback)
});
