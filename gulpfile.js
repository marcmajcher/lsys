'use strict';

/* eslint-env node */

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const lintable = [
  'js/**/*.js',
  'gulpfile.js',
  'test/**/*.js',
  '!node_modules/**',
  '!docs/**'
];

gulp.task('default', ['clean', 'lint', 'build', 'connect', 'watch']);
gulp.task('build', ['sass', 'pages', 'scripts']);
gulp.task('lint', ['eslint', 'jshint']);

gulp.task('clean', () =>
  del([
    'docs/*'
  ])
);

gulp.task('connect', () => {
  connect.server({
    livereload: true
  });
});

gulp.task('pages', () => {
  gulp
    .src('web/*')
    .pipe(rename({
      dirname: ''
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task('scripts', () => {
  gulp
    .src('js/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', (error) => {
      console.error(error.toString()); // eslint-disable-line no-console
    })
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('docs/js'));
});

gulp.task('eslint', () =>
  gulp
  .src(lintable)
  .pipe(eslint())
  .pipe(eslint.format())
  .on('error', (error) => {
    console.error(error.toString()); // eslint-disable-line no-console
    this.emit('end');
  })
);

gulp.task('jshint', () => gulp
  .src(lintable)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
);

gulp.task('sass', () =>
  gulp
  .src('scss/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer())
  .pipe(gulp.dest('docs/css'))
);

gulp.task('watch', () => {
  gulp.watch([
    'js/**/*.js',
    'gulpfile.js',
    'test/**/*.js',
  ], ['jshint', 'eslint']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['sass']);
});
