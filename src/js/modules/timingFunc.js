function quad(timeFraction) {
	return Math.pow(timeFraction, 2);
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
		else return (2 - timing(2 * (1 - timeFraction))) / 2;
	};
}

const easeInOut = makeEaseInOut(circ);

export { quad, circ, easeInOut };
