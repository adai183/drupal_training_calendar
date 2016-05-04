var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/*').on('change', browserSync.reload);
	gulp.watch('./css/*').on('change', browserSync.reload);

	browserSync.init({
		server: './'
	});
});

gulp.task('lint', function () {
	return gulp.src(['js/**/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});
