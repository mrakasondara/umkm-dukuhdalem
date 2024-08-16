import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import UserContextProvider from './UserContext'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import DetailProduct from './pages/DetailProduct'


const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/produk' element={<Product/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/tambahproduk' element={<AddProduct/>}></Route>
          <Route path='/ubahproduk/:id' element={<EditProduct/>}></Route>
          <Route path='/produk/:id' element={<DetailProduct/>}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
