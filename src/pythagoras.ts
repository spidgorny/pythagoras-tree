// import * as Two from 'twojs-ts';
import * as Two from 'two.js';

console.dir(Two);

const two = new Two.default({
	fullscreen: true,
	autostart: true
}).appendTo(document.body);

var rect = two.makeRectangle(two.width / 2, two.height / 2, 250, 250);
two.bind('update', function () {
	rect.rotation += 0.001;
});

