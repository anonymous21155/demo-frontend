import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('')
  async function handleClick () {
    await fetch('https://testbackend2123-c5ddevbvckemdvgd.eastus-01.azurewebsites.net/data:3000', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({hello: 'hi'})}).then((res) => {res.json()}).then((data) => setCount(data.recieved))
  }

  return (
    <>
      <button onClick={handleClick}>Press</button>
    </>
  )
}

export default App
