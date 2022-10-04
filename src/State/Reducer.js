import { checkDraw, checkWin } from "../GameRule/GameRule";

export const initialGamePlay = {
    isSetting: true,
    width: 5,
    height: 5, 
    isXNext: true,
    isWin: false,
    isDraw: false,
    board: [],
    moveList: [],
    winLine: []
  }

const reducerGamePlay = (state, action) => {
  const {type, payload} = action;
  const currentGamer = state.isXNext ? 'X' : 'O';
  let board = [];
  let winLine = [];

  switch (type) {
    case 'SETTING':
      return {
        ...state,
        isSetting: true,
        isXNext: true,
        isWin: false,
        isDraw: false,
        board,
        moveList: []
      }
    case 'DONE SETTING':
      const {width, height} = payload;
      for (let i = 0; i < height; i++) {
        board.push(Array(Number(width)).fill(null));
      }
      return {
        isSetting: false,
        width,
        height, 
        isXNext: true,
        isWin: false,
        isDraw: false,
        board,
        moveList: [],
        winLine
      }
    case 'CLICK BOARD':
      const {x, y} = payload;
      board = [...state.board];
      board[x][y] = currentGamer;
      let moveList = [...state.moveList];
      moveList.unshift(`${currentGamer} move to [${x}, ${y}]`);
      
      /** Check win */
      winLine = checkWin(currentGamer, board, x, y, state.width, state.height);
      if (winLine.length !== 0) 
        return {
          ...state, 
          isWin: true,
          board, 
          moveList,
          winLine
        } 

      /** Check draw */
      if (checkDraw(board, state.width, state.height)) 
        return {
          ...state, 
          board, 
          moveList,
          isDraw: true
        } 
      /** If not win, not draw: play continually */
      return {
        ...state, 
        board,
        moveList,
        isXNext: !state.isXNext
      } 
    case 'PLAY AGAIN':
      return {
        ...state,
        isSetting: false,
        isXNext: true,
        isWin: false,
        isDraw: false,
        board,
        moveList: []
      }
    default:
      return state;
  }
}

export default reducerGamePlay