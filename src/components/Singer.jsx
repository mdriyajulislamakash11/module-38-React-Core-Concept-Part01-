import React from 'react'

function Singer({singer}) {
    console.log(singer)
    const {name, age} = singer;
  return (
    <div>
        <h2>Singer Name: {name}</h2>
        <p>Singer Age: {age}</p>
    </div>
  )
}

export default Singer