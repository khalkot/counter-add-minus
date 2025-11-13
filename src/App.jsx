import { useState } from 'react'
import './styles/App.css'



function App() {
const [counter, setCounter] = useState(0);

const handlePlus = () => setCounter(counter+1);
const handleMinus = () => setCounter(counter-1);

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={handlePlus} >+</button>
    <button onClick={handleMinus} >-</button>
    </>
  )
}

export default App
