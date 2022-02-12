import throttle from './modules/throttle.js';
import handleMenu from './modules/handleMenu.js';
import barsFunction from './modules/barsFunction.js';
import fullpageInit from './modules/fullpageInit.js';
import skills from './modules/skills/skills.js';
import portfolio from './modules/portfolio/portfolio.js';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	throttle('resize', 'optimizedResize');

	barsFunction();
	fullpageInit();
	handleMenu();
	skills();
	portfolio('.portfolio__wrapper');
});
