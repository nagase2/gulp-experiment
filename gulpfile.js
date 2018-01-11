var gulp        = require('gulp');
var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const less = require('gulp-less');

var browserSync = require('browser-sync').create();



// Minify JS
gulp.task('minify',function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
  });
  
  
  gulp.task('less', function() {
    gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
  });

  // copy Html
gulp.task('copyHTML',function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
    //.pipe(gulp.livereload()))
  
  });

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('less-watch',['less'],browserSync.reload);
//gulp.task('html-watch',['copyHTML'],browserSync.reload);

gulp.task('watch',function()
{
    browserSync.init({
        server: {
            baseDir:'dist/'
        }
    });
    gulp.watch('src/less/*.less', ['less-watch']);
    gulp.watch('src/js/*.js', ['minify']);
    gulp.watch('src/*.html', ['copyHTML']);
    //gulp.watch('src/*.html', ['html-watch']);

})