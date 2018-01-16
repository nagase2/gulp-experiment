var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');


gulp.task('default', function () {
  var tsProject = tsc.createProject('tsconfig.json');
  var tsResult = gulp.src(['src/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(tsProject());
  return merge(tsResult, tsResult.js)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'));
});

