
import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


/*const reactElement = {
    type: "a",
    props: {
        href: "https://goole.com",
        target: "_blank"
    },
    children : "click me to visit google",
  }*/
  const anotherUser = " try to understander"
  const reactElement = React.createElement(
      "a",
      {href : "https://goole.com",target : "_blank"},
      "click me to visit google",
      anotherUser
    )

    

  const anotherElement = (
    <a href="https://goole.com" target='_blank'>visit goole</a>
  )

  

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {reactElement}
  </StrictMode>

)
