import { useEffect, useState } from 'react'
import './App.css'

function App() {

 
 
  let[timer,setTimer] = useState(true);


  useEffect(()=>{
    setInterval(()=>{
      setTimer(timer=> !timer);
    },5000);
    
  },[])


  return (
    <>

      <div>
   
       {timer && <Counter/>}
      </div>

      



    </>
  )
}

function Counter(){
   let [counter,setCounter] = useState(0);

   const addValue = () => {
      setCounter(currentValue => currentValue+1);
   }

   useEffect(()=>{
    console.log("hi");
    setInterval(addValue,1000);
   },[]);

   const removeValue = () => {
    if(counter === 0){
      setCounter(counter =0)
    }else{
      setCounter(counter-1)

    }
   }

   


  return <div>
   
   
        <h1>heardCode</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick = {removeValue}>remove</button>
      </div>

}


function Tab(){
   let [currentTab, setCurrentTab] = useState("feed");
  return <div style={{margin:20}}>
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

}

export default App
