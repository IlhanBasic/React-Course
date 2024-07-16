import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";
const PLAYERS = {
  'X':'Player 1',
  'O':'Player 2'
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
function deriveWinner({gameBoard,players}){
  let winner;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secoundSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];
    if (firstSquareSymbol && firstSquareSymbol === secoundSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(arr=>[...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function App() {
  const [players,setPlayers] = useState(PLAYERS);
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const gameBoard = deriveGameBoard(gameTurns); 
  const winner= deriveWinner(gameBoard,players);
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer(() => activePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (currentPlayer.length > 0 && currentPlayer[0].player === 'X') {
        currentPlayer.player = 'O';
      }
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns]
      return updatedTurns;
    });
  }
  function handleRematch(){
    setGameTurns([]);
  }
  function handlePlayerNameChange({symbol,newName}){
    setPlayers(prevPlayers=>{
      return {
        ...prevPlayers,
        [symbol]:newName
      }
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol='X' 
          isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player initialName={PLAYERS.O} symbol='O' 
          isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
