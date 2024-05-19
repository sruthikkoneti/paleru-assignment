import { useState } from 'react'
import './index.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import HomeWorkDetails from './HomeWorkDetails'
import Score from './Score'
function App() {

  return (
    <>
    <Navbar/>
    <div className="flex h-screen">

      <Sidebar />
      <div className="flex-grow flex">
        <HomeWorkDetails />
        <Score />
      </div>
    </div>
    </>
  )
}

export default App
