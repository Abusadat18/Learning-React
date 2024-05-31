import React from 'react'

function Temp1({children}) {

  console.log(children);

  return (
    <div>{children[1]}</div>
  )
}

export default Temp1