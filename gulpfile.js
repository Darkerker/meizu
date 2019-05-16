const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  rename = require('gulp-rename'),
	  cleancss = require('gulp-clean-css');
	  imagemin = require('gulp-imagemin');
	  concat = require('gulp-concat');
	  
	  uglify = require('gulp-uglify');
	  
gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass({outputStytle : 'expanded'})) 
	.pipe(sass())
	.pipe(rename({'suffix' : '.min'}))
	//.pipe(cleancss())
	.pipe(gulp.dest('./dist/css'));
})

gulp.task('img',()=>{
	gulp.src('./src/img/*/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/img'))
})

gulp.task('js',()=>{
	gulp.src('./src/js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'))
})

gulp.task('js1',()=>{
	gulp.src('./src/js/*.js')
	.pipe(rename({'suffix':'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'))
})

gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/js/*.js',['js','js1']);
})
