import React from 'react'
import Square from '../Square/Square';

import './Board.css'

const Board = props => {
  const { 
    width, 
    height, 
    board, 
    isWin,
    isDraw,
    winLine,
    handleClickBoard
  } = props;

  const boardStyle = {
    display: "grid",
    gridTemplate: `repeat(${height},1fr)/repeat(${width},1fr)`
  };

  let listSquare = [];

  for(let x = 0; x < height; x++)
    for(let y = 0; y < width; y++) 
      listSquare.push(
        <Square 
              key = {`${x}${y}`}
              value = {board[x][y]}
              x = {x}
              y = {y}
              isWin = {isWin}
              isDraw = {isDraw}
              handleClickBoard = {handleClickBoard}
              isBelongWinLine = {
                winLine.findIndex(square => square.x === x && square.y === y) !== -1
              }
            />
      )

  return (
    <div style={boardStyle}>
      {listSquare}
    </div>
  )
}

export default Board