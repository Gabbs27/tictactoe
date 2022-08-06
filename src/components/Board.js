import React from "react";
import Square from "./Square";


//constructor for the Board component
const Board = ({
    board,
    isXnext,
    winner,
    gameOver,
    handleSquareClick,
    handleReset
  }) => (
    <div className="container">
       
      {
        (gameOver && !winner) ? "Game Over" :
        winner ? "Winner: " + winner : "Next Player: " + (isXnext ? "X" : "O")
      }
      <button className="button" onClick={handleReset}> Reset </button>
      <div className="board">
        {board.map((playerMark, idx) => (
          <Square
            key={idx}
            squareId={idx}
            playerMark={playerMark}
            handleSquareClick={handleSquareClick}
          />
        ))}
      </div>
    </div>
  );

  export default Board;