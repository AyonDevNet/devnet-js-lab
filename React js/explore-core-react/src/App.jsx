import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Person />
      <Person />
      <Jersey/>
    </>
  )
}

function Person() {
  const age = 10;
  return (
    <p>There are around {age} players </p>
  )
}



function Jersey(){

  const stricker = 9;
  const winger = 7;
  const captain = 10;
  return (
  <>
    <p>the captain's jersey number is {captain} </p>
    <p>the winger's jersey number is {winger} </p>
    <p>the stricker jersye number is {stricker}</p>
   </>

  ) 

}

export default App
