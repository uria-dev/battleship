/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass Square {\n  constructor() {\n    this.hit = false;\n    this.hasShip = false;\n    this.ship = null;\n  }\n}\nclass gameBoard {\n  constructor(w = 10, h = 10) {\n    this.width = w;\n    this.height = h;\n    this.board;\n    this.build(w, h);\n    this.ships = [];\n  }\n  build(w, h) {\n    let arr = [];\n    for (let i = 0; i < w; i++) {\n      arr.push([]);\n      for (let j = 0; j < h; j++) {\n        arr[i][j] = new Square();\n      }\n    }\n\n    this.board = arr;\n  }\n  placeShip([x, y], ship = Ship) {\n    if (ship.orientation == \"v\" && y + ship.len > 10) {\n      throw \"Cannot exceed board limits\";\n    }\n    if (ship.orientation == \"h\" && x + ship.len > 10) {\n      throw \"Cannot exceed board limits\";\n    }\n    if (this.board[x][y].ship) {\n      throw `Ships cannot overlap`;\n    }\n    this.ships.push(ship);\n    for (let i = 0; i < ship.len; i++) {\n      this.board[x][y].ship = ship;\n      this.board[x][y].hasShip = true;\n      ship.orientation == \"h\" ? (y += 1) : (x += 1);\n    }\n\n    return true;\n  }\n  receiveAttack([x, y]) {\n    if (x < 0 || y < 0 || x > 10 || y > 10) {\n      throw `Illegal targeting coordinates`;\n    }\n    if (this.board[x][y].hit) {\n      return `Already hit that spot!`;\n    }\n    if (this.board[x][y].hasShip == false) {\n      this.board[x][y].hit = true;\n      return `Miss!`;\n    }\n    if (this.board[x][y].hasShip == true) {\n      this.board[x][y].hit = true;\n      this.board[x][y].ship.hit();\n      if (this.checkGameOver()) {\n        return `All ships sunk!`;\n      }\n      return true;\n    }\n  }\n  checkGameOver() {\n    for (let i = 0; i < this.ships.length; i++) {\n      if (this.ships[i].sunk == false) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n\nmodule.exports = gameBoard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZUJvYXJkLmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcz8yOGIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5jbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzU2hpcCA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gIH1cbn1cbmNsYXNzIGdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKHcgPSAxMCwgaCA9IDEwKSB7XG4gICAgdGhpcy53aWR0aCA9IHc7XG4gICAgdGhpcy5oZWlnaHQgPSBoO1xuICAgIHRoaXMuYm9hcmQ7XG4gICAgdGhpcy5idWlsZCh3LCBoKTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cbiAgYnVpbGQodywgaCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHc7IGkrKykge1xuICAgICAgYXJyLnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoOyBqKyspIHtcbiAgICAgICAgYXJyW2ldW2pdID0gbmV3IFNxdWFyZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYm9hcmQgPSBhcnI7XG4gIH1cbiAgcGxhY2VTaGlwKFt4LCB5XSwgc2hpcCA9IFNoaXApIHtcbiAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PSBcInZcIiAmJiB5ICsgc2hpcC5sZW4gPiAxMCkge1xuICAgICAgdGhyb3cgXCJDYW5ub3QgZXhjZWVkIGJvYXJkIGxpbWl0c1wiO1xuICAgIH1cbiAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PSBcImhcIiAmJiB4ICsgc2hpcC5sZW4gPiAxMCkge1xuICAgICAgdGhyb3cgXCJDYW5ub3QgZXhjZWVkIGJvYXJkIGxpbWl0c1wiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwKSB7XG4gICAgICB0aHJvdyBgU2hpcHMgY2Fubm90IG92ZXJsYXBgO1xuICAgIH1cbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbjsgaSsrKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAgPSBzaGlwO1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgIHNoaXAub3JpZW50YXRpb24gPT0gXCJoXCIgPyAoeSArPSAxKSA6ICh4ICs9IDEpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XG4gICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPiAxMCB8fCB5ID4gMTApIHtcbiAgICAgIHRocm93IGBJbGxlZ2FsIHRhcmdldGluZyBjb29yZGluYXRlc2A7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldLmhpdCkge1xuICAgICAgcmV0dXJuIGBBbHJlYWR5IGhpdCB0aGF0IHNwb3QhYDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uaGFzU2hpcCA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGBNaXNzIWA7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldLmhhc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5zaGlwLmhpdCgpO1xuICAgICAgaWYgKHRoaXMuY2hlY2tHYW1lT3ZlcigpKSB7XG4gICAgICAgIHJldHVybiBgQWxsIHNoaXBzIHN1bmshYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBjaGVja0dhbWVPdmVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc2hpcHNbaV0uc3VuayA9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZUJvYXJkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/gameBoard.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconst player1 = new Player(true, \"Hello\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLG9DQUFhO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllci5qc1wiKTtcbmNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKHRydWUsIFwiSGVsbG9cIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameBoard = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n\nclass Player {\n  constructor(human, name) {\n    this.human = human;\n    this.name = name;\n    this.board = new gameBoard();\n  }\n}\nmodule.exports = Player;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixtQkFBTyxDQUFDLDBDQUFnQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2FtZUJvYXJkID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkLmpzXCIpO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihodW1hbiwgbmFtZSkge1xuICAgIHRoaXMuaHVtYW4gPSBodW1hbjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgZ2FtZUJvYXJkKCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n  constructor(len = Number, orientation) {\n    this.len = len;\n    this.hits = 0;\n    this.sunk = false;\n    this.orientation = orientation;\n    if (this.orientation !== \"v\" && this.orientation !== \"h\") {\n      this.orientation = \"v\";\n    }\n  }\n  hit() {\n    if (this.sunk == false) {\n      this.hits = this.hits + 1;\n    }\n    return this.isSunk();\n  }\n\n  isSunk() {\n    if (this.len == this.hits) {\n      this.sunk = true;\n    }\n    return this.sunk;\n  }\n}\n\nmodule.exports = Ship;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcz9kMDM3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW4gPSBOdW1iZXIsIG9yaWVudGF0aW9uKSB7XG4gICAgdGhpcy5sZW4gPSBsZW47XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gIT09IFwidlwiICYmIHRoaXMub3JpZW50YXRpb24gIT09IFwiaFwiKSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJ2XCI7XG4gICAgfVxuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5zdW5rID09IGZhbHNlKSB7XG4gICAgICB0aGlzLmhpdHMgPSB0aGlzLmhpdHMgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5sZW4gPT0gdGhpcy5oaXRzKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ship.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;