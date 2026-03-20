import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router"
import Students from './pages/Students'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Router>
        
        <main>
        <Nav/>
        <Routes>
          <Route path="/" element={<Students/>}/>
        </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
