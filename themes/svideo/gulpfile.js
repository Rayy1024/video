'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'), // Ребилд только измененных файлов
    plumber = require('gulp-plumber'), // Защита gulp от вылета
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    shell = require('gulp-shell'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    css: 'css/',
    scss: 'scss/*.*',
    template: '../templates/*.{php,inc,info}'
};

gulp.task('webserver', ['sass'], function () {
    browserSync.init({
        proxy: "v.skm.pp.ua",
        open: false
    });
});

gulp.task('sass', function () {
    gulp.src(path.scss)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass()).on('error', sass.logError)
        .pipe(prefixer())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(path.css))
        .pipe(reload({stream: true}));
});

gulp.task('clearcache', function() {
    return shell.task([
        'drush cc all'
    ]);
});

gulp.task('reload', ['clearcache'], function () {
    reload();
});

gulp.task('watch', function () {
    watch([path.scss], function (event, cb) {
    gulp.start('sass');
  });
    watch([path.template], function (event, cb) {
    gulp.start('reload');
  });
});


gulp.task('default', ['webserver', 'watch']);