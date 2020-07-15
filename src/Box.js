import React from 'react'

export default function Box({
    id, 
    handleRemove, 
    width = 5, 
    height = 5, 
    backgroundColor = "green"
}) {
    const remove = () => handleRemove(id)
    return (
        <div>
        <div
        style={{
            height: `${height}rem`,
            width: `${width}rem`,
            backgroundColor
          }}/>
            <button onClick={remove}>Remove</button>
        </div>
    )
}
