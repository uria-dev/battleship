class Ship {
  constructor(len = Number, orientation) {
    this.len = len;
    this.hits = 0;
    this.sunk = false;
    this.orientation = orientation;
    if (this.orientation !== "y" && this.orientation !== "x") {
      this.orientation = "x";
    }
  }
  hit() {
    if (this.sunk == false) {
      this.hits = this.hits + 1;
    }
    return this.isSunk();
  }

  isSunk() {
    if (this.len == this.hits) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

module.exports = Ship;
