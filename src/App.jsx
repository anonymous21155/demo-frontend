import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Hlo from './Hlo'
import {Route,RouterProvider,Routes,createBrowserRouter,createRoutesFromElements, redirect} from 'react-router-dom';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>} />
      <Route path='/hello' element={<Hlo/>} />
    </Route>
  ))
  /*const [count, setCount] = useState('')
  async function handleClick () {
    await fetch('https://testbackend2123-c5ddevbvckemdvgd.eastus-01.azurewebsites.net/data', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({hello: 'hi'})}).then((res) => {res.json()}).then((data) => setCount(data.recieved), console.log(count))
  }
  */
  return (
    <RouterProvider  router={router}/>
  )
}

export default App;
