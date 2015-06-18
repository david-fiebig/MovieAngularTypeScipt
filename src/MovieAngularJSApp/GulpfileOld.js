/// <binding BeforeBuild='clean, deploy, deployBower' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['Scripts/**/*.js'],
    bower: 'bower_components/**',
    dest: 'wwwroot/Scripts/',
    destBower: 'wwwroot/lib/'
};

gulp.task('clean', function (cb) {
    del([paths.dest, paths.destBower], cb);
});

gulp.task('deploy', function () {
    return gulp.src(paths.scripts)
        .pipe(gulp.dest(paths.dest));
});

gulp.task('deployBower', function () {
    return gulp.src(paths.bower)
        .pipe(gulp.dest(paths.destBower));
});