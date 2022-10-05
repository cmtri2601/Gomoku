import React, { useReducer } from 'react'
import reducerGamePlay, { initialGamePlay } from '../../State/Reducer'
import Board from '../Board/Board'
import MoveList from '../MoveList/MoveList'
import SettingGame from '../SettingGame/SettingGame'

import "./Game.css"

const Game = () => {
  const [state, dispatch] = useReducer(reducerGamePlay, initialGamePlay)

  return (
    <div className='container'>
      <div>
        <SettingGame 
          width={state.width} 
          height={state.height} 
          isWin={state.isWin}
          isDraw={state.isDraw}
          isXNext={state.isXNext}
          isSetting={state.isSetting}          
          handleSetting={dispatch}
        />
        { !state.isSetting &&
          <MoveList 
            list = {state.moveList}
          />
        }
      </div>
      
      { !state.isSetting &&
      <>
        <Board 
          width={state.width} 
          height={state.height} 
          board={state.board}
          isWin={state.isWin}
          isDraw={state.isDraw}
          winLine={state.winLine}
          handleClickBoard={dispatch}
        />
      </>
      }
    </div>
  )
}

export default Game