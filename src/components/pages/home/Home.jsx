import React, { useContext } from 'react'
import MainCarousel from '../../headerCarousel/MainCarousel'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from '../../layout/Layout'
import MyContext from '../../../context/data/MyContext'


const Home = () => {
  return (
    <Layout>
        <header>
        <h1 className='h1_home flex justify-center font-bold text-3xl font-bruno p-7 text-gray-950 animate-pulse'>Bienvenido a la tienda</h1>
        <div>
        <MainCarousel/>
        </div>
        
        </header>
    </Layout>
  )
}

export default Home
    