import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-5xl font-bold text-indigo-700'>Hello developer</h1> */}
      {/* taki home ka content aaye about ka mtlb saare children ka that'why oultet */}
      {/* outlet used for calling childrens */}
      <Navbar/>
      <Outlet/>
     
    </>
  )
}

export default App
