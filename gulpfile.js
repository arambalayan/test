const { src, dest, watch, series } = require("gulp");
const browsersync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
sass.compiler = require("sass");

const sassCompiler = () => {
  return src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css/"));
};

const watchBuild = () => {
  watch("./sass/**/*.scss", sassCompiler);
};

const browsersyncServe = (cb) => {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
};

const browsersyncReload = (cb) => {
  browsersync.reload();
  cb();
};

const watchDev = () => {
  watch("*.html", browsersyncReload);
  watch("./sass/**/*.scss", series(sassCompiler, browsersyncReload));
};

exports.build = series(sassCompiler, watchBuild);
exports.dev = series(sassCompiler, browsersyncServe, watchDev);
