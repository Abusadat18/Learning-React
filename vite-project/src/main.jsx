import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MainApp(){

  let value = "This is inserted using varible";

  return (
    <>
      <h1>Hello World !</h1>
      <h2>{value}</h2>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <App/>
)
