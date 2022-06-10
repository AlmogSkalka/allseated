import React, { useEffect, useState } from 'react'

export default function EscapeElement({ position, parentCaught }) {
    const [XPos, setXPos] = useState(window.innerHeight / 2)
    const [YPos, setYPos] = useState(window.innerWidth / 2)

    const TheyGotMe = () => {
        parentCaught();
        setXPos(Math.random * 100 * position.y)
        setYPos(Math.random * 100 * position.x)
    }

    useEffect(() => {
        position.x > window.innerWidth / 2 ?
            setXPos(window.innerWidth / 2)
            // setXPos(Math.min(position.x - window.innerWidth, window.innerWidth))
            :
            setXPos(window.innerHeight / 2)
        // setXPos(Math.min(window.innerWidth - position.x, position.x))
        position.y > window.innerHeight / 2 ?
            setYPos(Math.max(position.y - window.innerHeight, window.innerHeight / 2))
            :
            setYPos(Math.max(window.innerHeight - position.y, window.innerHeight / 2))
    }, [XPos, YPos]);

    return (
        <div style={{
            border: '2px solid red',
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'red',
            borderRadius: '50 %',
            top: YPos,
            left: XPos,
        }}
            onMouseEnter={TheyGotMe}
        >
            ESCAPE
        </div >
    )
}
