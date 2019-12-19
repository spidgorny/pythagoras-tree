import {Path, view, paper} from 'paper';

window.onload = function() {
	// Get a reference to the canvas object
	var canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
	console.log(canvas);
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
// Create a circle shaped path with its center at the center
// of the view and a radius of 30:
	var path = new Path.Circle({
		center: view.center,
		radius: 30,
		strokeColor: 'black'
	});

	view.draw();
};

function onResize(event: any) {
	// Whenever the window is resized, recenter the path:
	//path.position = view.center;
}

