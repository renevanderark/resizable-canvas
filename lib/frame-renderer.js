"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (ctx, can) {
	var scale = void 0;
	var clearRequested = false;

	return {
		onResize: function onResize(s) {
			scale = s;
		},
		clear: function clear() {
			clearRequested = true;
		},
		render: function render(drawables) {
			if (clearRequested) {
				ctx.clearRect(0, 0, can.width, can.height);
				clearRequested = false;
			} else {
				drawables.filter(function (d) {
					return d.updated();
				}).forEach(function (d) {
					return d.clear(ctx, scale);
				});
			}
			drawables.filter(function (d) {
				return d.updated();
			}).forEach(function (d) {
				return d.draw(ctx, scale);
			});
		}
	};
};