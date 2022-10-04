export const checkDraw = (board, width, height) => {
  for(let x = 0; x < height; x++)
    for(let y = 0; y < width; y++) 
      if (board[x][y] === null) 
        return false;
  return true;
}

export const checkWin = (currentGamer, board, x, y, width, height) => {
  const horizontalWinLine =  checkHorizontal(currentGamer, board, x, y, width);
  const verticalWinLine =  checkVertical(currentGamer, board, x, y, height);
  const diagonalWinLine =  checkDiagonal(currentGamer, board, x, y, width, height);

  if (horizontalWinLine.length !== 0)
    return horizontalWinLine;
  if (verticalWinLine.length !== 0)
    return verticalWinLine;
  if (diagonalWinLine.length !== 0)
    return diagonalWinLine;

  return [];
}

const checkHorizontal = (currentGamer, board, x, y, width) => {
  let leftY =  y < 5 ? 0 : y - 4;
  let rightY =  y > width - 5 ? width - 1 : y + 4;
  let continuity = 0;
  let leftYWin = leftY;

  for (let i = leftY; i <= rightY; i++) {
    if (board[x][i] === currentGamer) 
      continuity++;
    else {
      continuity = 0;
      leftYWin = i + 1;
    }

    if (continuity === 5) {
      return [{x, y: leftYWin}, 
        {x, y: leftYWin + 1},
        {x, y: leftYWin + 2},
        {x, y: leftYWin + 3},
        {x, y: leftYWin + 4}
      ];
    }
  }

  return [];
}

const checkVertical = (currentGamer, board, x, y, height) => {
  let topX =  x < 5 ? 0 : x - 4;
  let bottomX =  x > height - 5 ? height - 1 : x + 4;
  let continuity = 0;
  let topXWin = topX;

  for (let i = topX; i <= bottomX; i++) {
    if (board[i][y] === currentGamer) 
      continuity++;
    else {
      continuity = 0;
      topXWin = i + 1;
    }

    if (continuity === 5) {
      return [{x: topXWin, y}, 
        {x: topXWin + 2, y},
        {x: topXWin + 3, y},
        {x: topXWin + 1, y},
        {x: topXWin + 4, y}
      ];
    }
  }

  return [];
}

const checkDiagonal = (currentGamer, board, x, y, width, height) => {
  return [];
}

