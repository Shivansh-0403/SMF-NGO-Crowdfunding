import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ngo_Details from './pages/Ngo_Details'
import Ngo_List from './pages/Ngo_List'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/listings' element={<Ngo_List />} ></Route>
        <Route path='/details' element={<Ngo_Details />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App