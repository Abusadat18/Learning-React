import { useState, useCallback, useEffect ,useRef } from "react"

function App() {
  const [length , setLength] = useState(8)
  const [isNum  , setIsNum] = useState(false)
  const [isChar , setIsChar] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNum) str+= "123456789"
    if(isChar) str+= "!@#$%^&*-_+=[]{}~`"

    for(let i=1 ; i<=length ; i++){
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)

  },[length,isNum,isChar,setPassword])

  /* Ref Hook */
  const passwordRef = useRef(null)

  const copyToClipboard = ()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,40)
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGenerator()
  },[length,isNum,isChar,passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:bg-blue-600'
        onClick={copyToClipboard}
        >copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min="6"
        max="40"
        value={length}
        onChange={(e) => {
          setLength(e.target.value)
        }}
         className='cursor-pointer'
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={isNum}
          id="numberInput"
          onChange={()=>{
            setIsNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={isChar}
              id="characterInput"
              onChange={()=>{
                setIsChar((prev) => !prev);
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
  )
}

export default App
