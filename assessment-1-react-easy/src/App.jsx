import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greating from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greating name="john" age="22"/>
    </>
  )
}

export default App
