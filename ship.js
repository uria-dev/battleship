class Ship {
  constructor(len = Number, orientation) {
    this.len = len;
    this.hits = 0;
    this.sunk = false;
    this.orientation = orientation;
    if (this.orientation !== "v" && this.orientation !== "h") {
      this.orientation = "v";
    }
  }
  hit() {
    if (this.sunk == false) {
      this.hits = this.hits + 1;
      this.isSunk();
    }
    return this.sunk;
  }

  isSunk() {
    if (this.len == this.hits) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

module.exports = Ship;
