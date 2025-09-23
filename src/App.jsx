import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* react  components work isolated way */}
      <Player name="Player 1" symbol="X" />
      <Player name="Player 2" symbol="O" />

    
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
