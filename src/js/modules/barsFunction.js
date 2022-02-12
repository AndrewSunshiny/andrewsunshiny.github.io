const barsFunction = () => {
	const percentage = document.querySelectorAll(".skills__bar-percentage"),
		lines = document.querySelectorAll(".skills__bar-line");

	percentage.forEach((item, i) => {
		lines[i].style.width = item.innerHTML;
	});
};

export default barsFunction;
