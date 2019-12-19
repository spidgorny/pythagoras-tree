// import * as Two from 'twojs-ts';
import {default as TwoCons} from 'two.js';
import {Two, Vector} from "twojs-ts";

const two: Two = new TwoCons({
	fullscreen: true,
	autostart: true
}).appendTo(document.body);

function rotatingBox() {
	const rect = two.makeRectangle(two.width / 2, two.height / 2, 250, 250);
	two.bind('update', function () {
		rect.rotation += 0.001;
	});
}

function pythagoras() {
	let w = 100;
	let center = new Vector(two.width / 2, two.height / 2);
	renderBox(center, w, 0, 3);
	two.update();
}

function renderBox(center: Vector, w: number, rotation: number, level?: number) {
	if (!level) {
		return;
	}
	const rect = two.makeRectangle(center.x, center.y, w, w);
	rect.rotation = rotation;

	w /= 2;

	const centerLeft = new Vector(center.x, center.y).addSelf(new Vector(-w, -w));
	renderBox(centerLeft, w, rotation + Math.PI / 4, level - 1);

	const centerRight = new Vector(center.x, center.y).addSelf(new Vector(w, -w));
	renderBox(centerRight, w, rotation - Math.PI / 4, level - 1);
}

// rotatingBox();
pythagoras();
