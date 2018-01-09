"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (canvases) {
	for (var _len = arguments.length, listeners = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		listeners[_key - 1] = arguments[_key];
	}

	function rescaleGame(scale, width, height) {
		canvases.forEach(function (canvas) {
			canvas.style.left = "" + parseInt(Math.floor((window.innerWidth - width) / 2), 10);
			canvas.style.top = "" + parseInt(Math.floor((window.innerHeight - height) / 2), 10);
			canvas.width = width;
			canvas.height = height;
		});
	}

	return [rescaleGame].concat(listeners);
};