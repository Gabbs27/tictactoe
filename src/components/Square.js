import React from "react";


//Constructor for the Square component
const Square = ({ playerMark, squareId, handleSquareClick }) => {
    return (
      <div className="square" onClick={() => handleSquareClick(squareId)}>
        {playerMark }
      </div>
    );
  };

  export default Square;
  