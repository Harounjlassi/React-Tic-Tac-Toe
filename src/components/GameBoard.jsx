import Player from "./Player";


export default function GameBoard({ onSelectSquare, board }) {


  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleCellClick(rowIndex, cellIndex) {

  //if the state is object or array we create a copy of it and then update the copy
  //we update in an immutable way

  // setGameBoard((prevGameBoard) => {
  //   const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
  //   updatedGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
  //   return updatedGameBoard;
  // });
  // onSelectSquare();

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="cell">
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null} >{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
