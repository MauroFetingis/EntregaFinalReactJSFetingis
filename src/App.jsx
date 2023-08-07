import Dashboard from './components/pages/admin/dashboard/Dashboard'
import AllProductos from './components/pages/allProductos/AllProductos'
import Cart from './components/pages/cart/Cart'
import Home from './components/pages/home/Home'
import NoPage from './components/pages/nopage/NoPage'
import Orders from './components/pages/orders/Orders'
import MyState from './context/data/MyState'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/orders"element={<Orders/>}/>
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/all-productos"element={<AllProductos/>}/>
        <Route path="/*"element={<NoPage/>}/>
      </Routes>
    </Router>


  
  )
}

export default App
