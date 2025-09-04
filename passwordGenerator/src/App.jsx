import { useState ,useCallback, useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllow,setNumberAllow] = useState(false)

  const [charAllowed,setcharAllowed] = useState(false)

  const [password,setPassword] = useState("")
  const passwordRef = useRef("")
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*()"

    }
    for(let i=1;i<=length;i++){
      let char =Math.floor (Math.random() * str.length + 1)
       pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length,numberAllow,charAllowed,setPassword] )

  const copyClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)

  }, [password])



  useEffect(()=>{
    passwordGenerator();

  },[length,numberAllow,charAllowed,passwordGenerator])



    return (
      <>
    <div className="w-full h-screen absolute top-0 left-0 " 
        style={{ backgroundColor: "black" }}>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-white text-center'>Password Generator</h1>
        
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password} className='outline-none w-full py-1 px-3' 
          placeholder='password'
          readOnly 
          ref={passwordRef}
        />

        <button
        onClick={copyClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>



      <div className='flex text-sm gap-x-2'>
        <div>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={()=>{
            setNumberAllow((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>

        </div>

        <div>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{
            setcharAllowed((prev) => !prev)
          }}
          
          
          
          />
          <label htmlFor="characterInput">Characters</label>

        </div>

      </div>



      </div>
      </div>
      </>
    )
}

export default App
