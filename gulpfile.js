const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// compile scss into css
function style() {
  // MY SCSS FILE
  return (
    gulp
      .src("./src/scss/**/*.scss")
      // PASS THAT FILE THROUGH SASS COMPILER
      .pipe(sass().on("error", sass.logError))
      // WHERE DO I SAVE THE COMPILED CSS
      .pipe(gulp.dest("./src/css"))
      // STREAM CHANGES TO ALL BROWSER
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./src/scss/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;
