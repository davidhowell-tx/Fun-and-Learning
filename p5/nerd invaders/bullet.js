function Bullet(x, y) {
	this.x = x;
	this.y = y;
}
Bullet.prototype.show = function() {
	fill(50, 0, 200);
	ellipse(this.x, this.y, bulletDiameter, bulletDiameter);
}
Bullet.prototype.move = function() {
	this.y = this.y - bulletSpeed;
}
Bullet.prototype.hits = function(nerd) {
	var d = dist(this.x, this.y, nerd.x, nerd.y);
	if (d < nerdDiameter/2 + bulletDiameter/2) {
		return true;
	} else {
		return false;
	}
}