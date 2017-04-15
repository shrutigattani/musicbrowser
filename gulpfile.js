(function () {
    "use strict";

    var gulp = require('gulp');
    var del = require('del');
    var $ = require('gulp-load-plugins')({lazy: true});
    var config = require('./gulpconfig');


    gulp.task('styles', function () {
        return gulp.src(config.scss+'**/*.scss')
            .pipe($.sass())
            .pipe(gulp.dest(config.css));
    });


    /**!
     *
     * @param path
     */
    function clean(path) {
        log('cleaning: ' + $.util.colors.blue(path));
        /**!          * del returns a promise and you should call .then(done)          * to get it called after the del finishes.          **/
        return del(path);
    }

    /**!
     *
     * @param message
     */
    function log(message) {
        if (typeof(message) === 'object') {
            for (var key in message) {
                if (message.hasOwnProperty(key)) {
                    $.util.log($.util.colors.blue(message[key]));
                }
            }
        } else {
            $.util.log($.util.colors.blue(message));
        }
    }

})();