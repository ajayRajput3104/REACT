import viteLogo from '/vite.svg'
import { useState } from 'react'

function App() {
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    if(counter < 20){
      counter=counter+1
    }
    else{
      alert(`Value Can't go above 20`)
    }
    console.log(counter)
    setCounter(counter)
  }
  const removeValue=()=>{
    if(counter > 0){
      counter=counter-1
    }
    else{
      alert(`Value Can't go below 0`)
    }
    console.log(counter)
    setCounter(counter)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter:{counter}</h2>

    <button onClick={addValue}>Add value:{counter}</button>
    <br/>
    <button onClick={removeValue}>Remove value:{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
