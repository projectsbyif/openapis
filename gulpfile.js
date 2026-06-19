/**
  Boilerplate gulpfile.js
  Updated 2018-02-14
**/

const gulp = require('gulp');
const sass = require('sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const nodemon = require('nodemon');
const log = require('fancy-log');
const path = require('path');
const { Transform } = require('stream');

// Compile SCSS via Dart Sass's modern API (sass.compile), avoiding the
// deprecated legacy JS API that gulp-sass relies on internally.
function compileSass() {
  return new Transform({
    objectMode: true,
    transform(file, enc, cb) {
      if (file.isNull()) return cb(null, file);
      try {
        const result = sass.compile(file.path, {
          loadPaths: [path.dirname(file.path)],
        });
        file.contents = Buffer.from(result.css);
        file.extname = '.css';
        cb(null, file);
      } catch (err) {
        cb(err);
      }
    },
  });
}

gulp.task("sass", function() {
  return gulp.src('assets/sass/app.scss')
  .pipe(compileSass().on('error', function(err) {
    log(err);
  }))
  .pipe(gulp.dest('public/css'));
});

gulp.task("js", function(cb) {
  pump([
    gulp.src("assets/js/*.js"),
    uglify(),
    gulp.dest("public/js")
  ], cb);
});

gulp.task("watch", function() {
  gulp.watch('assets/sass/*.scss', gulp.parallel("sass"));
  gulp.watch('assets/js/*.js', gulp.parallel("js"));
  nodemon({
    script: 'index.js',
    ext: '',
    ignore: ['public/*']
  });
});

gulp.task("default", gulp.parallel("sass", "js", "watch"));

gulp.task("deploy", gulp.parallel("sass", "js"));
