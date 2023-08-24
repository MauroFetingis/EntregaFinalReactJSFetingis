import About from './components/pages/about/About'
import Dashboard from './components/pages/admin/dashboard/Dashboard'
import AllProductos from './components/pages/allProductos/AllProductos'
import Cart from './components/pages/cart/Cart'
import Config from './components/pages/config/Config'
import Help from './components/pages/help/Help'
import Home from './components/pages/home/Home'
import Inicio from './components/pages/inicio/Inicio'
import NoPage from './components/pages/nopage/NoPage'
import Orders from './components/pages/orders/Orders'
import Profile from './components/pages/profile/Profile'
import MyState from './context/data/MyState'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/"element={<Inicio/>}/>
        <Route path="/home"element={<Home/>}/>
        <Route path="/orders"element={<Orders/>}/>
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/all-productos"element={<AllProductos/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/help"element={<Help/>}/>
        <Route path="/profile"element={<Profile/>}/>
        <Route path="/config"element={<Config/>}/>
        <Route path="/*"element={<NoPage/>}/>
      </Routes>
    </Router>


  
  )
}

export default App
