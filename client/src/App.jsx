import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Listall from './pages/Listall'
import Ngodetails from './pages/Ngodetails'

function App() {
  return (
    <>
      <Navbar />
      {/* <Listall></Listall> */}
      {/* <Home></Home> */}
      <Ngodetails />

      <Footer />
    </>
  )
}

export default App