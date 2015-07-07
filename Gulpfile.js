var gulp = require('gulp'),
    sass =  require('gulp-sass'),
    connect = require('gulp-connect')

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8000
  })
})

gulp.task('styles', function(){
  gulp.src('sass/**/*.scss')
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(gulp.dest('./css/'))
})


gulp.task('reload', function(){
    gulp.src('css/*.*')
    .pipe(connect.reload())
})

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload())
})

gulp.task('watch', function(){
    gulp.watch(['*.html'], ['html'])
    gulp.watch('sass/**/*.scss',['styles'])
});

gulp.task('default', ['connect', 'watch', 'styles'])
