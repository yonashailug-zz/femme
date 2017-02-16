var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    runSequence = require('run-sequence');


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        }
    });
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass()) // using gulp-sass
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// minify & concatinate JS in html
// gulp.task('useref', function() {
//     return gulp.src('index.html')
//         .pipe(useref())
//         // minifies only if it's a javascript file
//         .pipe(gulpIf('js/**/*.js', uglify()))
//         .pipe(gulpIf('css/**/*.css', cssnano()))
//         .pipe(gulp.dest('dist'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))
// });


gulp.task('watch', ['browserSync', 'sass'], function(callback) {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('**/main.css', browserSync.reload);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    // gulp.watch('*.css', browserSync.reload);

});

gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch'], callback);
});
