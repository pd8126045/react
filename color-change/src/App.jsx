import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const colorRed = () => {
    document.querySelector('body').style.backgroundColor = 'red'

   }
   const colorWhite = () => {
    document.querySelector('body').style.backgroundColor = 'white'

   }
   const colorGreen = () => {
    document.querySelector('body').style.backgroundColor = 'green'

   }
   const colorLavender = () => {
    document.querySelector('body').style.backgroundColor = '#E6E6FA'

   }
   const colorYellow = () => {
    document.querySelector('body').style.backgroundColor = 'yellow'

   }
   const colorPink = () => {
    document.querySelector('body').style.backgroundColor = 'pink'

   }
   const colorPurple = () => {
    document.querySelector('body').style.backgroundColor = 'purple'

   }
   const colorBlue = () => {
    document.querySelector('body').style.backgroundColor = 'blue'

   }
   
   const colorGray = () => {
    document.querySelector('body').style.backgroundColor = 'gray'

   }
   const colorBlack = () => {
    document.querySelector('body').style.backgroundColor = 'black'

   }
   const colorOlive = () => {
    document.querySelector('body').style.backgroundColor = '#808000'

   }
   const colorAqua = () => {
    document.querySelector('body').style.backgroundColor = 'aqua'

   }
  

  return (
    <>
      <div >
        <button className='bg-red-700' onClick={colorRed}>Red</button>
        <button className='bg-stone-400' onClick={colorWhite}>White</button>
        <button className='bg-yellow-300' onClick={colorYellow}>Yellow</button>
        <button className='bg-green-700' onClick={colorGreen}>Green</button>
        <button className='bg-pink-400' onClick={colorPink}>Pink</button>
        <button className='bg-purple-700' onClick={colorPurple}>Purple</button>
        <button className='bg-blue-700' onClick={colorBlue}>Blue</button>
        <button className='bg-violet-200' onClick={colorLavender}>Lavender</button>
        <button className='bg-lime-700' onClick={colorOlive}>Olive</button>
        <button className='bg-black' onClick={colorBlack}>Black</button>
        <button className='bg-gray-700' onClick={colorGray}>Gray</button>
        <button className='bg-sky-700' onClick={colorAqua}>Aqua</button>



      </div>
    </>
  )
}

export default App
