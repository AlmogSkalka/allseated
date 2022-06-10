import React from 'react'

export default function ChaserElement({ position, ParentGameOver }) {
  const XPos = position.x;
  const YPos = position.y;

  return (
    <div style={{
      backgroundColor: 'blue',
      position: 'absolute',
      width: '100px',
      height: '100px',
      border: '2px solid blue',
      borderRadius: '50%',
      top: YPos,
      left: XPos,
      color: 'white',
      fontSize: '15px',
      textAlign: 'center',
      margin:'0px auto',
      padding:'5px auto'
    }}
      onMouseEnter={ParentGameOver}
    >
      DEFENDER
    </div>
  )
}
