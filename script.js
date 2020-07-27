
var pos , prev

function setup() {
	createCanvas(400 , 400).center();
	background(0)
	pos = createVector(200 , 200)
	prev = pos.copy()
}

function draw() {
	stroke(255)
	strokeWeight(2)
	line(prev.x , prev.y , pos.x , pos.y)

	var step = p5.Vector.random2D()
	
	var r = random(100)
	if (r <= 2) 
		step.setMag(random(25 , 50))
	else
		step.setMag(2)

	prev.set(pos)
	pos.add(step)
}
