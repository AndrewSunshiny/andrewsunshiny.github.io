const handleMenu = function () {
	const menu = document.querySelector(".menu"),
		menuItem = document.querySelectorAll(".menu__item a"),
		hamburger = document.querySelector(".hamburger"),
		overlay = document.querySelector(".menu__overlay");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		hamburger.style.animationDuration = "1s";
		menu.classList.toggle("menu_active");
		handleScrolling();
	});

	overlay.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		hamburger.style.animationDuration = "1s";
		menu.classList.toggle("menu_active");
		handleScrolling();
	});

	menuItem.forEach(item => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			menu.classList.toggle("menu_active");
		});
	});

	function handleScrolling() {
		if (menu.classList.contains("menu_active")) {
			fullpage_api.setAllowScrolling(false);
			fullpage_api.setKeyboardScrolling(false);
		} else {
			fullpage_api.setAllowScrolling(true);
			fullpage_api.setKeyboardScrolling(true);
		}
	}
};

export default handleMenu;
