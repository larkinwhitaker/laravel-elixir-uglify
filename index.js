var gulp 	   = require('gulp'),
	elixir 	   = require('laravel-elixir'),
	ext 	   = require('gulp-ext-replace'),
	uglify 	   = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps');


var Task = elixir.Task;


elixir.extend('uglify', function(sourceFile, outputFolder) 
{ 
	new Task('uglify', function() 
	{
        return gulp.src(sourceFile)
        			// Initialize
        		   .pipe(sourcemaps.init())
		           .pipe(uglify())
		           // Add .min extension to file
		           .pipe(ext('.min.js'))
		           // Output minified js
		           .pipe(gulp.dest(outputFolder))
		           // Write and Output minified js mapping file
		           .pipe(sourcemaps.write('./'))
				   .pipe(gulp.dest(outputFolder));
    });
});