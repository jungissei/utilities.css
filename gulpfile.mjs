import gulp from 'gulp';
import sass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';

const sassCompiler = sass(dartSass);

// SCSSのコンパイルタスク
gulp.task('sass', function() {
  // 非圧縮版の生成
  const unminified = gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));

  // 圧縮版の生成
  const minified = gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));

  return Promise.all([unminified, minified]);
});

// ファイルの変更を監視
gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
});

// デフォルトタスク
gulp.task('default', gulp.series('sass', 'watch'));
