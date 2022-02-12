import '../libs/scrolloverflow.js';
import '../libs/fullpage.js';

const fullpageInit = () => {
	const fullPageInstance = new fullpage('#fullpage', {
		anchors: [
			'promo',
			'about',
			// "resume",
			'skills',
			'portfolio',
			// "prices",
			'contacts',
		],
		scrollOverflow: true,
		scrollOverflowOptions: {
			scroll: false,
			click: false,
			scrollbars: false,
		},
		menu: '#menu',
		navigation: false,
		navigationPosition: 'right',
		touchSensitivity: 15,

		animateAnchor: true,

		onLeave: function (origin, destination) {
			const menuLinks = document.querySelectorAll('.menu__item');

			menuLinks.forEach((link) => {
				link.classList.remove('active');

				if (link.getAttribute('data-menuanchor') === destination.anchor) {
					link.classList.add('active');
				}
			});
		},
	});

	fullpage_api.setAllowScrolling(true);
	fullpage_api.setKeyboardScrolling(false, 'right, left');
	return fullPageInstance;
};

export default fullpageInit;
