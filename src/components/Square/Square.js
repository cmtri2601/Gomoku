import React from 'react'

import './Square.css'

const Square = props => {
  const {
    value, 
    x, 
    y, 
    isWin,
    isDraw,
    handleClickBoard, 
    isBelongWinLine
  } = props;
  return (
    <div
      className={isBelongWinLine ? 'square win' : 'square'}
      onClick={() => {
        if (isWin || isDraw || value)
          return;
        handleClickBoard({type:'CLICK BOARD', payload: {x, y}});
      }}
    >
      {value}
    </div>
  )
}

export default Square