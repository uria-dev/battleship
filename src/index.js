import "./style.css";

const Player = require("./player.js");
const player1 = new Player(true, "Hello");
const bodyHTML = `  <body>
    <header>
      <h1>Battleship Game</h1>
    </header>
    <main>
      <div class="game-container">
        <div class="player-board">
          <h2>Player 1</h2>
          <div class="grid" id="player1-grid"></div>
        </div>
        <div class="player-board">
          <h2>Player 2 / Computer</h2>
          <div class="grid" id="player2-grid"></div>
        </div>
      </div>
      <div class="controls">
        <button id="start-game">Start Game</button>
        <button id="reset-game">Reset Game</button>
      </div>
    </main>
  </body>`;
const body = document.querySelector("body");
body.innerHTML = bodyHTML;
const player1Grid = document.querySelector("#player1-grid");
const player2Grid = document.querySelector("#player2-grid");
const startGameButton = document.querySelector("#start-game");
const resetGameButton = document.querySelector("#reset-game");

function createCells(grid) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-x", i);
      cell.setAttribute("data-y", j);
      grid.appendChild(cell);
    }
  }
}

createCells(player1Grid);
createCells(player2Grid);
