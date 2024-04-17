import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 rounded p-4 mb-5'>Tailwind Test</h1>
      <Card deviceName="macbookAir"/>
      <Card deviceName="macbookPro"/>
    </>
  )
}

export default App
