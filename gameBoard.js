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
    let arr = [];
    for (let i = 0; i < w; i++) {
      arr.push([]);
      for (let j = 0; j < h; j++) {
        arr[i][j] = new Square();
      }
    }

    this.board = arr;
  }
  placeShip([x, y], ship) {
    if (ship.orientation == "v" && y + ship.len > 10) {
      throw "Cannot exceed board limits";
    }
    if (ship.orientation == "h" && x + ship.len > 10) {
      throw "Cannot exceed board limits";
    }
    if (this.board[x][y].ship) {
      throw `Ships cannot overlap`;
    }

    for (let i = 0; i < ship.len; i++) {
      this.board[x][y].ship = ship;
      this.board[x][y].hasShip = true;
      ship.orientation == "h" ? (y += 1) : (x += 1);
    }
    return true;
  }
  receiveAttack([x, y]) {
    if (x < 0 || y < 0) {
      throw `cannot target negative coordinates`;
    }
    if (this.board[x][y].hasShip == false) {
      this.board[x][y].hit = true;
    }
  }
}

module.exports = gameBoard;
