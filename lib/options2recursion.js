#!/usr/bin/env node

'use strict';

module.exports = function (options, _default) {
	let r = _default;
	if (options === !!options) {
		r = options;
	}
	else if (options instanceof Object) {
		r = options.r === !!options.r ? options.r : r;
		r = options.recursion === !!options.recursion ? options.recursion : r;
		r = options.r > 0 ? options.r : r;
		r = options.recursion > 0 ? options.recursion : r;
	}
	return function (pids) {
		const l = pids.length;
		return r === false ? [] : r === true || l < r ? pids : pids.slice(0, r);
	};
};
