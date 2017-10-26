function Cell(i, j) {
	this.bomb = true;
	this.state = "hidden"; // hidden, flagged, revealed
	this.i = i;
	this.j = j;
	this.x = i * cellWidth;
	this.y = j * cellWidth;
	this.neighborCount = 0;

	if (random(1) < bombRatio) {
		this.bomb = true;
		cellsWithBomb.push(this);
	} else {
		this.bomb = false;
		cellsToClear.push(this);
	}
}
Cell.prototype.show = function() {
	stroke(0);
	noFill();
	rect(this.x, this.y, cellWidth, cellWidth);
	if (this.state == "flagged") {
		fill(0);
		textAlign(LEFT);
		textSize(12);
		text("?", this.x + cellWidth * 0.3, this.y + cellWidth * 0.8);
	} else if (this.state == "revealed") {
		if (this.bomb) {
			fill(255,0,0);
			stroke(255,0,0);
			//line(this.x, this.y, this.x + cellWidth, this.y + cellWidth);
			//line(this.x + cellWidth, this.y, this.x, this.y + cellWidth);
			ellipse(this.x + cellWidth * 0.5, this.y  + cellWidth * 0.5, cellWidth * 0.5);
		} else {
			fill(200);
			rect(this.x, this.y, cellWidth, cellWidth);
			if (this.neighborCount > 0) {
				fill(0);
				textAlign(LEFT);
				textSize(12);
				text(this.neighborCount, this.x + cellWidth * 0.3, this.y + cellWidth * 0.8);
			} else {
				for (var xoff = -1; xoff <= 1; xoff++) {
					for (var yoff = -1; yoff <= 1; yoff++) {
						var i = this.i + xoff;
						var j = this.j + yoff;
						if (i > -1 && i < cols && j > -1 && j < rows) {
							if (grid[i][j].state != "revealed") {
								grid[i][j].reveal();
							}
						}
					}
				}
			}
		}
	}
}
Cell.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + cellWidth && y > this.y && y < this.y + cellWidth);
}
Cell.prototype.reveal = function() {
	this.state = "revealed";
	if (!this.bomb) {
		removeFromArray(cellsToClear, this);
		//console.log("Remaining cells to clear: " + (cellsToClear.length + 1));
		if (cellsToClear.length == 0) {
			gameState = "Won";
		}
	}
}
Cell.prototype.flag = function() {
	this.state = "flagged";
}
Cell.prototype.countNeighbors = function() {
	if (this.bomb) {
		return -1;
	}
	var total = 0;
	for (var xoff = -1; xoff <= 1; xoff++) {
		for (var yoff = -1; yoff <= 1; yoff++) {
			var i = this.i + xoff;
			var j = this.j + yoff;
			if (i > -1 && i < cols && j > -1 && j < rows) {
				var neighbor = grid[i][j];
				if (neighbor.bomb) {
					total++;
				}
			}
		}
	}
	this.neighborCount = total;
}