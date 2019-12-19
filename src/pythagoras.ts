// import * as Two from 'twojs-ts';
import {default as TwoCons} from 'two.js';
import {Group, Two, Vector} from "twojs-ts";

const two: Two = new TwoCons({
	fullscreen: true,
	autostart: true,
}).appendTo(document.body);

function rotatingBox() {
	const rect = two.makeRectangle(two.width / 2, two.height / 2, 250, 250);
	two.bind('update', () => {
		console.log('update');
		rect.rotation += 0.001;
		// two.render();
	});
	two.update();
}

function pythagoras() {
	let w = 200;
	let center = new Vector(0, 0);
	const figure = renderBox(center, w, 0, 5);
	figure.translation = new Vector(two.width / 2, two.height * 0.8);
	two.bind('update', () => {
		figure.rotation += 0.001;
	});
	two.update();
}

function renderBox(center: Vector, w: number, rotation: number, level?: number): Group {
	const rect = two.makeRectangle(center.x, center.y, w, w);

	if (!level) {
		return rect;
	}

	const w4 = w * 0.4;
	const w6 = w * 0.6;

	const group1 = renderBox(center, w4,  -Math.PI * w4 / 400, level - 1);
	group1.translation = new Vector(-w/2.4, -w/1.3);
	// group1.rotation = rotation + Math.PI / 9;
	// group1.scale = 1 / level;

	// const centerRight = new Vector(center.x, center.y).addSelf();
	const group2 = renderBox(center, w6,  Math.PI * 0.06, level - 1);
	group2.translation = new Vector(w/2.4, -w / 1.1);
	// group2.rotation = -Math.PI / 100;
	// group2.scale = 1 / level;

	const group = two.makeGroup(rect, group1, group2);
	group.rotation = rotation;
	return group;
}

// rotatingBox();
pythagoras();
