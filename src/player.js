import Board from `./gameBoard`;

class Player {
  constructor(human = Boolean) {
    this.human = human;
    this.board = new Board();
  }
}
export default Player