import React, { useRef } from 'react'

const SettingGame = props => {
  const {width, height, handleSetting} = props

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

  return (
    <form onSubmit={e => handleOK(e)}>
      <h1>Setting</h1>

      <label htmlFor='width'>Width: </label>
      <input 
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
        ref={heightRef}
        type='number' 
        defaultValue={height}
        min={5} 
        id={"height"} 
        name={"height"}
      />

      <br/>

      <button type='submit'>OK</button>
      <button type='button' onClick={() => handleEnableSetting()}>Setting</button>
    </form>
  )
}

export default SettingGame