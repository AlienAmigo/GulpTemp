'use strict'

// ОСНОВНЫЕ ПЕРЕМЕННЫЕ И НАСТРОЙКИ
const gulp = require('gulp'),
			sass = require('gulp-sass');

var dirs = {
    "srcPath": "./src/",
    "buildPath": "./build/",
    "blocksDirName": "blocks"
  }


//ЗАДАЧИ GULP 

// Очистка папки сборки
// gulp.task('clean', function () {
//   console.log('---------- Очистка папки сборки');
//   return del([
//     dirs.buildPath + '/**/*',
//     '!' + dirs.buildPath + '/readme.md'
//   ]);
// });



// попытка сделать 
gulp.task('sass', function(){
	return gulp.src(dirs.srcPath+'scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest(dirs.srcPath+'/css'));
})

// Тестовое задание
// gulp.task("mytask", function(done){
// 	return gulp.src('source-files')
// 	.pipe(plugin())
// 	.pipe(gulp.dest('folder'));
// 	done();
// })