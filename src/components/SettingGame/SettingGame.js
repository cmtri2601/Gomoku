import React, { useRef } from 'react'
import './SettingGame.css'

const SettingGame = props => {
  const {width, height, isWin, isDraw, isXNext, isSetting, handleSetting} = props

  const widthRef = useRef(null);
  const heightRef = useRef(null);

  const handleOK = e => {
    e.preventDefault();

    handleSetting({
      type: "DONE SETTING", 
      payload: {
        width: widthRef.current.value,
        height: heightRef.current.value, 
      }
    });
  }

  const handleEnableSetting = () => {
    handleSetting({type: "SETTING"});
  }

  const handlePlayAgain = () => {
    handleSetting({type: "PLAY AGAIN"});
  }

  return (
    <form onSubmit={e => handleOK(e)}>
      <h2>Setting</h2>

      <label htmlFor='width'>Width: </label>
      <input 
        disabled={!isSetting}
        ref={widthRef}
        type={"number"} 
        defaultValue={width}
        min={5} 
        id={"width"} 
        name={"width"}
      />

      <br/>

      <label htmlFor='height'>Height: </label>
      <input 
        disabled={!isSetting}
        ref={heightRef}
        type='number' 
        defaultValue={height}
        min={5} 
        id={"height"} 
        name={"height"}
      />

      <br/>

      <button disabled={!isSetting} type='submit'>OK</button>
      <button type='button' onClick={() => handleEnableSetting()}>Setting</button>

      <p className={isSetting || isDraw || isWin ? 'hidden' : ''}>{`Next is ${isXNext ? 'X' : 'O'}`}</p>
      <h3 className={isWin ? '' : 'hidden'}>{`${isXNext ? 'X' : 'O'} Win`}</h3>
      <h3 className={isDraw ? '' : 'hidden'}>Draw</h3>

      <button 
        className={isWin || isDraw ? '' : 'hidden'} 
        type='button' onClick={() => handlePlayAgain()}
      >
        Play again
      </button>

    </form>
  )
}

export default SettingGame