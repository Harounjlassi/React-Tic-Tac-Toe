// Created by Haroun Jlassi
// React Tic Tac Toe Project - 2025

import { useState } from "react";
import Player from "./components/Player";
import Log from "./components/Log";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";
const PLAYERS={
    X: "Player 1",
    O: "Player 2",
  }
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
//helper function
function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function deriveGmaeBoard(gameTurns) {
   //We need to crete a copy:deep copy
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  //deriving state
  //gameBoard is computed value that is devived from a state
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function deriveWinner(gameBoard, players) {
  let winner;

  for (const combinatios of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combinatios[0].row][combinatios[0].column];
    const secondSquareSymbol =
      gameBoard[combinatios[1].row][combinatios[1].column];
    const thirdSquareSymbol =
      gameBoard[combinatios[2].row][combinatios[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
function App() {
  const [players, sePlayers] = useState(PLAYERS);
  //const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  //const [hasWinner, setHasWinner] = useState(false);

  let activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = deriveGmaeBoard(gameTurns);
 
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) =>
    //   currentActivePlayer === "X" ? "O" : "X"
    // );
    setGameTurns((prevTurns) => {
      //we update the state in immutable way and we are not merging the states
      const currentPlayer = derivedActivePlayer(prevTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName) {
    sePlayers((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
       <footer style={{ marginTop: "20px", textAlign: "center", fontSize: "14px" }}>
      © {new Date().getFullYear()} Haroun Jlassi
    </footer>
    </main>
    
  );
}

export default App;
