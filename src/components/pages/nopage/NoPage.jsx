import React from 'react'

const NoPage = () => {
  return (
    <div className="my-10 grid justify-center "> <h1 className="flex justify-center text-5xl text-indigo-500 font-bold font-serif">Ups</h1> <br /> <p className="flex justify-center text-2xl text-indigo-400 font-bold font-serif"><span className="text-3xl font-extrabold">404</span> Pagina no encontrada</p> <br />
    <img src="./img/busqueda.gif" alt="" /><p className="flex justify-center text-xl text-indigo-400 font-bold font-serif">Por favor pruebe más tarde</p> <a className=" text-4xl text-indigo-400 font-serif animate-bounce font-bold flex justify-center m-7 text-lg font-semibold cursor-pointer" href="/home">Vovler al Inicio</a></div>
  )
}

export default NoPage