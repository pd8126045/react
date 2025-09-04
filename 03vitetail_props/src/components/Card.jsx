import React from 'react'

function Card({userName}) {
    console.log(userName)
  return (

     <div className="flex flex-col items-center rounded-2xl">
        <div>
          <img className="size-48 shadow-xl" alt="" src="https://media.istockphoto.com/id/1183183791/photo/talented-female-artist-works-on-abstract-oil-painting-using-paint-brush-she-creates-modern.jpg?s=612x612&w=0&k=20&c=QrR6QQxioyM6zT5qPpKxr9KFz2VRrhVO3rXJ8fIfswY=" />
          <h1 className='text-lg font-semibold text-white'>{userName}</h1>
        </div>
        <div className="flex">
        </div>
      </div>
  )
}

export default Card