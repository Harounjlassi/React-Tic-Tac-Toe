import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
function App() {
  const [gameTurns, setGameTurns] = useState([]); //gameTurns is array of objects
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare(rowIndex, colIndex) {
    //turnery expression
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setGameTurns((prev) => {
      let currentPlayer = "X" ;
      if (prev.length>0&& prev[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [ { square: { row: rowIndex, col: colIndex }, player: activePlayer,...prev }];
      return updatedTurns;

    });

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* react  components work isolated way */}
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log/>
    </main>
  );
}

export default App;
