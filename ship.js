class Ship {
  constructor(len = Number) {
    this.len = len;
    this.hits = 0;
    this.sunk = false;
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
  }
}

module.exports = Ship;
