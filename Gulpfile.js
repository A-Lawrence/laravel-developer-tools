var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var run = require('gulp-run');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var path = require('path');

gulp.task('test', function() {
    gulp.src('spec/**/*.php')
        .pipe(run('clear'))
        .pipe(phpspec('', { 'verbose': 'v', notify: true }))
        .on('error', notify.onError({
            title: "Fatal blow...",
            message: "If you're not failing, you're not trying hard enough.",
            icon: path.join(__dirname, "/failure.png")
        }))
        .pipe(notify({
            title: "Elon would be proud!",
            message: "All green, and good to go!",
            icon: path.join(__dirname, "/success.png")
        }));
});

gulp.task('watch', function() {
    gulp.watch(['spec/**/*.php', 'src/**/*.php'], ['test']);
});

gulp.task('default', ['test', 'watch']);