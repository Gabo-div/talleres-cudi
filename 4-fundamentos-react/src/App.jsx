import { useEffect, useState } from "react";
import "./App.css";

const TURNS = {
  X: "X",
  O: "O",
};

const WINNER_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));

  const changeSquare = (index) => {
    if (board[index]) {
      return;
    }

    if (winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    if (turn == TURNS.X) {
      setTurn(TURNS.O);
    } else {
      setTurn(TURNS.X);
    }
  };

  const reset = () => {
    setTurn(TURNS.X);
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  useEffect(() => {
    for (const combination of WINNER_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[b] === board[a] && board[c] === board[a]) {
        setWinner(board[a]);
      }
    }
  }, [board]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h3>{winner ? `Ganó: ${winner}` : null}</h3>
      <div className="board">
        {board.map((simbolo, i) => (
          <Square
            key={i}
            index={i}
            simbolo={simbolo}
            changeSquare={changeSquare}
          />
        ))}
      </div>
      <h2>Es turno de: {turn}</h2>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

function Square({ index, simbolo, changeSquare }) {
  return (
    <div className="square" onClick={() => changeSquare(index)}>
      {simbolo}
    </div>
  );
}

export default App;
