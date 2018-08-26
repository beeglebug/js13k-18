const gulp = require('gulp')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify-es').default
const htmlreplace = require('gulp-html-replace')
const htmlSrc = require('gulp-html-src')
const removeCode = require('gulp-remove-code')
const zip = require('gulp-zip')

const assets = [
  'src/style.css',
  'src/sprites.png',
  'src/font.png'
]

gulp.task('clean', () => gulp
  .src(['build/*', 'archive.zip'], { read: false })
  .pipe(clean())
)

gulp.task('copy', ['clean'], () => gulp
  .src(assets)
  .pipe(gulp.dest('build'))
)

gulp.task('compile', ['clean'], () => gulp
  .src('src/index.html')
  .pipe(htmlSrc())
  .pipe(concat('app.js'))
  .pipe(removeCode({ production: true }))
  .pipe(uglify())
  .pipe(gulp.dest('build'))
)

gulp.task('html', ['clean'], () => gulp
  .src('src/index.html')
  .pipe(htmlreplace({ js: 'app.js' }))
  .pipe(gulp.dest('build/'))
)

gulp.task('zip', ['copy', 'compile', 'html'], () =>
  gulp.src('build/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest(''))
);

gulp.task('build', ['clean', 'copy', 'compile', 'html', 'zip'])

gulp.task('default', ['build'])
