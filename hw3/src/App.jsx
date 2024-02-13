import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EditDetails from './FComps/EditDetails'
import Login from './FComps/Login'
import Profile from './FComps/Profile'
import Register from './FComps/Register'
import SystemAdmin from './FComps/SystemAdmin'

function App() {
  //set state route
  

  return (
    <>
    <EditDetails />
    {/* <Login /> */}
    <Profile/>
    <Register/>
    <SystemAdmin/>
    
    </>
  )
}

export default App
