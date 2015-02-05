var gulp = require('gulp');
var shell = require('gulp-shell');
var del = require('del')

gulp.task('server', shell.task('webpack-dev-server --colors --progress --hot'))

gulp.task('watch', shell.task('webpack --progress --colors --watch'));

gulp.task('build', shell.task('webpack --progress --colors'));

gulp.task('clean', function (cb) {
  del(['build/**'], cb)
})