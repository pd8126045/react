
import React from "react";
import { useEffect, useState } from 'react'
function App() {
  const userName = "chai or code"
  

  return (
    <>
    <ErrorBoundary>
      <Card1/>
    </ErrorBoundary>
    <Card2/>
    </>
    
  )
}
function Card1(){
  throw new Error("Error")
  return <div style = {{backgroundColor:"red",padding:15,borderRadius:5, margin:10}}>
    hi there
  </div>

}
function Card2(){
  //throw new Error("Error")
  return <div style ={{backgroundColor:"red",padding:15,borderRadius:5, margin:10}}>
    hello
  </div>

  
}





class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h1>Something went wrong.</h1>;
    }
    // Otherwise, render children components normally
    return this.props.children;
  }
}





export default App
