class gameBoard {
  constructor(w = 10, h = 10) {
    this.width = w;
    this.height = h;
    this.board = this.build();
  }
  build(w, h) {
    let gb = [];
    for (let i = 0; i < h; i++) {
      for (let i = 0; i < w; i++) {}
    }
    return gb;
  }
  receiveAttack() {}
}
module.exports = gameBoard;
