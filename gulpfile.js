var gulp        = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const less = require('gulp-less');


var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');


var browserSync = require('browser-sync').create();



// gulp.task('ts', function () {
//     var tsProject = tsc.createProject('tsconfig.json');
//     var tsResult = gulp.src(['src/**/*.ts'])
//       .pipe(sourcemaps.init())
//       .pipe(tsProject());
//     return merge(tsResult, tsResult.js)
//       .pipe(sourcemaps.write('.'))
//       .pipe(gulp.dest('./dist/js'));
//   });
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject());
      
});

  

// // Minify JS
// gulp.task('minify',function(){
//     gulp.src('src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'))
//   });
  
  
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
// gulp.task('js-watch',['minify'],function(done){
//     browserSync.reload();
//     done();
// });
gulp.task('ts-watch',['ts'],function(done){
    browserSync.reload();
    done();
});

gulp.task('default', ['ts','less','copyHTML'])
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
    gulp.watch('src/js/**/*.js', ['js-watch']);
    gulp.watch('src/ts/**/*.ts', ['ts-watch']);

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