const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// SCSS Task
function scssTask() {
	return src('src/scss/styles.scss', { sourcemaps: true })
		.pipe(sass())
		.pipe(postcss([cssnano]))
		.pipe(dest('dist/css', { sourcemaps: '.' }));
}

// JS Task
function jsTask() {
	return src('src/js/**/*.js')
		.pipe(concat('scripts.js'))
		.pipe(dest('dist/js', { sourcemaps: '.' }));
}

// HTML Task
function htmlTask() {
	return src('src/**/*.html').pipe(dest('dist'));
}

// Image Task
function imgTask() {
	return src('src/img/*').pipe(dest('dist/img'));
}

// Browsersync Task
function browserSyncServe(cb) {
	browserSync.init({
		server: {
			baseDir: 'dist/',
		},
	});
	cb();
}

function browserSyncReload(cb) {
	browserSync.reload();
	cb();
}

// Watch Task
function watchTask() {
	watch('**/*.html', browserSyncReload);
	watch(
		['src/scss/**/*.scss', 'src/js/**/*.js', 'src/**/*.html', 'src/img/*'],
		series(scssTask, jsTask, htmlTask, browserSyncReload, imgTask)
	);
}

// Default Gulp Task
exports.default = series(
	scssTask,
	jsTask,
	htmlTask,
	imgTask,
	browserSyncServe,
	watchTask
);
