const gameBoard = require(`./gameBoard`);
const Ship = require(`./ship`);
let gb = new gameBoard();

test("Cannot exceed board limt", () => {
  expect(() => {
    gb.placeShip([8, 0], new Ship(5, "h"));
  }).toThrow(`Cannot exceed board limits`);
  expect(() => {
    gb.placeShip([0, 8], new Ship(5, "v"));
  }).toThrow(`Cannot exceed board limits`);
});

test("cannot target negative coordinates", () => {
  expect(() => {
    gb.receiveAttack([-2, 0]);
  }).toThrow(`cannot target negative coordinates`);
});

test("ship is placed on board exists only in one spot", () => {
  gb.placeShip([0, 0], new Ship(3, "h"));
  expect(gb.board[0][0].ship).not.toBeUndefined();
  expect(gb.board[0][9].ship).toBeNull();

  gb.placeShip([0, 5], new Ship(3, "v"));
  expect(gb.board[0][5].ship).not.toBeNull();
  expect(gb.board[1][5].ship).not.toBeNull();
  expect(gb.board[2][5].ship).not.toBeNull();
  expect(gb.board[9][5].ship).toBeNull();

  expect(() => {
    gb.placeShip([0, 0], new Ship(1));
  }).toThrow(`Ships cannot overlap`);
});
