const gameBoard = require(`./gameBoard`);
const Ship = require(`./ship`);
let gb = new gameBoard();

test("Cannot exceed board limt", () => {
  expect(() => {
    let hship = new Ship(5, "h");
    gb.placeShip([8, 0], hship);
  }).toThrow(`Cannot exceed board limits`);
  expect(() => {
    let vship = new Ship(5, "v");
    gb.placeShip([0, 8], vship);
  }).toThrow(`Cannot exceed board limits`);
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

test("Missing", () => {
  expect(gb.receiveAttack([9, 9])).toBe(`Miss!`);
});
test("Hitting a ship in a spot that hasn't been hit yet", () => {
  gb.receiveAttack([0, 0]);
  expect(gb.board[0][0].ship.hits).toBe(1);
  gb.receiveAttack([0, 1]);
  expect(gb.board[0][1].ship.hits).toBe(2);
});
test("Sinking a ship", () => {
  expect(gb.receiveAttack([0, 2])).toBe(true);
});
test("Hitting a spot that was already hit", () => {
  expect(gb.receiveAttack([0, 1])).toBe(`Already hit that spot!`);
  expect(gb.receiveAttack([9, 9])).toBe(`Already hit that spot!`);
});
test("cannot target illegal coordinates", () => {
  expect(() => {
    gb.receiveAttack([-10, 1]);
  }).toThrow(`Illegal targeting coordinates`);
  expect(() => {
    gb.receiveAttack([11, 1]);
  }).toThrow(`Illegal targeting coordinates`);
  expect(() => {
    gb.receiveAttack([7, -5]);
  }).toThrow(`Illegal targeting coordinates`);
  expect(() => {
    gb.receiveAttack([7, -12]);
  }).toThrow(`Illegal targeting coordinates`);
});

test("check for a game over", () => {
  expect(gb.receiveAttack([0, 5])).not.toBe(`All ships sunk!`);
  expect(gb.receiveAttack([1, 5])).not.toBe(`All ships sunk!`);
  expect(gb.receiveAttack([2, 5])).toBe(`All ships sunk!`);
});
