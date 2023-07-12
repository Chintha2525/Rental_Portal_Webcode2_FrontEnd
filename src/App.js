import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { UserProvider } from './Components/Context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Products from "./Components/Products"
import CartItems from './Components/CartItems'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct';
import CreateProduct from './Components/CreateProduct';
import Contact from './Components/Contact';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <React.Fragment>
              <Header />
              <Home />
            </React.Fragment>
          } />

          <Route exact path='/cartitems' element={
            <React.Fragment>
              <Header />
              <br />
              <CartItems />
            </React.Fragment>
          } />

          <Route exact path='/products' element={
            <React.Fragment>
              <Header />
              <Products />
            </React.Fragment>
          } />

          <Route exact path='/login' element={
            <React.Fragment>
              <Header />
              <Login />
            </React.Fragment>
          } />

          <Route path="/addproduct" element={<AddProduct />} />

          <Route path="/editproduct/:id" element={<EditProduct />} />

          <Route path="/create-product" element={<CreateProduct />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
