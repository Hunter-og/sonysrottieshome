import React from 'react'
import Navbar from '../comp/home/Navbar'
import Home from '../comp/home/Home'
import Welcome from '../comp/home/Welcome'
import Choose from '../comp/home/choose'



export default function Landingpage() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Welcome/>
    <Choose/>
    </div>
  )
}
