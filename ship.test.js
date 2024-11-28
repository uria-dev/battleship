const Ship = require("./ship");
const testShip = new Ship(5);
testShip.hits = 3;

it("test whether a ship is sunk with 4 hits", () => {
  expect(testShip.hit()).toBe(false);
});
it("a sunken ship returns true", () => {
  expect(testShip.hit()).toBe(true);
});
