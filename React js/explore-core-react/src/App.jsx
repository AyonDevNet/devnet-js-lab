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
    <Devteam name="Rajon" department="Technology"/>
    <Devteam name="Majon" department="Technology"/>
    <Devteam name="Kajon" department="Technology"/>
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
      <div className="Jersey">
       <p>the captain's jersey number is {captain} </p> 

     <p>the winger's jersey number is {winger} </p>
    <p>the stricker jersye number is {stricker}</p>

     </div>
        
   </>

  ) 

}



 function Devteam(props){

 return (

       <div className='Devteam'>

           <h3>Devloper name:{props.name} </h3>
           <h3>Department name: {props.department}</h3>

       </div>
     


   
 )
 

 }

















export default App
