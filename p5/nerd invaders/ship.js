function Ship() {
	this.x = width / 2;
	this.y = height - 20;
	this.xdir = 0;
}
Ship.prototype.show = function() {
	fill(255);
	//rectMode(CENTER);
	//rect(this.x, this.y, 20, 20);
	//image(Hailey, this.x, this.y);
	triangle(this.x, this.y - shipHeight/2, this.x - shipHeight, this.y + shipHeight, this.x + shipHeight, this.y + shipHeight);
}
Ship.prototype.setDir = function(dir) {
	this.xdir = dir;
}
Ship.prototype.move = function() {
	var newLocation = this.x + (this.xdir * shipMoveSpeed);

	if (newLocation > 0 && newLocation < width) {
		this.x = newLocation;
	} else if (newLocation < 0) {
		this.x = 0;
	} else if (newLocation > width) {
		this.x = width;
	}
}