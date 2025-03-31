const gameBoard = require("./gameBoard.js");

class Player {
  constructor(human, name) {
    this.human = human;
    this.name = name;
    this.board = new gameBoard();
  }
}
module.exports = Player;
