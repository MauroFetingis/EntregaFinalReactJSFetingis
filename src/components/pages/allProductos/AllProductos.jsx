import { Button } from "@mui/material"
import Layout from "../../layout/Layout"
import React,{ useState } from "react"

const products = [
  {
    id: 1,
    href:"*",
    nombre: "iPhone 14 Pro Max",
    categoria: "Celulares",
    price: 1099.99,
    descripcion: "El iPhone 14 Pro Max es el mejor teléfono inteligente de Apple. Tiene una pantalla grande, una cámara increíble y una batería de larga duración.",
    stock: 10,
    img: "./img/iphone.jpg"
    },
    {
    id: 2,
    href:"*",
    nombre: "Samsung Galaxy S23 Ultra",
    categoria: "Celulares",
    price: 1199.99,
    descripcion: "El Samsung Galaxy S23 Ultra es otro gran teléfono inteligente. Tiene una pantalla enorme, una cámara de múltiples lentes y una batería de larga duración.",
    stock: 5,
    img: "./img/galaxy.jpg"
    },
    {
    id: 3,
    href:"*",
    nombre: "Google Pixel 7 Pro",
    categoria: "Celulares",
    price: 999.99,
    descripcion: "El Google Pixel 7 Pro es un teléfono inteligente asequible con una gran cámara y una larga duración de la batería.",
    stock: 15,
    img: "./img/pixel7.jpg"
    },
    {
    id: 4,
    href:"*",
    nombre: "iPad Pro (12.9 pulgadas)",
    categoria: "Tabletas",
    price: 1099.99,
    descripcion: "El iPad Pro (12.9 pulgadas) es la mejor tableta de Apple. Tiene una pantalla grande, una potente CPU y una cámara increíble.",
    stock: 10,
    img: "./img/ipadP.jpg"
    },
    {
    id: 5,
    href:"*",
    nombre: "iPad Air (11 pulgadas)",
    categoria: "Tabletas",
    price: 749.99,
    descripcion: "El iPad Air (11 pulgadas) es una gran tableta asequible. Tiene una pantalla grande, una potente CPU y una cámara decente.",
    stock: 5,
    img: "./img/ipadA.jpg"
    },
    {
    id: 6,
    href:"*",
    nombre: "MacBook Pro (14 pulgadas)",
    categoria: "Computadoras portátiles",
    price: 1999.99,
    descripcion: "La MacBook Pro (14 pulgadas) es la mejor computadora portátil de Apple. Tiene una pantalla grande, una potente CPU y una batería de larga duración.",
    stock: 5,
    img: "./img/macP.jpg"
    },
    {
    id: 7,
    href:"*",
    nombre: "MacBook Air (M1)",
    categoria: "Computadoras portátiles",
    price: 999.99,
    descripcion: "La MacBook Air (M1) es una gran computadora portátil asequible. Tiene una pantalla grande, una potente CPU y una batería de larga duración.",
    stock: 10,
    img: "./img/macA.jpg"
    },
    {
    id: 8,
    href:"*",
    nombre: "Apple Watch Series 7",
    categoria: "Relojes inteligentes",
    price: 399.99,
    descripcion: "El Apple Watch Series 7 es el mejor reloj inteligente de Apple. Tiene una pantalla grande, una potente CPU y una batería de larga duración.",
    stock: 5,
    img: "./img/watch.jpg"
    },
    {
    id: 9,
    href:"*",
    nombre: "AirPods Pro",
    categoria: "Auriculares inalámbricos",
    price: 249.99,
    descripcion: "Los AirPods Pro son los mejores auriculares inalámbricos de Apple. Tienen un gran sonido, un diseño cómodo y una gran duración de la batería.",
    stock: 10,
    img: "./img/airpods.jpg"
    },
    {
    id: 10,
    href:"*",
    nombre: "Apple TV 4K",
    categoria: "Reproductores de streaming",
    price: 179.99,
    descripcion: "El Apple TV 4K es el mejor reproductor de streaming de Apple. Tiene una gran pantalla, un potente procesador y una gran biblioteca de contenido.",
    stock: 5,
    img: "./img/appletv.jpg"
    },
    {
    id: 11,
    href:"*",
    nombre: "Samsung Galaxy Book",
    categoria: "Computadoras portátiles",
    price: 1200,
    descripcion: "El Samsung Galaxy Book es la combinación perfecta de portabilidad y productividad. Con su diseño delgado y ligero, es ideal para trabajar sobre la marcha. La pantalla nítida y las características inteligentes hacen que este dispositivo sea una elección inteligente para profesionales y estudiantes que buscan versatilidad y estilo",
    stock: 5,
    img: "./img/laptop.png"
    },
    {
    id: 12,
    href:"*",
    nombre: "Samsung Galaxy Book pro",
    categoria: "Computadoras portátiles",
    price: 1400,
    descripcion: "El Samsung Galaxy Book Pro lleva la computación móvil al siguiente nivel. Este portátil ultrafino y ultraligero es perfecto para aquellos que buscan la máxima potencia y movilidad. Con una pantalla impresionante y un rendimiento de primer nivel, es la elección definitiva para quienes desean destacar en su trabajo o entretenimiento",
    stock: 5,
    img: "./img/laptop3.png"
    },
    {
    id: 13,
    href:"*",
    nombre: "MSI Gaming laptop",
    categoria: "Computadoras portátiles",
    price: 1600,
    descripcion: "Sumérgete en el mundo del gaming con el MSI Gaming Laptop. Este portátil potente y elegante está diseñado para ofrecer un rendimiento excepcional en tus juegos favoritos. Con gráficos de alta gama y un procesador rápido, te llevará a un nivel superior de entretenimiento interactivo.",
    stock: 5,
    img: "./img/laptop2.jpg"
    },
    {
    id: 14,
    href:"*",
    nombre: "Iphone 13 pro",
    categoria: "Celulares",
    price: 1100,
    descripcion: "El iPhone 13 Pro es la joya de la corona de Apple. Con su cámara de última generación, pantalla ProMotion y un rendimiento excepcional, este teléfono es perfecto para los amantes de la fotografía y los usuarios que buscan un dispositivo de alta gama. Experimenta la innovación y el estilo en su máxima expresión con el iPhone 13 Pro.",
    stock: 5,
    img: "./img/iphone2.jpg"
    },

]

export default function AllProductos() {
  const [count, setCount] = React.useState(1)
  return ( <Layout>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Nuestros productos</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 cursor-pointer">
          {products.map((product) => (
            <div key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
                <img
                  src={product.img}
                  alt={product.descripcion}
                  className="prod h-full w-full object-cover object-center  mix-blend-multiply"
                />
              </div>
              <h3 className="flex justify-center content-center mt-4 text-lg text-gray-700">{product.nombre}</h3>
              <h3 className="mt-4 text-sm text-gray-700">{product.descripcion}</h3>
              <p className="flex justify-center content-center mt-1 text-lg font-medium text-gray-900">{product.price}$</p>
            
              <div className="flex justify-between">
                <Button onClick={() => {
              setCount(Math.max(count - 1, 0));
            }} size="large" variant="contained" color="error" >-</Button>
                <div className="flex justify-center content-center">
              <Button size="large" >Añadir al carrito</Button>
            </div>
                <Button onClick={() => {
              setCount(count + 1);
            }} size="large" variant="contained" color="success">+</Button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          </Layout>
  )
}
