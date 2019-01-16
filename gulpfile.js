// 'use strict'

// ОСНОВНЫЕ ПЕРЕМЕННЫЕ И НАСТРОЙКИ
const gulp = require('gulp'),
			sass = require('gulp-sass'),
			browserSync = require('browser-sync');

var dirs = {
    "srcPath": "./src/", // в оригинале ./app/
    "buildPath": "./build/", // в оригинале ./dist/
    "blocksDirName": "blocks"
  };


//ЗАДАЧИ GULP 

// Очистка папки сборки
// gulp.task('clean', function () {
//   console.log('---------- Очистка папки сборки');
//   return del([
//     dirs.buildPath + '/**/*',
//     '!' + dirs.buildPath + '/readme.md'
//   ]);
// });


gulp.task('browser-sync', function() {
	browserSync({
	server: {
		baseDir: dirs.srcPath
	},
	notify: true
	});
});

// компиляция SСSS в CSS
gulp.task('sass', function(){
	return gulp.src(dirs.srcPath+'scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest(dirs.buildPath+'/css'))
	.pipe(browserSync.reload({stream: true}));
});



gulp.task('watch', gulp.parallel('browser-sync', 'sass'), function() {
	gulp.watch(dirs.srcPath+'scss/*.scss', gulp.parallel(['sass']))
  gulp.watch(dirs.srcPath+'**/*.html', browserSync.reload)
	gulp.watch(dirs.srcPath+'js/*.js', browserSync.reload)

}); 
// Тестовое задание
// gulp.task("mytask", function(done){
// 	return gulp.src('source-files')
// 	.pipe(plugin())
// 	.pipe(gulp.dest('folder'));
// 	done();
// })