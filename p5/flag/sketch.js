function setup() {

	//create canvas
	createCanvas (windowWidth, windowHeight);

	//remove black outline around shapes
	noStroke();

	//green fill
	fill (0, 255, 0);

	//green section of Italian flag
	rect (0, 0, width/3, height);

	//red fill
	fill (255, 0, 0);

	//red section of Italian flag
	rect (2 * width/3, 0, width/3, height);

}

function draw() {
  // put drawing code here
}
