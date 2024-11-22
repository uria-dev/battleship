class Ship {
  constructor(len = Number) {
    this.len = len;
    this.hits = 0;
  }
  build() {}
  hit(target) {}
  isSunk() {
    if (this.len == this.hits) {
      return true;
    }
  }
}
