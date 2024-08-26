import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Listall from './pages/Listall'

function App() {
  return (
    <>
      <Navbar />
      <Listall></Listall>
      {/* <Home></Home> */}
      <Footer />
    </>
  )
}

export default App