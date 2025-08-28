import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')
   
   
  

  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0 " 
      style={{ backgroundColor: color }}>

        <div className='text-white'>
        <button className='bg-red-700' 
        onClick={() =>setColor("red")  } >Red</button>

        <button className='bg-stone-400' 
        onClick={() =>setColor("white")}>White</button>

        <button className='bg-yellow-300'
        onClick={() =>setColor("yellow")}>Yellow</button>

        <button className='bg-green-700'
        onClick={() =>setColor("green") }>Green</button>

        <button className='bg-pink-400'
        onClick={() =>setColor("pink")} >Pink</button>

        <button className='bg-purple-700'
        onClick={() =>setColor("purple")} >Purple</button>

        <button className='bg-blue-700' 
        onClick={() =>setColor("blue")}>Blue</button>
        <button className='bg-violet-200'
        onClick={() =>setColor("lavender")} >Lavender</button>

        <button className='bg-lime-700' 
        onClick={() =>setColor("olive")}>Olive</button>

        <button className='bg-black' 
        onClick={() =>setColor("black")}>Black</button>

        <button className='bg-gray-700'
        onClick={() =>setColor("gray")} >Gray</button>

        <button className='bg-sky-700' 
        onClick={() =>setColor("aqua")}>Aqua</button>



      </div>
        
      </div>
      
    </>
  )
}

export default App
