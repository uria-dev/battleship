class gameBoard {
  constructor(w = 10, h = 10) {
    this.width = w;
    this.height = h;
    this.board;
    this.build(w, h);
  }
  build(w, h) {
    let gb = Array.from({ length: h }, () => new Array(w).fill(0));
    gb[5][0] = 1;
    gb[5][1] = 1;
    this.board = gb;
    console.log(this.board);
  }
  receiveAttack(x, y) {
    if (this.board[x][y] == 0) {
      return false;
    }
  }
}

module.exports = gameBoard;
