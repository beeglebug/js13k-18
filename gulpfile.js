const gulp = require('gulp')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify-es').default
const htmlreplace = require('gulp-html-replace')
const zip = require('gulp-zip')

gulp.task('clean', () => gulp
  .src(['build/*', 'archive.zip'], { read: false })
  .pipe(clean())
)

gulp.task('copy', ['clean'], () => gulp
  .src(['src/style.css', 'src/sprites.png'])
  .pipe(gulp.dest('build'))
)

gulp.task('build', ['clean'], () => gulp
  .src('src/js/*.js')
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build'))
)

gulp.task('html', ['clean'], () => gulp
  .src('src/index.html')
  .pipe(htmlreplace({ js: 'app.js' }))
  .pipe(gulp.dest('build/'))
)

gulp.task('zip', ['copy', 'build', 'html'], () =>
  gulp.src('build/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest(''))
);

gulp.task('default', ['clean', 'copy', 'build', 'html', 'zip'])
