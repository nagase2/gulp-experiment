var gulp = require('gulp');     
var scssPlugin = require('gulp-less');
var connect = require('gulp-connect');

gulp.task('myStyles', function () {
    gulp.src('less/*.less')
        .pipe(scssPlugin())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watchMyStyles', function() {
    gulp.watch('less/*.less', ['myStyles']);
});

gulp.task('default', ['watchMyStyles', 'connect']);