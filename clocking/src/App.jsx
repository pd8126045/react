import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);
  let [timer,setTimer]=useState(0);


  function startClock(){
    setTimer(timer=setInterval(function (){
      setCount(c=>c+1);
    },1000))

  }
  function stopClock(){
    clearInterval(timer);

  }

  return (
    <>
    <div style={{backgroundColor:"gray",width:"100%",height:"100vh",borderRadius:7,display:"flex", justifyContent: "center",
    alignItems: "center"}}>
      
      <div>
        <button onClick={startClock} style={{margin:10}}>Start</button>
      </div>
      <div style={{backgroundColor:"red",margin:5,padding:4,borderRadius:10}}>
        {count}
      </div >
      <div>
        <button onClick={stopClock} style={{margin:10}}>Stop</button>
      </div>
      </div>
    </>
  )
}

export default App
