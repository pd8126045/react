import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(1);
  let [currentTab, setCurrentTab] = useState("feed");

  
   //let counter =5

  const addValue = () => {
  if(counter === 10){
      setCounter(counter =10)
    }else{
      setCounter(currentValue => currentValue+1);

    }
   }

   useEffect(()=>{
    setInterval(addValue,1000);

   },[]);
   

   const removeValue = () => {
    if(counter === 0){
      setCounter(counter =0)
    }else{
      setCounter(counter-1)

    }
   }

  return (
    <>

      <div>
   
        <h1>heardCode</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick = {removeValue}>remove</button>
      </div>

      <div style={{margin:20}}>
        <button 
        onClick = {function(){
          setCurrentTab(currentTab = "feed");
        }}
        style = {{color:currentTab == "feed"? "red": "white"}}
        >feed</button>

        <button 
        onClick = {function(){
          setCurrentTab(currentTab = "notification");
        } }
        style = {{color:currentTab == "notification"? "red": "white"}}
        >notification</button>

        <button 
        onClick = {function(){
          setCurrentTab(currentTab = "massage");
        }}
        style = {{color:currentTab == "massage"? "red": "white"}}
        >massage</button>

        <button 
        onClick = {function(){
          setCurrentTab(currentTab = "jobs");
        } }
        style = {{color:currentTab == "jobs"? "red": "white"}}
        >jobs</button>
        
      </div>

    </>
  )
}

export default App
