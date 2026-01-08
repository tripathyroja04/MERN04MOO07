import { useState } from 'react'

import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Foods from './Component/Foods'
import { Route, Routes } from 'react-router'
import Footer from './Component/Footer'

function App() {
 

  return (
    <>
      Hello
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/foods' element={<Foods/>}> </Route>
      </Routes>
      
    
      <Footer/>
      <Navbar/>
    </>
  )
}

export default App
