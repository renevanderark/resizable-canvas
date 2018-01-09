"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var scale = void 0;
	var registered = [];

	return {
		onResize: function onResize(s) {
			scale = s;
		},
		add: function add(eventName, onEvent) {
			var elem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

			var fn = function fn(ev) {
				return onEvent(ev, scale);
			};

			registered.push({
				elem: elem,
				eventName: eventName,
				fn: fn
			});

			elem.addEventListener(eventName, fn);
		},
		clear: function clear() {
			registered.forEach(function (_ref) {
				var elem = _ref.elem,
				    eventName = _ref.eventName,
				    fn = _ref.fn;
				return elem.removeEventListener(eventName, fn);
			});
		}
	};
};

;