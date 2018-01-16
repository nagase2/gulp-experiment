var gulp        = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
var typescript = require('gulp-typescript');

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

gulp.task('less-watch',['less'],function(done){
    browserSync.reload();
    done();
});
gulp.task('html-watch',['copyHTML'],function(done){
    browserSync.reload();
    done();
});
gulp.task('js-watch',['minify'],function(done){
    browserSync.reload();
    done();
});

gulp.task('default', ['minify','less','copyHTML'])
//gulp.task('html-watch',['copyHTML'],browserSync.reload);

gulp.task('watch',function()
{
    browserSync.init({
        server: {
            baseDir:'dist/'
        }
    })
   
    
    gulp.watch(['src/less/*.less'],['less-watch']);
    gulp.watch('src/*.html',['html-watch']);
    gulp.watch('src/js/*.js', ['js-watch']);

   // gulp.watch('src/less/*.less', ['less-watch']);
   // gulp.watch('src/js/*.js', ['minify']);
    //gulp.watch('src/*.html', ['copyHTML']);
    //gulp.watch('src/*.html', ['html-watch']);

});

/**
 * 外部のサイトにbrowserSync経由でアクセスする。
 */
gulp.task('proxy-test',function()
{
    browserSync.init({
        proxy: {
            target: "http://172.19.6.88:8080/jast-develop",
            ws:true
        }
    });
});