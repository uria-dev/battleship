import gameBoard from "./gameBoard.js";
import Ship from "./ship.js";
import "./style.css";

const Player = require("./player.js");
const initialHTML = `
  <main>
    <div class="game-container">
      <form id="player-form">
        <div class="player-input">
          <label for="player1-name">Player 1 Name:</label>
          <input type="text" id="player1-name" name="player1-name" required>
        </div>
        <div class="player-input">
          <label for="player2-name">Player 2 Name:</label>
          <input type="text" id="player2-name" name="player2-name">
          <div class="toggle-container">
            <label for="toggle-computer">Play against Computer:</label>
            <input type="checkbox" id="toggle-computer" name="toggle-computer">
            </select>
          </div>
        </div>
        <button id="start-game" action="submit">Start Game</button>
      </form>
    </div>
  </main>`;

const body = document.querySelector("body");
body.innerHTML = initialHTML;

const startGameButton = document.querySelector("#start-game");
const startGameForm = document.querySelector("#player-form");
const player1NameInput = document.querySelector("#player1-name");
const player2NameInput = document.querySelector("#player2-name");

const toggleComputerInput = document.querySelector("#toggle-computer");

startGameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toggleComputer = toggleComputerInput.checked;
  const player1Name = player1NameInput.value;
  if (player2NameInput.value === "") {
    player2NameInput.value = "Ackbar!";
  }
  const player2Name = toggleComputer ? "🤖" : player2NameInput.value;

  const gameHTML = `  <body>
    <header>
      <h1>Battleship Game</h1>
    </header>
    <main>
      <div class="game-container">
        <div class="player-board">
          <h2> Admiral ${player1Name}</h2>
          <div class="grid" id="player1-grid"></div>
        </div>
        <div class="player-board">
          <h2>Admiral ${player2Name}</h2>
          <div class="grid" id="player2-grid"></div>
        </div>
      </div>
      <div class="controls">
      </div>
    </main>
  </body>`;

  body.innerHTML = gameHTML;
  const player1Grid = document.querySelector("#player1-grid");
  const player2Grid = document.querySelector("#player2-grid");
  createCells(player1Grid);
  createCells(player2Grid);
  startGame(player1Name, player2Name, toggleComputer);
});

function startGame(player1Name, player2Name, toggleComputer) {
  const player1 = new Player(player1Name, true);
  const player2 = new Player(player2Name, !toggleComputer);
  placeShips(player1);
  placeShips(player2);
}

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

function placeShips(player) {
  let shipArray = [];
  shipArray.push(new Ship(5, "Carrier", "h"));
  shipArray.push(new Ship(4, "Battleship", "h"));
  shipArray.push(new Ship(3, "Cruiser", "h"));
  shipArray.push(new Ship(3, "Submarine", "h"));
  shipArray.push(new Ship(2, "Destroyer", "h"));
  player.ships = shipArray;
}
