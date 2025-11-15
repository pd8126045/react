import { useState } from 'react'


function App() {

  
 

  return (
    <>
         <div className="w-full h-screen absolute top-0 left-0 " 
        style={{ backgroundColor: "black", justifyContent:"center",alignItems:"center",display:"flex"}}>
            <LightBulb/>
           

          
          

        </div>
    </>
  )
}

function LightBulb(){
  const[bulbOn,setBulbon] = useState(true);
  return <div >
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbon={setBulbon}/>
  </div>
}

function BulbState({bulbOn}){
  return <div className='text-white text-center'>
    {bulbOn? "BlubOn":"BlubOff"}
  </div>

}

function ToggleBulbState({setBulbon}){
  function changBlubstate(){
    setBulbon(bulbOn=> !bulbOn)
  }
  return <div className='text-white text-center'>
    <button onClick={changBlubstate} className='text-white text-center'>Toggle the blub</button>
  </div>

}

export default App
