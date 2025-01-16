import React, { useState } from "react";
import Board from "./components/Board";
import RestartButton from "./components/RestartButton";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleSquareClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Zwycięzca: ${winner}`
    : board.every((square) => square !== null)
    ? "Remis!"
    : `Następny gracz: ${isXNext ? "X" : "O"}`;

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="app">
      <h1>Kółko i Krzyżyk</h1>
      <p>{status}</p>
      <Board board={board} onSquareClick={handleSquareClick} />
      {winner || board.every((square) => square !== null) ? (
        <RestartButton onRestart={handleRestart} />
      ) : null}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
