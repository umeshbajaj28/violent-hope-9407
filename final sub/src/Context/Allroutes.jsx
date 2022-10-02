import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../Component/Home'
import Login from '../Component/Login'
import Signup from '../Component/Signup'
function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>

    </Routes>
  )
}

export default Allroutes