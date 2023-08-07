import Layout from "../../layout/Layout"

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

]

export default function AllProductos() {
  return ( <Layout>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Nuestros productos</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.img}
                  alt={product.descripcion}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.nombre}</h3>
              <h3 className="mt-4 text-sm text-gray-700">{product.descripcion}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
          </Layout>
  )
}
