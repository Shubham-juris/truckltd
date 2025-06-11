import React from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import RoutesPage from './routes/RoutesPage'
import Map from './components/map/Map'

function App() {

  return (
    <>
     <Navbar/>
     <RoutesPage/>
     <Footer/>
    </>
  )
}

export default App
