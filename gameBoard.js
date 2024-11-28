const Ship = require("./ship");

class Square {
  constructor() {
    this.hit = false;
    this.hasShip = false;
    this.ship = null;
  }
}
class gameBoard {
  constructor(w = 10, h = 10) {
    this.width = w;
    this.height = h;
    this.board;
    this.build(w, h);
  }
  build(w, h) {
    let gb = Array.from({ length: h }, () => new Array(w).fill(new Square()));
    this.board = gb;
  }
  placeShip([x, y], ship) {
    if (ship.orientation == "v" && y + ship.len > 10) {
      throw "Cannot exceed board limits";
    }
    if (ship.orientation == "h" && x + ship.len > 10) {
      throw "Cannot exceed board limits";
    }
  }
  receiveAttack([x, y]) {
    if (x < 0 || y < 0) {
      throw `cannot target negative coordinates`;
    }
    if (this.board[x][y].hasShip == false) {
      return false;
    }
  }
}

module.exports = gameBoard;
