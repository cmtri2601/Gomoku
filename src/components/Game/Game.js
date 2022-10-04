import React, { useReducer } from 'react'
import reducerGamePlay, { initialGamePlay } from '../../State/Reducer'
import Board from '../Board/Board'
import SettingGame from '../SettingGame/SettingGame'

const Game = () => {
  const [state, dispatch] = useReducer(reducerGamePlay, initialGamePlay)

  return (
    <div>
      <SettingGame />
      <Board />
    </div>
  )
}

export default Game