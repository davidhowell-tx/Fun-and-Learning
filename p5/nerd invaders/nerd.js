function Nerd(x, y) {
	this.x = x;
	this.y = y;
	this.xdir = 2;
	this.deathStage = 0;
	this.dying = false;
}
Nerd.prototype.show = function() {
	fill(255, 0, 200);
	if (this.deathStage === 0) {
		imageMode(CENTER);
		image(Hailey, this.x, this.y, 80, 80);
		//ellipse(this.x, this.y, nerdDiameter, nerdDiameter);
	} else {
		image(Fire, this.x, this.y, 80, 80);
	}
}
Nerd.prototype.kill = function() {
	if (this.deathStage < 3) {
		this.deathStage++;
	}
}
Nerd.prototype.move = function() {
	if (this.dying === false) {
		this.x = this.x + this.xdir;
	}
}
Nerd.prototype.shiftDown = function() {
	this.y += nerdYDrop;
	this.xdir *= -1;
}
Nerd.prototype.increaseSpeed = function(increaseAmt) {
	if (this.xdir > 0) {
		this.xdir = this.xdir + increaseAmt;
	} else if (this.xdir < 0) {
		this.xdir = this.xdir - increaseAmt;
	}
}