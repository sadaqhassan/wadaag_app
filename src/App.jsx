import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

const App = () => {
  return (
  <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
  <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route  path='/profile' element={<Profile/>}/>
  </Routes>
  </div>
  )
}

export default App;