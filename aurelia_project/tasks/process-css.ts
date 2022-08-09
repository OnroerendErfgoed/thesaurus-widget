// @ts-ignore
import { build } from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as dartSass from 'sass';
import * as gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

export default function processCSS() {
  return gulp.src(project.cssProcessor.source, {sourcemaps: true})
    .pipe(sass().on('error', sass.logError))
    .pipe(build.bundle());
}

export function pluginCSS(dest) {
  return function processPluginCSS() {
    return gulp.src(project.plugin.source.css)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(dest));
  };
}
