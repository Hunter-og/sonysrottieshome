import React from 'react'
import Navbar from '../comp/home/Navbar'
import Home from '../comp/home/Home'
import Welcome from '../comp/home/Welcome'
import Info from '../comp/home/Info'
import About from '../comp/home/About'
import Footer from '../comp/home/Footer'
import Client from '../comp/home/Client'
import Plus from '../comp/home/Plus'




export default function Landingpage() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Welcome/>
    <Info/>
    <About/>
    <Plus/>
    <Client/>
    <Footer/>
    </div>
  )
}
