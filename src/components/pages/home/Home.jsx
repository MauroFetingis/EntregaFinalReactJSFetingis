import React, { useContext } from 'react'
import MainCarousel from '../../headerCarousel/MainCarousel'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from '../../layout/Layout'
import MyContext from '../../../context/data/MyContext'


const Home = () => {
  return (
    <Layout>
        <header>
        <h1 className='flex justify-center font-bold text-3xl font-serif p-7 text-gray-950'>Bienvenido a la tienda</h1>
        <div>
        <MainCarousel/>
        </div>
        
        </header>
    </Layout>
  )
}

export default Home
    