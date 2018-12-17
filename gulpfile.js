const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const root = [
    './pages/*/*.scss',
    './packageUser/pages/*/*.scss',
    './packagePaper/pages/*/*.scss',
    './packageLearn/pages/*/*.scss',
    './component/*/*.scss'
]

gulp.task('sass', function () {
    return gulp.src(root, {base: '.'})
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', function (error) {
            console.log(error)
            this.emit('end')
        })
        .pipe(rename(function (path) {
            console.log(path)
            path.extname = '.wxss'
         }))
        // .pipe(autoprefixer('last 2 versions'))
        // .pipe(rename({
        //   extname: ".wxss"
        // }))
        .pipe(gulp.dest('./'))
})


gulp.task('serve', ['sass'], function () {
  gulp.watch(root, ['sass'])
})

gulp.task('default', ['serve'])