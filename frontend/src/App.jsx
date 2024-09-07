// import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className='bg-white text-black h-screen'>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
