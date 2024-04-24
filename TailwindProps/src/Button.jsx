import React from 'react'

function Button(prop) {
    
  console.log(prop);

  Button.defaultProps = {
    text: "submit default"
  }
    
  return (
    <button>{prop.text}</button>
  )
}

export default Button