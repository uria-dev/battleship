class Ship {
  constructor(len = Number, orientation) {
    this.len = len;
    this.hits = 0;
    this.sunk = false;
    this.orientation = orientation;
    if (this.orientation !== "v" && this.orientation !== "h") {
      this.orientation = "h";
    }
    this.name = (() => {
      switch (len) {
        case 2:
          return "Patrol Boat";
        case 3:
          return "Submarine";
        case 4:
          return "Battleship";
        case 5:
          return "Carrier";
      }
    })();
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
