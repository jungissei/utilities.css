import gulp from 'gulp';
import sass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const sassCompiler = sass(dartSass);

// Stylelintタスクを追加
gulp.task('lint-scss', async function() {
  try {
    const { stdout, stderr } = await execAsync('npx stylelint "./src/**/*.scss"');
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    console.error('\x1b[31mStylelint found issues:\x1b[0m', error.stdout);
    // エラーがあった場合でもタスクを継続

    // ビルドを停止させたい場合以下のコメントアウトを外す
    // throw new Error('Stylelint check failed');
  }
});

// SCSSのコンパイルタスク
gulp.task('sass', gulp.series('lint-scss', function() {
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
}));

// ファイルの変更を監視
gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
});

// デフォルトタスク
gulp.task('default', gulp.series('sass', 'watch'));
