const gameBoard = require("./gameBoard.js");

class Player {
  constructor(name, human) {
    this.human = human;
    this.name = name;
    this.board = new gameBoard();
    this.ships = [];
  }
}
module.exports = Player;
