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
  let continuity = 0;
  let anchor = 0;

  let top =  x < 5 ? 0 : x - 4;
  let bottom =  x > height - 5 ? height - 1 : x + 4;
  let left =  y < 5 ? 0 : y - 4;
  let right =  y > width - 5 ? width - 1 : y + 4;
  
  /** check line: top left to bottom right */
  let topleft = x - top < y - left ? x - top : y- left;
  let bottomright = bottom - x < right - y ? bottom - x : right - y;
  anchor = -topleft;
  for (let i = -topleft; i <= bottomright; i++) {
    if (board[x + i][y + i] === currentGamer) 
      continuity++;
    else {
      continuity = 0;
      anchor = i + 1;
    }

    if (continuity === 5) {
      return [{x: x + anchor, y: y + anchor}, 
        {x: x + anchor + 1, y: y + anchor + 1},
        {x: x + anchor + 2, y: y + anchor + 2},
        {x: x + anchor + 3, y: y + anchor + 3},
        {x: x + anchor + 4, y: y + anchor + 4}
      ];
    }
  }
  /** check line: top right to bottom left */
  let topright = x - top < right - y ? x - top : right - y;
  let bottomleft = bottom - x < y - left ? bottom - x : y - left;
  anchor = -topright;
  for (let i = -topright; i <= bottomleft; i++) {
    if (board[x + i][y - i] === currentGamer) 
      continuity++;
    else {
      continuity = 0;
      anchor = i + 1;
    }

    if (continuity === 5) {
      return [{x: x + anchor, y: y - anchor}, 
        {x: x + anchor + 1, y: y - anchor + 1},
        {x: x + anchor + 2, y: y - anchor + 2},
        {x: x + anchor + 3, y: y - anchor + 3},
        {x: x + anchor + 4, y: y - anchor + 4}
      ];
    }
  }
  return [];
}

