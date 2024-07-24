import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import View from './assets/components/View'
import Add from './assets/components/Add'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MOVIE TICKETS</h1><br></br>
      <Navbar/>
      <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App
