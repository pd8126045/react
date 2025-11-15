import { useState } from 'react'
import{BrowserRouter,Routes,Route,Link, useNavigate} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Link to="/classes-6-1">Allen</Link>
    || 
    <Link to ="/classes-6-11">class</Link>
    || 
    <Link to ="/">Allen</Link>

      <Routes>
        <Route path="/classes-6-1" element ={<Blogs/>}/>
        <Route path="/" element ={<SecondComp/>}/>
        <Route path="/classes-6-11" element ={<ThirdCom/>}/>

      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

function Blogs(){
  return <div>
    hi there
  </div>
}


function SecondComp(){
  return <div>
    hello
  </div>
}



function ThirdCom(){
  const navi=useNavigate();
  function back(){
  navi("/")

}

  return <div>
    hello world
    <button onClick={back}>Go back </button>
  </div>
}

export default App
