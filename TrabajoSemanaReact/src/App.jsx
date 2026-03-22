import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router"
import Students from './pages/Students'
import Nav from './components/Nav'
import Components from './pages/Components'
import Card from './pages/Card'
import Calculator from './pages/Calculator'
import Tasks from './pages/Tasks'

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Students/>}/>
          <Route path="/components" element={<Components/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
