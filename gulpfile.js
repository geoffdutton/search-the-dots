const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const mocha = require('gulp-mocha')

gulp.task('test', ['babel'], ()=> {
  gulp.src('test/**/*.js', {read: false})
  // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({reporter: 'nyan', singleRun: false}))
})


gulp.task('babel', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['babel'])

gulp.task('watch', ['test'], ()=> {
  gulp.watch(['src/**', 'test/**'], ['test'])
})