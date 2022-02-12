'use strict';

import {createRequire} from 'node:module';

import gulp from 'gulp'
import webpack from 'webpack-stream'
import browserSync from 'browser-sync' 
import cleanCSS from 'gulp-clean-css'
import gulpSass from 'gulp-sass'
import Sass from 'sass'
import autoPrefixer from 'gulp-autoPrefixer';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin'
import htmlmin from 'gulp-htmlmin';
import pug from 'gulp-pug'

const sass = gulpSass(Sass)
const require = createRequire(import.meta.url);

const dist = './dist/';

gulp.task('build-pug', () => {
	return gulp
		.src('src/pug/**/*.pug')
		.pipe(
			pug({
				filename: 'index.pug',
				basedir: './src/',
				data: require('./src/data.json'),
			})
		)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.stream());
});

gulp.task('build-styles', () => {
	return gulp
		.src('src/sass/**/*.+(scss|sass)')
		.pipe(
			sass({ outputStyle: 'compressed', sourceMap: true }).on(
				'error',
				sass.logError
			)
		)
		.pipe(rename({ suffix: '.min', prefix: '' }))
		.pipe(autoPrefixer())
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

gulp.task('build-js', () => {
	return gulp
		.src('./src/js/main.js')
		.pipe(
			webpack({
				mode: 'development',
				output: {
					filename: 'script.js',
				},
				watch: false,
				devtool: 'source-map',
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: [
										[
											'@babel/preset-env',
											{
												debug: true,
												corejs: 3,
												useBuiltIns: 'usage',
											},
										],
									],
								},
							},
						},
					],
				},
			})
		)
		.pipe(gulp.dest(dist))
		.on('end', browserSync.reload);
});

gulp.task('build-assets', () => {
	gulp
		.src('src/assets/fonts/**/*')
		.pipe(gulp.dest('dist/assets/fonts'))
		.pipe(browserSync.stream());
	gulp
		.src('src/assets/icons/**/*')
		.pipe(gulp.dest('dist/assets/icons'))
		.pipe(browserSync.stream());
	gulp
		.src('src/assets/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/img'))
		.pipe(browserSync.stream());
});

gulp.task('watch', () => {
	browserSync.init({
		server: './dist/',
		port: 4000,
		notify: true,
	});

	gulp.watch('./src/pug/**/*.pug', gulp.parallel('build-pug'));
	gulp.watch('./src/sass/**/*.+(scss|sass)', gulp.parallel('build-styles'));
	gulp.watch('./src/assets/**/*.*', gulp.parallel('build-assets'));
	gulp.watch('./src/js/**/*.js', gulp.parallel('build-js'));
});

gulp.task(
	'build',
	gulp.parallel('build-pug', 'build-styles', 'build-assets', 'build-js')
);

gulp.task('build-prod-js', () => {
	return gulp
		.src('./src/js/main.js')
		.pipe(
			webpack({
				mode: 'production',
				output: {
					filename: 'script.js',
				},
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: [
										[
											'@babel/preset-env',
											{
												corejs: 3,
												useBuiltIns: 'usage',
											},
										],
									],
								},
							},
						},
					],
				},
			})
		)
		.pipe(gulp.dest(dist));
});

gulp.task('default', gulp.parallel('watch', 'build'));
