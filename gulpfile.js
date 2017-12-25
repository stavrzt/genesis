'use strict'

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    globbing = require('gulp-css-globbing'),
    notify = require("gulp-notify"),
    prefix = require('gulp-autoprefixer');

const paths = {
    html: ['index.html'],
    css: ['src/css/styles.css'],
    scss :['src/scss/*.scss'],
    js: ['src/js/scripts.js']
};

gulp.task('scss', function () {
    gulp.src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(globbing({
            extensions: ['.scss']
        }))
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths : ['src/scss'],
            errLogToConsole: true
        }))
        .on('error', notify.onError(function (error) {
            return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
        }))
        .pipe(prefix({
            browsers: ["last 10 version"]
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'));
});

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        root: './',
        livereload: true
    });
});

gulp.task('html', function(){
    gulp.src(paths.html)
        .pipe(connect.reload());
});

gulp.task('css', function(){
    gulp.src(paths.css)
        .pipe(connect.reload());
});

gulp.task('js', function(){
    gulp.src(paths.js)
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.scss, ['scss']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'connect']);
