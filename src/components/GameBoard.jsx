const initialGameBoard = [
  [null, "O", "X"],
  [null, "X", null],
  [null, null, null],
];
export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  // we update the state in immutable way
//   const test =[[1,2,3],[4,5,6],[7,8,9]];

//  const myArray= [...test.map(x=>[...x.map(y=>y*2)])]
// console.log(myArray[0][0])
// console.log(initialGameBoard)


  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleCellClick(rowIndex, colIndex) {
  //   setGameBoard((prev) => {
  //     const updatedGameBoard = [
  //       ...prev.map(row => 
  //         [...row]
  //       ),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
             
                <button onClick={onSelectSquare}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
      GAME BOARD
    </ol>
  );
}
