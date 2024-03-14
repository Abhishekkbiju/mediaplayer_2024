import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Dashboard from './pages/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'
function App() {


  return (
    <>
       <Header/>
       <Routes>
       <Route path='/land' Component={Landing}/>
       <Route path='/his' Component={History}/>
       <Route path='/dash' Component={Dashboard}/>
       </Routes>
       <Footer/>
    </>
  )
}

export default App
