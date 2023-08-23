import React, { useEffect } from 'react'
import './inicio.css'
import { Helmet } from 'react-helmet'

const Inicio = () => {
  return (
    <div>
      <Helmet><script src='./src/components/pages/inicio/ini.js'></script></Helmet>

      <div className=' bodyfont'>
        <section className='hidd '>
          <h1 className='in text-6xl font-semibold drop-shadow-lg m-10 '>Hola!</h1>
          <p className='in text-3xl ' >Bienvenido a Cellspot</p>
        </section>
        <section className='hidd'>
          <h2 className='in text-3xl'>Lo que busques <br /></h2>
          <h2 className='in text-3xl'>Lo encontraras <span className=' text-red-300 font-bold'>aquí</span></h2>
        </section>
        <section className='hidd'>
          <h2 className='in text-3xl'>Podras encontrar desde</h2>
          <p className='in text-3xl'>los últimos celulares</p>
          <div className='photo'>
            <div className='photo hidd'>
            <img className='in' src="./img/airpods.jpg" alt="" />
            </div>
            <div className='photo hidd'>
            <img className='in' src="./img/airpods.jpg" alt="" />
            </div>
            <div className='photo hidd'>
            <img className='in' src="./img/airpods.jpg" alt="" />
            </div>
            <div className='photo hidd'>
            <img className='in' src="./img/airpods.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className='hidd'>
          <p className='in text-3xl'>Hasta</p>
          <p className='in text-3xl'>Las mejores computadoras</p>
          <div className='photo'>
          <div className='photo hidd'>
            <img className='in' src="./img/airpods.jpg" alt="" />
            </div>
            <div className='photo hidd'>
            <img className='in' src="./img/airpods.jpg" alt="" />
            </div>
            <div className='photo hidd'>
            <img className='in' src="./img/airpods.jpg" alt="" />
            </div>
            <div className='photo hidd'>
            <img className='in' src="./img/airpods.jpg" alt="" />
            </div>
          </div>
      </section>
      <section className='hidd'>
        <p className='in text-4xl'>Visita nuestra<button className='in m-1'><a className='in font-extrabold animate-pulse text-red-400' href="/home"> tienda</a></button></p>
      </section>
    </div></div>
  )
}

export default Inicio