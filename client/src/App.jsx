import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ngo_Details from './pages/Ngo_Details'
import Ngo_List from './pages/Ngo_List'
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import ResetPassword from './pages/ResetPassword'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/listings' element={<Ngo_List />} ></Route>
        <Route path='/details' element={<Ngo_Details />} ></Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Navigate replace to="/login" />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App