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
