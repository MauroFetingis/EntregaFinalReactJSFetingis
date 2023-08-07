import React from 'react'
import MainCarousel from '../../headerCarousel/MainCarousel'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <header>
        <h1 className='flex justify-center font-bold '>Bienvenido a la tienda</h1>
        <div>
        <MainCarousel/>
        </div>
        
        </header>
    </div>
  )
}

export default Home