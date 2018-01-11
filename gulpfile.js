var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const livereload = require('gulp-livereload');


gulp.task('default', ()=>
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

// copy Html
gulp.task('copyHTML',function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
  //.pipe(gulp.livereload()))

});


// Minify JS
gulp.task('minify',function(){
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});


gulp.task('less', function() {
gulp.src('less/*.less')
.pipe(less())
.pipe(gulp.dest('css'))
.pipe(livereload());
});

gulp.task('watch', function() {
livereload.listen();
gulp.watch('less/*.less', ['less']);
});


//------------------
function defaultTask(done) {
  // place code for your default task here
  console.log("default task executed. ")
  done();
}

gulp.task('message',function(){
  return console.log('Gulp is runnning...')
});


