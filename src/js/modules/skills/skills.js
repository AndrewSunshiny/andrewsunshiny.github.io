import skillsData from './skillsData.js';
import SkillsBlock from './skillsBlock.js';
import SkillsContainer from './skillsContainer.js';
import animate from '../animate.js';
import { easeInOut } from '../timingFunc.js';

function skills() {
	const wrapper = document.querySelector('.skills__wrapper');

	window.addEventListener('optimizedResize', function () {
		pageData.pageWidth = document.documentElement.scrollWidth;
		pageData.endLeft = (main.offsetWidth - 270) / 2;
		pageData.fr = parseInt(window.getComputedStyle(main.childNodes[0]).width);
	});

	for (const key in skillsData) {
		const container = new SkillsContainer({ skill: key }).mount();

		if (key !== 'main' && skillsData[key][0].type !== 'descr') {
			const invisible = new SkillsBlock({
				type: 'invisible',
			}).mount();
			container.appendChild(invisible);
		}

		for (let i = 0; i < skillsData[key].length; i++) {
			const item = new SkillsBlock({
				...skillsData[key][i],
			}).mount();

			container.appendChild(item);
		}

		wrapper.appendChild(container);

		if (key !== 'main') container.style.display = 'none';
	}

	const main = wrapper.querySelector('.skills__blocks');
	const pageData = {
		ready: true,
		pageWidth: document.documentElement.scrollWidth,
		mainWidth: main.offsetWidth <= 320 ? main.offsetWidth : 270,
		endLeft: (wrapper.offsetWidth - 270) / 2,
		fr: parseInt(window.getComputedStyle(main.childNodes[0]).width),
	};

	wrapper.addEventListener('click', (event) => {
		const target = event.target.closest('.skills__block:not(.description)');

		if (
			!target ||
			!target.classList.contains('skills__block') ||
			!pageData.ready
		)
			return;

		const targetData = {
			skill: target.dataset.skill,
			styles: getComputedStyle(target),
			offsetLeft: target.offsetLeft,
			offsetTop: target.offsetTop,
			other: [...target.parentNode.childNodes].filter((n) => n !== target),
			subskills: null,
			isActive: target.classList.contains('active'),
			text:
				pageData.pageWidth <= 768
					? target.querySelector('.skills__block-text')
					: null,
			title:
				pageData.pageWidth <= 410
					? target.querySelector('.skills__block-subtitle')
					: null,
			hidden: [],
			activePast: [...target.parentNode.childNodes].filter(
				(n) => n !== target && n.classList.contains('active')
			)[0],
		};

		targetData.height = parseInt(targetData.styles.height);
		targetData.width = parseInt(targetData.styles.width);
		targetData.top = parseInt(targetData.styles.top);
		targetData.left = parseInt(targetData.styles.left);

		if (!targetData.subskills && pageData.pageWidth <= 768)
			targetData.hidden = [...target.parentNode.childNodes].filter(
				(n) => n !== target && n.offsetTop === target.offsetTop
			);

		targetData.subskills = document.querySelector(
			`.skills__blocks[data-skills=${targetData.skill}]`
		);

		if (targetData.activePast && targetData.text) {
			targetData.textPast = targetData.activePast.querySelector(
				'.skills__block-text'
			);
		}

		if (targetData.activePast && targetData.title) {
			targetData.titlePast = targetData.activePast.querySelector(
				'.skills__block-subtitle'
			);
		}

		if (targetData.subskills) {
			if (!targetData.isActive) {
				toTop(target, targetData);
			} else {
				toOrigin(target, targetData);
			}
		} else {
			if (pageData.pageWidth > 768) return;

			detail(target, targetData);
		}

		fullpage_api.reBuild();
	});

	function toTop(elem, elemData) {
		const {
				offsetTop,
				offsetLeft,
				other,
				subskills,
				height,
				width,
				text,
				title,
			} = elemData,
			{ pageWidth, mainWidth, endLeft } = pageData;

		if (pageWidth > 1200) {
			animate({
				duration: 500,
				timing: easeInOut,
				draw: (progress) => {
					elem.style.left = -offsetLeft * progress + 'px';
				},
			});
		} else {
			animate({
				duration: 500,
				timing: easeInOut,
				draw: (progress) => {
					elem.style.left = (endLeft - offsetLeft) * progress + 'px';
				},
			});
			if (text) {
				animate({
					duration: 500,
					timing: easeInOut,
					draw: (progress) => {
						elem.style.height = height + (mainWidth - height) * progress + 'px';
						elem.style.width = width + (mainWidth - width) * progress + 'px';
					},
				});
			}
		}

		animate({
			duration: 500,
			timing: easeInOut,
			draw: (progress) => {
				elem.style.top = -offsetTop * progress + 'px';
			},
			onStart: () => {
				pageData.ready = false;

				main.style.position = 'absolute';
				elem.classList.add('active');
				other.forEach((block) => {
					block.classList.add('animate__zoomOut');
					block.classList.remove('animate__zoomIn');
				});
				subskills.style = '';
				subskills.classList.add('animate__fadeInUp');
				subskills.classList.remove('animate__fadeOutDown');
				subskills.childNodes.forEach((block) => {
					if (block.classList.contains('skills__block')) {
						block.style = '';
						block.querySelector('.skills__block-text').style = '';
						block.querySelector('.skills__block-subtitle').style = '';
						block.classList.remove('active', 'animate__zoomOut');
					}
				});
				if (text) {
					text.style.display = 'block';
					text.style.animationDelay = '250ms';
					text.classList.add('animate__animated', 'animate__fadeInUp');
					text.classList.remove('animate__fadeOutDown', 'animate__faster');
				}
				if (title) {
					title.style.display = 'block';
					title.style.animationDelay = '250ms';
					title.classList.add('animate__animated', 'animate__fadeInUp');
					title.classList.remove('animate__fadeOutDown', 'animate__faster');
				}
			},
			onEnd: function () {
				pageData.ready = true;
			},
		});
	}

	function toOrigin(elem, elemData) {
		const { fr } = pageData,
			{
				left,
				top,
				other,
				subskills,
				text,
				title,
				activePast,
				titlePast,
				textPast,
			} = elemData;

		if (text) {
			animate({
				duration: 500,
				timing: easeInOut,
				draw: (progress) => {
					elem.style.height = 270 - (270 - fr) * progress + 'px';
					elem.style.width = 270 - (270 - fr) * progress + 'px';
				},
			});
		}

		animate({
			duration: 500,
			timing: easeInOut,
			draw: (progress) => {
				elem.style.top = top * (1 - progress) + 'px';
				elem.style.left = left * (1 - progress) + 'px';
			},

			onStart: () => {
				pageData.ready = false;
				main.style = '';
				other.forEach((block) => {
					block.classList.add('animate__zoomIn');
					block.classList.remove('animate__zoomOut');
				});
				if (text) {
					text.style = '';
					text.classList.remove('animate__fadeInUp');
					text.classList.add('animate__fadeOutDown', 'animate__faster');
				}
				if (title) {
					title.style = '';
					title.classList.remove('animate__fadeInUp');
					title.classList.add('animate__fadeOutDown', 'animate__faster');
				}
				subskills.style.position = 'absolute';
				subskills.classList.add('animate__fadeOutDown');
				subskills.classList.remove('animate__fadeInUp');

				if (activePast) {
					activePast.style = '';
					titlePast.style = '';
					textPast.style = '';
				}
			},
			onEnd: function () {
				elem.classList.remove('active');
				subskills.style.display = 'none';
				pageData.ready = true;
			},
		});
	}

	function detail(elem, elemData) {
		const { pageWidth, mainWidth } = pageData;

		if (pageWidth > 768) return;

		const { endLeft, fr } = pageData,
			{
				offsetLeft,
				hidden,
				isActive,
				text,
				title,
				activePast,
				textPast,
				titlePast,
			} = elemData;

		const left = activePast
				? parseInt(activePast.style.left)
				: parseInt(elem.style.left),
			hiddenPast = activePast
				? [...activePast.parentNode.childNodes].filter(
						(n) => n !== activePast && n.offsetTop === activePast.offsetTop
				  )
				: null;

		if (isActive) {
			animate({
				duration: 500,
				timing: easeInOut,
				draw: (progress) => {
					elem.style.height = mainWidth - (mainWidth - fr) * progress + 'px';
					elem.style.width = mainWidth - (mainWidth - fr) * progress + 'px';
					elem.style.left = left * (1 - progress) + 'px';
				},
				onStart: () => {
					text.style.animationDelay = '0s';
					text.classList.remove('animate__fadeInUp');
					text.classList.add('animate__fadeOutDown', 'animate__faster');
					if (title) {
						title.style.animationDelay = '0s';
						title.classList.remove('animate__fadeInUp');
						title.classList.add('animate__fadeOutDown', 'animate__faster');
					}

					hidden.forEach((block) => {
						block.classList.add('animate__zoomIn');
						block.classList.remove('animate__zoomOut');
					});
				},
				onEnd: function () {
					elem.classList.remove('active');
				},
			});
		} else {
			animate({
				duration: 500,
				timing: easeInOut,
				draw: (progress) => {
					elem.style.height = fr + (mainWidth - fr) * progress + 'px';
					elem.style.width = fr + (mainWidth - fr) * progress + 'px';
					elem.style.left = -offsetLeft * progress + endLeft * progress + 'px';
				},
				onStart: () => {
					elem.classList.add('active');

					text.style.display = 'block';
					text.style.animationDelay = '250ms';
					text.classList.add('animate__animated', 'animate__fadeInUp');
					text.classList.remove('animate__fadeOutDown', 'animate__faster');
					if (title) {
						title.style.display = 'block';
						title.style.animationDelay = '250ms';
						title.classList.add('animate__animated', 'animate__fadeInUp');
						title.classList.remove('animate__fadeOutDown', 'animate__faster');
					}

					hidden.forEach((block) => {
						block.classList.add('animate__animated', 'animate__zoomOut');
						block.classList.remove('animate__zoomIn');
					});
				},
			});
			if (activePast) {
				animate({
					duration: 500,
					timing: easeInOut,
					draw: (progress) => {
						activePast.style.height =
							mainWidth - (mainWidth - fr) * progress + 'px';
						activePast.style.width =
							mainWidth - (mainWidth - fr) * progress + 'px';
						activePast.style.left = -left * (progress - 1) + 'px';
					},
					onStart: () => {
						hiddenPast.forEach((block) => {
							block.classList.add('animate__zoomIn');
							block.classList.remove('animate__zoomOut');
						});

						textPast.style.animationDelay = '0s';
						textPast.classList.remove('animate__fadeInUp');
						textPast.classList.add('animate__fadeOutDown', 'animate__faster');
						if (titlePast) {
							titlePast.style.animationDelay = '0s';
							titlePast.classList.remove('animate__fadeInUp');
							titlePast.classList.add(
								'animate__fadeOutDown',
								'animate__faster'
							);
						}

						pageData.ready = false;
					},
					onEnd: () => {
						activePast.classList.remove('active');
						pageData.ready = true;
					},
				});
			}
		}
	}
}

export default skills;
