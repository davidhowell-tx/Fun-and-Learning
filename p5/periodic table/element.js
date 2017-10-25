function Element(name, symbol, atomicNumber, atomicWeight, category, tableYLocation, tableXLocation) {
  this.name = name;
  this.symbol = symbol;
  this.atomicNumber = atomicNumber;
  this.atomicWeight = atomicWeight;
  this.category = category;
  this.tableXLocation = tableXLocation;
  this.tableYLocation = tableYLocation
  this.x = ((tableXLocation - 1) * tableCellWidth) + leftPadding;
  this.y = ((tableYLocation - 1) * tableCellHeight) + topPadding;
}
Element.prototype.show = function() {
  switch(this.category) {
    case "actinide":
      fill(238,187,221);
      break;
    case "alkali metal":
      fill(255,204,51);
      break;
    case "alkaline earth metal":
      fill(255,255,68);
      break;
    case "diatomic nonmetal":
      fill(34, 255, 34);
      break;
    case "polyatomic nonmetal":
      fill(34, 255, 34);
      break;
    case "lanthanide":
      fill(255, 187, 153);
      break;
    case "noble gas":
      fill(119, 204, 255);
      break;
    case "metalloid":
      fill(119, 221, 136);
      break;
    case "post-transition metal":
      fill(153, 221, 204);
      break;
    case "transition metal":
      fill(221, 187, 187);
      break;
    default:
      fill(175);
  }
  rect(this.x, this.y, tableCellWidth, tableCellHeight);
  fill(0);
  // Show Symbol
  textAlign(CENTER, CENTER);
  textSize(atomSymbolSize);
  text(this.symbol, this.x, this.y, tableCellWidth, tableCellHeight);
  // Show Atomic Number
  textAlign(LEFT, TOP);
  textSize(atomicNumberSize);
  text(this.atomicNumber, this.x + 2, this.y + (tableCellHeight * .03), tableCellWidth, tableCellHeight / 3);
  // Show Atom Name
  textSize(atomNameSize);
  text(this.name, this.x + 2, this.y + (tableCellHeight * .7), tableCellWidth, tableCellHeight / 3);
  // Show Atomic Weight
  textSize(atomicWeightSize);
  text(this.atomicWeight, this.x + 2, this.y + (tableCellHeight * .85), tableCellWidth, tableCellHeight / 3);
}