import gulp from 'gulp';
import sass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import { exec } from 'child_process';
import { promisify } from 'util';
import cssbeautify from 'gulp-cssbeautify';

const execAsync = promisify(exec);
const sassCompiler = sass(dartSass);

// Stylelintタスクを修正（--fixオプションを追加）
gulp.task('lint-scss', async function() {
  try {
    const { stdout, stderr } = await execAsync('npx stylelint "./src/**/*.scss" --fix');
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    // エラーの詳細情報を表示
    console.error('\x1b[31mStylelint found issues:\x1b[0m');
    if (error.message) console.error(error.message);
    if (error.stderr) console.error(error.stderr);
    if (error.stdout) console.error(error.stdout);
    // エラーがあった場合でもタスクを継続
  }
});

// SCSSのコンパイルタスク
gulp.task('sass', gulp.series('lint-scss', function() {
  // 非圧縮版の生成
  const unminified = gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cssbeautify({
      indent: '  ',
      autosemicolon: true,
      openbrace: 'end-of-line',
      removeEmptyRules: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));

  // 圧縮版の生成（圧縮版は整形不要なのでそのまま）
  const minified = gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));

  return Promise.all([unminified, minified]);
}));

// ファイルの変更を監視
gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
});

// デフォルトタスク
gulp.task('default', gulp.series('sass', 'watch'));
