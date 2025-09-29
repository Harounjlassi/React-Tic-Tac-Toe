import Player from "./Player";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
  console.log("dsddddd");
  let gameBoard = initialGameBoard;
  //deriving state
  //gameBoard is computed value that is devived from a state
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

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
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex} className="cell">
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
