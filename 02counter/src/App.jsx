import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  //let counter = 10
  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
    }
  };
  let removeValue = () => {
    console.log("clicked",counter)
    counter = counter - 1 
    if(counter < 0){
      counter = 0
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>

    </>
  )
}

export default App
