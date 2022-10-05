import React, { useState } from 'react'
import './MoveList.css'

const MoveList = ({list}) => {
  const [isAscending, setIsAscending] = useState(true)
  const moveList = list.map((move, index) => {
    if (index === 0)
      return <li key={move} style={{fontWeight:'bold'}}>{move}</li>
    else 
      return <li key={move}>{move}</li>
  })
  return (
    <div className='move-list'>
      <h2>Move list</h2>
      <button onClick={() => setIsAscending(!isAscending)}>
        {isAscending ? 'Descending' : 'Ascending'}
      </button>
      {isAscending ? moveList : moveList.reverse()}
    </div>
  )
}

export default MoveList