"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (vWidth, vHeight, listeners) {
	var aspectRatio = vHeight / vWidth;

	function invokeListeners(width, height, scale) {
		listeners.forEach(function (listener) {
			return listener(scale, width, height);
		});
	}

	function onResize() {
		var _window = window,
		    innerWidth = _window.innerWidth,
		    innerHeight = _window.innerHeight;

		if (innerWidth * aspectRatio > innerHeight) {
			invokeListeners(parseInt(Math.floor(innerHeight / aspectRatio), 10), innerHeight, innerHeight / aspectRatio / vWidth);
		} else {
			invokeListeners(innerWidth, parseInt(Math.floor(innerWidth * aspectRatio), 10), innerWidth / vWidth);
		}
	}

	onResize();
	window.addEventListener("resize", onResize);
};